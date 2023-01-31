/** @jsxImportSource @emotion/react */
import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Menu as MenuType } from "component/types/Menu";
import DropdownMenu from "./DropdownMenu";
import color, { styleConfig as style } from "../Atoms/CssConfig";

interface NavbarProps {
    menuList: MenuType[];
    activePath: string;
}

const BLOG_NAME = "MERRI`s DEVELOG";

const Nav = styled.nav({
    padding: "7px 8px",
    background: color.white,
    "& .navbar-container": {
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
    },
    "& .navbar-blog-name": {
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
    "& .navbar-dropdown-button": {
        alignItems: "center",
        marginLeft: "12px",
        [style.md]: {
            display: "none",
        },
        justifyContent: "center",
        display: "inline-flex",
        padding: "0 4px",
    },
    "& .navbar-menu-list-wrapper": {
        width: "100%",
        marginBottom: "-6px",
        [style.md]: {
            border: 0,
            display: "block",
            width: "auto",
            marginBottom: 0,
        },
        "& .navbar-menu-list": {
            display: "flex",
            flexDirection: "column",
            fontSize: "14px",
            margin: "16px -8px 0 -8px",
            "& .navbar-menu:not(:first-of-type)": {
                borderTop: `1px solid ${color.deep}`,
            },
            [style.md]: {
                flexDirection: "row",
                margin: 0,
                fontSize: "14px",
                lineHeight: "20px",
                "& .navbar-menu:not(:first-of-type)": {
                    borderTop: 0,
                    borderLeft: `1px solid ${color.deep}`,
                },
            },
        },
    },
});

const Menu = styled.li({
    [style.md]: {
        padding: "10px 20px 14px",
        margin: "-10px 0",
    },
});

const notDummyMenu = css`
    &:hover {
        background: ${color.light};
        transition-duration: 500ms;
        .navbar-menu-link,
        .navbar-menu a {
            color: ${color.black};
        }
    }
`;

const link = css`
    cursor: pointer;
    display: block;
    padding: 8px 16px 8px 12px;
    ${style.md} {
        padding-bottom: 7px;
        padding-top: 7px;
        padding-right: 12px;
        margin: -7px -20px;
    }
    &.navbar-menu-active-link {
        color: ${color.highlight};
    }
`;

const Navbar: FunctionComponent<NavbarProps> = ({ menuList, activePath }) => {
    const [toggleUl, setToggleUl] = useState("none");
    const dummyMenu = (key = "key") => <Menu key={key} className="navbar-menu" />;
    const _menuList = menuList.map((menu, idx) => {
        return (
            <Menu key={`${idx}_0`} css={notDummyMenu} className="navbar-menu">
                {menu.children && menu.children.length > 0 ? (
                    <DropdownMenu menu={menu} activePath={activePath} />
                ) : (
                    <Link href={menu.url}>
                        <a
                            css={link}
                            className={
                                "navbar-menu-link " + (activePath.startsWith(menu.url) ? "navbar-menu-active-link" : "")
                            }
                        >
                            {menu.name} 📄
                        </a>
                    </Link>
                )}
            </Menu>
        );
    });

    _menuList.splice(0, 0, dummyMenu("key0"));
    _menuList.push(dummyMenu("key_last"));

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
            <div className="navbar-container">
                <Link href="/">
                    <a className="navbar-blog-name">{BLOG_NAME}</a>
                </Link>
                <button
                    type="button"
                    className="navbar-dropdown-button"
                    onClick={() => setToggleUl(toggleUl === "none" ? "" : "none")}
                >
                    <span className="sr-only">Open blog menu</span>
                    📚
                </button>
                <div className="navbar-menu-list-wrapper" css={{ display: toggleUl }}>
                    <ul className="navbar-menu-list">{_menuList}</ul>
                </div>
            </div>
        </Nav>
    );
};

export default Navbar;
