import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POST_DIR = path.join(process.cwd(), "src/blog");

const sortListByDateOrTitle = (list) => list.sort((a, b) => (a.date <= b.date && a.title <= b.title ? 1 : -1));

export function getAllSortedPost() {
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

    return sortListByDateOrTitle(allPost);
}

export function getAllSortedPostId() {
    return getAllSortedPost().map((post) => post.id);
}

export function getAllSortedCategory() {
    const result = [];

    getAllSortedPost().forEach((post) => result.push(...post.category));

    return result;
}

export function getAllSortedTag(){
    const result = [];
    const lowerResult = [];

    getAllSortedPost().forEach((post)=>{
        post.tag.forEach(t=> lowerResult.indexOf(t.toLowerCase())<0 ? result.push(t)&&lowerResult.push(t.toLowerCase()) : null);
    });

    return result;
}

export function getPostData(id) {
    const fullPath = path.join(POST_DIR, `${id}.md`);
    const post = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(post);

    return {
        id,
        content: matterResult.content,
        ...matterResult.data,
    };
}

export function getPrevNextPost(id) {
    const allPostId = getAllSortedPostId();
    const index = allPostId.indexOf(id);
    const prev = index === allPostId.length - 1 ? null : getAllSortedPost()[index + 1];
    const next = index === 0 ? null : getAllSortedPost()[index - 1];

    return {
        prev,
        next,
    };
}

export function getNearPost(id) {
    const allPost = getAllSortedPost();
    const allPostId = getAllSortedPostId();
    const index = allPostId.indexOf(id);
    const nearPosts =
        index <= 2
            ? allPost.slice(0, 6)
            : index >= allPostId.length - 1 - 2
            ? allPost.slice(allPostId.length - 6, allPostId.length)
            : allPost.slice(index - 3, index + 3);

    return nearPosts.filter((post) => post.id != id);
}
