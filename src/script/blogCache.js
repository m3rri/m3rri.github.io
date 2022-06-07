const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const POST_DIR = path.join(process.cwd(), "src/blog");
const sortListByDateOrTitle = (list) =>
  list.sort((a, b) => (a.date < b.date && a.title < b.title ? 1 : -1));

function allPost() {
  const fileNames = fs.readdirSync(POST_DIR);
  const allPost = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(POST_DIR, fileName);
    const contents = fs.readFileSync(fullPath, "utf8");
    const meta = matter(contents).data;

    return {
      id,
      ...meta,
    };
  });

  return `export const allPost = ${JSON.stringify(
    sortListByDateOrTitle(allPost)
  )};`;
}

function getAllCategory(){
  const fileNames = fs.readdirSync(POST_DIR);
  const allPostMeta = fileNames.map((fileName) => {
    const fullPath = path.join(POST_DIR, fileName);
    const contents = fs.readFileSync(fullPath, "utf8");
    const meta = matter(contents).data;

    return {
      title: meta.title,
      date: meta.date,
      category: meta.category
    };
  });

  return sortListByDateOrTitle(allPostMeta)
  .map(meta=>{
      return {
          part: meta.category[0].toUpperCase(),
          name: meta.category[1].toLowerCase()
      };
  });
}

function getMenuList(){
  const allCategory = getAllCategory();
  const partList = allCategory.map(category=>category.part)
  .filter((part, index, array)=>array.indexOf(part)===index);
  const nameList = partList.map(part=>{
      const nameList = allCategory.filter(category=>{
          return category.part===part;
      })
      .map(category=>category.name)
      .filter((name, index, array)=>array.indexOf(name)===index);

      return nameList;
  }, []);

  let blogChildren = [];
  nameList.forEach((_nameList, index)=>{
      const part = partList[index];

      _nameList.forEach(name=>{
          const url = `/${name}`;
          name = name.charAt(0).toUpperCase()+name.slice(1);

          blogChildren.push({part, name, url});
      });
  });

  const menu = [{
      name: "Blog",
      url: "/blog",
      children: blogChildren
  },{
      name: "Portfolio",
      url: "/portfolio"
  },{
      name: "About",
      url: "/about"
  }];

  return `export const allMenu = ${JSON.stringify(menu)};`;
}

try {
  fs.readdirSync("src/cache");
} catch (e) {
  fs.mkdirSync("src/cache");
}

fs.writeFile("src/cache/blogData.js", `${allPost()} ${getMenuList()}`, function (err) {
  if (err) return console.log(err);
  console.log("-cached-");
});