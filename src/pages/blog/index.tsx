/** @jsxImportSource @emotion/react */
import type { NextPage } from "next";
import Link from "next/link";
import { css } from "@emotion/react";
import MainArticle from "component/Molecules/MainArticle";
import { getAllSortedPost } from "data/blog";
import { BlogMeta } from "component/types/Blog";
import color, { styleConfig as style } from "component/Atoms/CssConfig";

const emptyArticle = css`
    padding: 96px 0;
`;

const articleWrapper = css`
    margin-top: 16px;
    article {
        ${style.space} {
            margin: ${style.spaceY(32)};
        }
    }
    .blog-article-list {
        margin: 8px 0 6px;
        min-height: 150px;
        padding: 0 4px;
    }
    .blog-article {
        display: flex;
        flex-direction: row;
        padding: 12px 8px;
        ${style.space} {
            margin: ${style.spaceY(6)};
            border-top: 1px solid ${color.efefef};
        }
    }
    .blog-article-meta {
        align-self: center;
        flex: 1 1 0%;
    }
    .blog-article-meta-title-link div {
        color: ${color.black};
        font-weight: 500;
        &:hover {
            color: ${color.aaa};
        }
    }
    .blog-article-meta-etc {
        align-self: center;
        color: ${color.light};
        cursor: default;
        font-size: 12px;
        padding-top: 3px;
    }
    .blog-article-meta-date {
        color: ${color.aaa};
        flex: none;
        font-size: 12px;
        padding-top: 3px;
    }
`;

const Blog: NextPage = ({ fivePostByCategory, params }: any) => {
    console.log(params);

    return fivePostByCategory.length === 0 ? (
        <div css={emptyArticle}>
            <MainArticle articleName={"Blog"} />
        </div>
    ) : (
        <div css={articleWrapper}>
            {fivePostByCategory.map((cateInfo: { category: string; postList: BlogMeta[] }) => {
                return (
                    <MainArticle
                        key={cateInfo.category}
                        articleName={cateInfo.category}
                        articleLink={`blog/category/${cateInfo.category}`}
                    >
                        <div className="blog-article-list">
                            {cateInfo.postList.map((post) => {
                                return (
                                    <div key={post.id} className="blog-article">
                                        <div className="blog-article-meta">
                                            <Link href={`/blog/${post.id}`}>
                                                <a className="blog-article-meta-title-link">
                                                    <div>{post.title}</div>
                                                </a>
                                            </Link>
                                            <div className="blog-article-meta-etc">
                                                {post.category[1]} | #{post.tag.join(" #")}
                                            </div>
                                        </div>
                                        <span className="blog-article-meta-date">{post.date}</span>
                                    </div>
                                );
                            })}
                        </div>
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
