/** @jsxImportSource @emotion/react */
import type { NextPage } from "next";
import { css } from "@emotion/react";
import { getAllSortedPost } from "data/blog";
import { BlogMeta } from "component/types/Blog";
import articleWrapper from "component/Atoms/ArticleWrapper";
import MainArticle from "component/Molecules/MainArticle";
import { useTitle } from "data/store";
import BlogMetaList from "component/Molecules/BlogMetaList";

const emptyArticle = css`
    padding: 96px 0;
`;

const Blog: NextPage = ({ fivePostByCategory, params }: any) => {
    useTitle("Blog");

    return fivePostByCategory.length === 0 ? (
        <div css={emptyArticle}>
            <MainArticle title={"Blog"} />
        </div>
    ) : (
        <div css={articleWrapper}>
            {fivePostByCategory.map((cateInfo: { category: string; postList: BlogMeta[] }) => {
                return (
                    <MainArticle
                        key={cateInfo.category}
                        title={cateInfo.category}
                        link={`blog/category/${cateInfo.category}`}
                    >
                        <BlogMetaList blogMetaList={cateInfo.postList} className={"min-h-150"} />
                    </MainArticle>
                );
            })}
        </div>
    );
};

export default Blog;

export async function getStaticProps() {
    const allPost: BlogMeta[] = await getAllSortedPost();
    const categoryList = allPost
        .map((post) => post.category[0])
        .filter((category: string, i: number, ary: string[]) => ary.indexOf(category) === i);
    const FivePostByCategory = categoryList.map((category: string) => {
        let postList: BlogMeta[] = [];
        let count = 0;

        while (postList.length < 5 && count < allPost.length) {
            const post = allPost[count];
            if (post.category[0] === category) {
                postList.push(post);
            }
            count++;
        }

        return { category, postList };
    }, []);

    return {
        props: {
            fivePostByCategory: FivePostByCategory,
        },
    };
}
