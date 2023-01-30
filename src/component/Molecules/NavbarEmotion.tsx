/** @jsxImportSource @emotion/react */
import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Menu } from "component/types/Menu";
import DropdownMenu from "./DropdownMenu";
import color, { styleConfig as style } from "../Atoms/CssConfig";

interface NavbarProps {
    menuList: Menu[];
    activePath: string;
}

const BLOG_NAME = "MERRI`s DEVELOG";

const Nav = styled.nav({
    padding: "9px 8px",
    background: color.white,
    "& .container": {
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
    },
    "& .blog-name": {
        alignItems: "center",
        alignSelf: "center",
        cursor: "pointer",
        display: "flex",
        fontStyle: "italic",
        fontSize: "20px",
        color: color.black,
        fontWeight: "bold",
        whiteSpace: "nowrap",
        "&:hover": {
            fontStyle: "normal",
        },
    },
    "& .collapse-button": {
        alignItems: "center",
        marginLeft: "12px",
        [style.md]: {
            display: "none",
        },
        justifyContent: "center",
        display: "inline-flex",
        padding: "0 4px",
    },
    "& .menu-list-wrapper": {
        width: "100%",
        marginBottom: "-6px",
        [style.md]: {
            border: 0,
            display: "block",
            width: "auto",
            marginBottom: 0,
        },
        ul: {
            display: "flex",
            flexDirection: "column",
            margin: "16px -8px 0 -8px",
            "li:not(:first-of-type)": {
                borderTop: `1px solid ${color.deep}`,
            },
            [style.md]: {
                flexDirection: "row",
                margin: 0,
                fontSize: "14px",
                lineHeight: "20px",
                "li:not(:first-of-type)": {
                    borderTop: 0,
                    borderLeft: `1px solid ${color.deep}`,
                },
            },
        },
    },
});

const List = styled.li({
    [style.md]: {
        padding: "14px 20px",
        margin: "-10px 0",
    },
});

const nonDummy = css`
    &:hover {
        background: ${color.light};
        transition-duration: 500ms;
    }
`;
//color: ${property.linkText} || ${color.black};
const menuLink = css`
    display: block;
    padding: 8px 16px 8px 12px;
    ${style.md} {
        padding-bottom: 7px;
        padding-top: 7px;
        padding-right: 20px;
        margin: -7px -20px;
    }
    &:hover {
        color: ${color.black};
    }
`;

const menuHighlight = css`
    color: ${color.highlight};
`;

const Navbar: FunctionComponent<NavbarProps> = ({ menuList, activePath }) => {
    const [toggleUl, setToggleUl] = useState("none");
    const dummyLi = (key = "key") => <List key={key} />;
    const linkList = menuList.map((menu, idx) => {
        const linkText = activePath.startsWith(menu.url) ? menuHighlight : {};

        return (
            <List key={`${idx}_0`} css={nonDummy}>
                {menu.children && menu.children.length > 0 ? (
                    <DropdownMenu menu={menu} activePath={activePath} />
                ) : (
                    <Link href={menu.url}>
                        <a css={menuLink && linkText}>{menu.name} 📄</a>
                    </Link>
                )}
            </List>
        );
    });
    linkList.splice(0, 0, dummyLi("key0"));
    linkList.push(dummyLi("key_last"));

    useEffect(() => {
        const menuListToggle = () => {
            const { innerWidth } = window;
            if (innerWidth < 768) {
                setToggleUl("none");
            } else {
                setToggleUl("");
                window.addEventListener("resize", menuListToggle);
            }
        };

        window.addEventListener("resize", menuListToggle);
    }, [toggleUl]);

    return (
        <Nav>
            <div className="container">
                <Link href="/">
                    <a className="blog-name">{BLOG_NAME}</a>
                </Link>
                <button
                    type="button"
                    className="collapse-button"
                    onClick={() => setToggleUl(toggleUl === "none" ? "" : "none")}
                >
                    <span className="sr-only">Open blog menu</span>
                    📚
                </button>
                <div className="menu-list-wrapper" css={{ display: toggleUl }}>
                    <ul>{linkList}</ul>
                </div>
            </div>
        </Nav>
    );
};

export default Navbar;
