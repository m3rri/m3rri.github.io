/** @jsxImportSource @emotion/react */
import { FunctionComponent } from "react";
import styled from "@emotion/styled";
import color from "../Atoms/CssConfig";
import ArticleTitle, { TitleBoxProps } from "../Atoms/TitleBox";
import EmptyArticle from "../Atoms/EmptyArticle";

const Article = styled.article`
    border: 1px solid ${color.deep};
    padding: 20px 12px 12px;
    position: relative;
`;

const MainArticle: FunctionComponent<TitleBoxProps> = (props) => {
    return (
        <Article>
            <ArticleTitle {...props} />
            {props.children || <EmptyArticle />}
        </Article>
    );
};

export default MainArticle;
