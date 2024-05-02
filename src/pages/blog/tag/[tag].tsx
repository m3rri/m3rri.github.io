/** @jsxImportSource @emotion/react */
import type { GetStaticPropsContext, NextPage } from "next";
import { css } from "@emotion/react";
import { getAllSortedPost, getAllSortedCategory } from "data/blog";
import { BlogMeta } from "component/types/Blog";
import color from "component/Atoms/CssConfig";
import articleWrapper from "component/Atoms/ArticleWrapper";
import MainArticle from "component/Molecules/MainArticle";
import { useTitle } from "data/store";
import BlogMetaList from "component/Molecules/BlogMetaList";

const CagegoryList: NextPage = ({ tag, allPostByTag }: any) => {
    useTitle(`Blog\\Tag\\${tag}`);

    return (
        <div>
            <div
                css={css`
                    background: ${color.deep};
                    color: ${color.white};
                    cursor: default;
                    font-size: 16px;
                    font-weight: 100;
                    margin-bottom: 32px;
                    padding: 0.01rem 0 0.25rem;
                    text-align: center;
                    width: 200px;
                    a,
                    span {
                        color: inherit;
                    }
                    a {
                        font-style: italic;
                        &:hover {
                            font-style: normal;
                        }
                    }
                    span {
                        font-weight: bold;
                    }
                `}
            >
                #{tag}
            </div>
            <div css={articleWrapper}>
                <MainArticle>
                    <BlogMetaList blogMetaList={allPostByTag} className="min-h-150" />
                </MainArticle>
            </div>
        </div>
    );
};

export default CagegoryList;

export async function getStaticPaths() {
    return {
        paths: getAllSortedCategory().map((tag: string) => ({ params: { tag } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const { tag } = params!;
    console.log(tag);

    if (tag) {
        const allPost: BlogMeta[] = await getAllSortedPost();
        let allPostByTag: BlogMeta[] = [];

        allPost.forEach((post) => {
            const tags: string[] = post.tag.map(t=>t.toLowerCase());
            const index = tags.indexOf(tag as string);

            if (index >= 0) {
                allPostByTag.push(post);
            }
        });

        return {
            props: {
                tag, allPostByTag
            },
        };
    } else {
        return {
            props: {},
        };
    }
}
