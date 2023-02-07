/** @jsxImportSource @emotion/react */
import type { NextPage } from "next";
import Head from "next/head";
import { css } from "@emotion/react";
import MainArticle from "component/Molecules/MainArticle";
import { BLOG_NAME } from "component/Molecules/Navbar";

const Portfolio: NextPage = () => {
    return (
        <div
            css={css`
                margin-top: 16px;
            `}
        >
            <Head>
                <title>{BLOG_NAME} - Portfolio</title>
            </Head>
            <MainArticle articleName="🗃Portfolio"></MainArticle>
        </div>
    );
};

export default Portfolio;
