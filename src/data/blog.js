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
            ? allPost.slice(0, 5)
            : index >= allPostId.length - 1 - 2
            ? allPost.slice(allPostId.length - 5, allPostId.length)
            : allPost.slice(index - 2, index + 3);

    return nearPosts;
}
