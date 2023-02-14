/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { styleConfig as style } from "./CssConfig";

const articleWrapper = css`
    margin: 16px;
    article {
        ${style.space} {
            margin: ${style.spaceY(32)};
        }
    }
`;

export default articleWrapper;
