import { GetServerSidePropsContext } from "next";
import { getServerSideSitemap } from "next-sitemap";
import { getAllSortedPostId, getAllSortedCategory } from "data/blog";

//code : https://www.zodaland.com/tech/16
const URL = "https://m3rri.github.io";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const posts = await getAllSortedPostId();
    const categories = await getAllSortedCategory();
    const lastmod = new Date().toISOString();

    const defaultFields = [
        {
            loc: URL,
            changefreq: "never",
            lastmod,
        },
        {
            loc: `${URL}/portfolio`,
            changefreq: "never",
            lastmod,
        },
    ];

    const postFields = posts.map((id: string) => ({
        loc: `${URL}/blog/${id}`,
        changefreq: "never",
        lastmod,
    }));

    const categoryFields = categories.map((category: string) => ({
        loc: `${URL}/blog/category/${category}`,
        changefreq: "never",
        lastmod,
    }));

    const fields = [...defaultFields, ...postFields, ...categoryFields];

    return getServerSideSitemap(ctx, fields);
};

export default () => {
    return;
};
