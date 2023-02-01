/** @jsxImportSource @emotion/react */
import { FunctionComponent } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import color from "../Atoms/CssConfig";
import ArticleTitle from "../Atoms/BoxTitle";
import EmptyArticle from "../Atoms/EmptyArticle";

interface ArticleProps {
    articleLink?: String;
    articleName: String;
}

const Article = styled.article`
    border: 1px solid ${color.deep};
    padding: 20px 12px 12px;
    position: relative;
`;

const MainArticle: FunctionComponent<ArticleProps> = ({ articleLink, articleName, children }) => {
    return (
        <Article>
            {articleLink ? (
                <Link href={`/${articleLink}`}>
                    <a>
                        <ArticleTitle className="has-link">{articleName}</ArticleTitle>
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
