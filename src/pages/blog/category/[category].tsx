/** @jsxImportSource @emotion/react */
import type { GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import { css } from "@emotion/react";
import { getAllSortedPost, getAllSortedCategory } from "data/blog";
import { BlogMeta } from "component/types/Blog";
import color from "component/Atoms/CssConfig";
import articleWrapper from "component/Atoms/ArticleWrapper";
import MainArticle from "component/Molecules/MainArticle";
import { useTitle } from "data/store";
import BlogMetaList from "component/Molecules/BlogMetaList";

const CagegoryList: NextPage = ({ categoryInfo, fivePostByCategory }: any) => {
    const { request, parent } = categoryInfo;
    const categoryList = Object.keys(fivePostByCategory);

    const parentLabel = parent.toUpperCase();
    const requestLabel = request.charAt(0).toUpperCase() + request.slice(1);

    useTitle(`Blog\\Category\\${requestLabel}`);

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
                {request == parent ? (
                    parentLabel
                ) : (
                    <>
                        <Link href={`${parent}`}>
                            <a>{parentLabel}</a>
                        </Link>
                        &nbsp;\<span> {requestLabel}</span>
                    </>
                )}
            </div>
            <div css={articleWrapper}>
                {categoryList.map((category: string) => {
                    const posts = fivePostByCategory[category];

                    return (
                        <MainArticle key={category} title={category} link={`blog/category/${category}`}>
                            <BlogMetaList blogMetaList={posts} className="min-h-150" />
                        </MainArticle>
                    );
                })}
            </div>
        </div>
    );
};

export default CagegoryList;

export async function getStaticPaths() {
    return {
        paths: getAllSortedCategory().map((category: string) => ({ params: { category } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const { category } = params!;

    if (category) {
        const allPost: BlogMeta[] = await getAllSortedPost();
        let parentCategory: string = "";
        let fivePostByCategory: { [key: string]: BlogMeta[] } = {};

        allPost.forEach((post) => {
            const categories: string[] = post.category;
            const index = categories.indexOf(category as string);

            if (index >= 0) {
                const indexOfCategoryToCollect: number = index == categories.length - 1 ? index : index + 1;
                const categoryToCollect: String = categories[indexOfCategoryToCollect];
                let postList = fivePostByCategory[categoryToCollect as string];

                parentCategory = parentCategory == "" ? categories[0] : parentCategory;
                0;
                if (!postList) {
                    fivePostByCategory[categoryToCollect as string] = [post];
                } else if (postList.length <= 5) {
                    postList.push(post);
                }
            }
        });

        return {
            props: {
                categoryInfo: {
                    request: category,
                    parent: parentCategory,
                },
                fivePostByCategory,
            },
        };
    } else {
        return {
            props: {},
        };
    }
}
