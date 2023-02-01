/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import color, { styleConfig as style } from "./CssConfig";

const DropDownButton = styled.button`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 8px 16px 8px 12px;
    width: 100%;
    &:hover {
        border: 1 solid ${color.light};
        color: ${color.black};
        transition-duration: 500ms;
    }
    ${style.md} {
        padding: 14px 12px;
        margin: -14px -20px;
        width: auto;
    }
`;

export default DropDownButton;
