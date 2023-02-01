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

const List = styled.ul`
    margin: 8px;
    li {
        color: ${color.deep};
        font-weight: bold;
        ${style.space} {
            margin: ${style.spaceY(4)};
        }
        svg.list-icon {
            display: inline;
            height: 0.7em;
            padding-right: 7px;
            color: ${color.black};
        },
    },
`;

const ContentList: FunctionComponent<ListProps> = ({ liElements, Icon = FaSquare }) => {
    const list = liElements.map((liElement, idx) => {
        return (
            <li key={idx}>
                <Icon className="list-icon" />
                {liElement}
            </li>
        );
    });

    return <List>{list}</List>;
};

export default ContentList;
