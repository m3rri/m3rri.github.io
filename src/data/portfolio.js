import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DATA_DIR = path.join(process.cwd(), "src/portfolio");

export function getAllSortedPortfolio() {
    const fileNames = fs.readdirSync(DATA_DIR);
    const dataList = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");

        const fullPath = path.join(DATA_DIR, fileName);
        const contents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(contents);
        const meta = matterResult.data;

        return {
            id,
            content: matterResult.content,
            ...meta,
        };
    });

    return dataList.sort((a, b) => (a.id <= b.id ? 1 : -1));
}
