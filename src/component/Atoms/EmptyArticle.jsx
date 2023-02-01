/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import color from "./CssConfig";

const EmptyArticle = styled.div`
    padding: 60px 0;
    text-align: center;
    color: ${color.aaa};
    &::before {
        content: '/ empty😪 /';
    },
`;

export default EmptyArticle;
