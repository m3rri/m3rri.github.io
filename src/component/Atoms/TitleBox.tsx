/** @jsxImportSource @emotion/react */
import { FunctionComponent } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import color from "./CssConfig";

interface TitleBoxProps {
    title: String;
    link?: String;
}

const TitleBox = styled.h2`
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

const TitleBoxComponent: FunctionComponent<TitleBoxProps> = ({ title, link }) => {
    return (
        <>
            {link ? (
                <Link href={`/${link}`}>
                    <a>
                        <TitleBox className="has-link">{title}</TitleBox>
                    </a>
                </Link>
            ) : (
                <TitleBox>{title}</TitleBox>
            )}
        </>
    );
};

export default TitleBoxComponent;
export type { TitleBoxProps };
