/** @jsxImportSource @emotion/react */
import type { GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighligher } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { getAllSortedPostId, getPostData, getPrevNextPost } from "data/blog";
import { BlogMeta } from "component/types/Blog";
import color, { styleConfig as style } from "component/Atoms/CssConfig";
import { useTitle } from "data/store";

const Meta = ({ category, tag }: { category: string[]; tag: string[] }) => {
    const StyledDiv = styled.div`
        padding: 8px;
        div {
            font-size: 14px;
        }
    `;

    return (
        <StyledDiv>
            <div>📂 {category.join(" > ")}</div>
            <div>🧶 #{tag.join(" #")}</div>
        </StyledDiv>
    );
};

const Header = ({ title, date }: { title: string; date: string }) => {
    const StyledHeader = styled.header`
        border-bottom: 1px solid ${color.deep};
        padding: 8px;
        h1 {
            color: ${color.black};
            padding-bottom: 4px;
        }
        div {
            color: ${color.aaa};
            font-size: 14px;
        }
    `;

    return (
        <StyledHeader>
            <h1>{title}</h1>
            <div>{date}</div>
        </StyledHeader>
    );
};

const BlogLink = ({ data, type }: { data: BlogMeta; type: number }) => {
    const text = type > 0 ? "다음" : "이전";
    const emtpyLinked = css`
        color: ${color.aaa};
        display: none;
        font-size: 14px;
        ${style.md} {
            display: block;
        }
    `;
    const hasLinked = css`
        cursor: pointer;
        padding-left: 4px;
        &:hover {
            color: ${color.aaa};
        }
    `;

    if (data === null) {
        return <span css={emtpyLinked}>{text}글이 없습니다</span>;
    } else {
        const { id, title } = data;
        const link = type > 0 ? `${title} 👉` : `👈 ${title}`;

        return (
            <Link href={`/blog/${id}`}>
                <a css={hasLinked}>{link}</a>
            </Link>
        );
    }
};

const Footer = ({ prev, next }: { prev: BlogMeta; next: BlogMeta }) => {
    const StyledFooter = styled.footer`
        border-top: 1px solid ${color.deep};
        display: flex;
        flex-direction: column;
        padding: 4px 8px 5px;
        ${style.md} {
            flex-direction: row;
        }
        ${style.lg} {
            padding-left: 0;
            padding-right: 0;
        }
        div:first-of-type {
            flex: 1 1 0%;
        }
        div:last-of-type {
            text-align: right;
        }
    `;

    return (
        <StyledFooter>
            <div>
                <BlogLink data={prev} type={-1} />
            </div>
            <div>
                <BlogLink data={next} type={1} />
            </div>
        </StyledFooter>
    );
};

const PostWrapper = styled.div`
    border: 0;
    margin: -16px 0;
    ${style.lg} {
        border-left: 1px solid ${color.deep};
        border-right: 1px solid ${color.deep};
        margin-left: 0;
        margin-right: 0;
    }
    .markdown-body {
        padding: 12px 20px;
        ${style.lg} {
            padding-left: 16px;
            padding-right: 16px;
        }
    }
    .markdown-body pre div,
    .markdown-body pre div code {
        background: none !important;
    }
    .markdown-body img {
        display: block;
        margin: 1rem auto;
    }
    .end-of-post {
        color: ${color.def};
        padding: 8px 8px0 8px;
        ${style.lg} {
            padding-left: 0;
            padding-right: 0;
        }
    }
`;

const BlogPost: NextPage = ({ post, prev, next }: any) => {
    const { title, date, category, tag, content } = post;

    useTitle(title);

    return (
        <PostWrapper>
            <Header title={title} date={date} />
            <Meta category={category} tag={tag} />
            <main className="markdown-body">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || "");
                            return !inline && match ? (
                                <SyntaxHighligher language={match[1]} PreTag="div" {...props} style={materialLight}>
                                    {String(children).replace(/\n$/, "")}
                                </SyntaxHighligher>
                            ) : (
                                <code {...props}>{children}</code>
                            );
                        },
                    }}
                >
                    {content}
                </ReactMarkdown>
            </main>
            <div className="end-of-post">/end of {title}</div>
            <Footer prev={prev} next={next} />
        </PostWrapper>
    );
};

export default BlogPost;

export async function getStaticPaths() {
    return {
        paths: getAllSortedPostId().map((postId: string) => ({ params: { postId } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const { postId } = params!;
    const post = getPostData(postId);
    const { prev, next } = getPrevNextPost(postId);

    return {
        props: {
            post,
            prev,
            next,
        },
    };
}
