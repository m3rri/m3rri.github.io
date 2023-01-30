/** @jsxImportSource @emotion/react */
import { FunctionComponent } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import color from "../Atoms/CssConfig";

interface ArticleProps {
    articleLink?: String;
    articleName: String;
}

const Article = styled.article({
    border: `1px solid ${color.deep}`,
    padding: "12px",
    position: "relative",
});

const ArticleTitle = styled.h2({
    color: color.def,
    textAlign: "center",
    letterSpacing: "0.1em",
    fontWeight: "bold",
    border: `1px solid ${color.deep}`,
    padding: "6px 16px",
    position: "absolute",
    top: "-20px",
    left: "-1px",
    width: "300px",
    background: color.white,
});

const EmptyArticle = styled.div({
    padding: "60px 0",
    textAlign: "center",
    color: color.aaa,
    "&::before": {
        content: `'/ empty😪 /'`,
    },
});

const link = css`
    hover: {
        color: ${color.light};
    }
`;

const MainArticle: FunctionComponent<ArticleProps> = ({ articleLink, articleName, children }) => {
    return (
        <Article>
            {articleLink ? (
                <Link href={`/${articleLink}`}>
                    <a css={link}>
                        <ArticleTitle>{articleName}</ArticleTitle>
                    </a>
                </Link>
            ) : (
                <ArticleTitle>{articleName}</ArticleTitle>
            )}
            {children || <EmptyArticle />}
        </Article>
    );
};

export default MainArticle;
