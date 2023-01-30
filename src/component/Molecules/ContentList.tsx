/** @jsxImportSource @emotion/react */
import { FunctionComponent, ReactNode } from "react";
import { IconType } from "react-icons/lib";
import { FaSquare } from "react-icons/fa";
import styled from "@emotion/styled";
import color, { styleConfig as style } from "../Atoms/CssConfig";

interface ListProps {
    liElements: (ReactNode | String)[];
    Icon?: IconType;
}

const List = styled.ul({
    margin: "8px",
    marginTop: "12px",
    marginBottom: "20px",
    li: {
        color: color.deep,
        fontWeight: "bold",
        [style.space]: {
            margin: style.spaceY(4),
        },
        svg: {
            display: "inline",
            paddingBottom: "4px",
            paddingRight: "8px",
            color: color.black,
        },
    },
});

const ContentList: FunctionComponent<ListProps> = ({ liElements, Icon = FaSquare }) => {
    const list = liElements.map((liElement, idx) => {
        return (
            <li key={idx}>
                <Icon />
                {liElement}
            </li>
        );
    });

    return <List>{list}</List>;
};

export default ContentList;
