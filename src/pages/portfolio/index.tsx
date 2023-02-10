/** @jsxImportSource @emotion/react */
import type { NextPage } from "next";
import { css } from "@emotion/react";
import MainArticle from "component/Molecules/MainArticle";
import { useTitle } from "data/store";

const Portfolio: NextPage = () => {
    useTitle("Portfolio");

    return (
        <div
            css={css`
                margin-top: 16px;
            `}
        >
            <MainArticle title="🔮Portfolio"></MainArticle>
        </div>
    );
};

export default Portfolio;
