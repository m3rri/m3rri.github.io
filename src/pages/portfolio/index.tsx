/** @jsxImportSource @emotion/react */
import MainArticle from "component/Molecules/MainArticle";
import type { NextPage } from "next";
import { css } from "@emotion/react";

const Portfolio: NextPage = () => {
    return (
        <div
            css={css`
                margin-top: 16px;
            `}
        >
            <MainArticle articleName="🗃Portfolio"></MainArticle>
        </div>
    );
};

export default Portfolio;
