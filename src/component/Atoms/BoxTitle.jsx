/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import color from "./CssConfig";

const BoxTitle = styled.h2`
    background: ${color.white};
    color: ${color.def};
    letter-spacing: 0.1em;
    text-align: center;
    border: 1px solid ${color.deep};
    padding: 6px 0;
    position: absolute;
    top: -32px;
    left: -1px;
    width: 300px;
`;

export default BoxTitle;
