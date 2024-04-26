/** @jsxImportSource @emotion/react */
import type { NextPage } from "next";
import { css } from "@emotion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighligher } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import MainArticle from "component/Molecules/MainArticle";
import { styleConfig as style } from "component/Atoms/CssConfig";
import { useTitle } from "data/store";
import { getAllSortedPortfolio } from "data/portfolio";

const Portfolio: NextPage = ({ dataList }: any) => {
    useTitle("Portfolio");

    return (
        <div
            css={css`
                margin-top: 16px;
                article {
                    ${style.space} {
                        margin: ${style.spaceY(32)};
                    }
                }
            `}
        >
            {dataList.map((data: { id: number; content: string; title: string }) => (
                <MainArticle key={data.id} title={data.title}>
                    {/* <main className="markdown-body">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                code({ node, inline, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || "");
                                    return !inline && match ? (
                                        <SyntaxHighligher
                                            language={match[1]}
                                            PreTag="div"
                                            {...props}
                                            style={materialLight}
                                        >
                                            {String(children).replace(/\n$/, "")}
                                        </SyntaxHighligher>
                                    ) : (
                                        <code {...props}>{children}</code>
                                    );
                                },
                            }}
                        >
                            {data.content}
                        </ReactMarkdown>
                    </main> */}
                </MainArticle>
            ))}
        </div>
    );
};

export default Portfolio;

export async function getStaticProps() {
    const dataList = getAllSortedPortfolio();
    return {
        props: {
            dataList,
        },
    };
}
