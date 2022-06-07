import { getAllSortedPost } from "../../data/blog";

const getPosts = (req, res) => {
  const results = filterPost(req.query);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(results));
};

function filterPost(query) {
  const keys = Object.keys(query);
  const posts =
    process.env.NODE_ENV === "production"
      ? require("../../cache/blogData.js").allPost
      : getAllSortedPost();

  if (keys.length === 0) {
    return posts;
  } else {
    const name = keys[0];
    const value = query[name];

    let result;
    switch (name) {
      case "title":
        result = posts.filter((post) =>
          post.title.toLowerCase().includes(value)
        );
        break;
      case "tag":
        result = posts.filter(
          (post) => post.tag.indexOf(value.toLowerCase()) >= 0
        );
        break;
      case "category":
        result = posts.filter(
          (post) => post.category.indexOf(value.toLowerCase()) >= 0
        );
        break;
      default:
        result = posts;
        break;
    }

    return result;
  }
}

export default getPosts;
