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

const Nav = styled.nav`
    padding: 7px 8px;
    background: ${color.white};
    & .navbar-container {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
    & .navbar-blog-name {
        align-items: center;
        align-self: center;
        cursor: pointer;
        display: flex;
        font-style: italic;
        font-size: 20px;
        color: ${color.black};
        font-weight: bold;
        white-space: nowrap;
        &:hover {
            font-style: normal;
        }
    }
    & .navbar-dropdown-button {
        align-items: center;
        margin-left: 12px;
        ${style.md} {
            display: none;
        }
        justify-content: center;
        display: inline-flex;
        padding: 0 4px;
    }
    & .navbar-menu-list-wrapper {
        width: 100%;
        margin-bottom: -6px;
        ${style.md} {
            border: 0;
            display: block;
            width: auto;
            margin-bottom: 0;
        }
        & .navbar-menu-list {
            display: flex;
            flex-direction: column;
            font-size: 14px;
            margin: 16px -8px 0 -8px;
            & .navbar-menu {
                ${style.space} {
                    border-top: 1px solid ${color.deep};
                }
            }
            ${style.md} {
                flex-direction: row;
                margin: 0;
                font-size: 14px;
                line-height: 20px;
                & .navbar-menu:not(:first-of-type) {
                    border-top: 0;
                    border-left: 1px solid ${color.deep};
                }
            }
        }
    }
`;

const Menu = styled.li`
    ${style.md} {
        padding: 10px 20px 7px;
        margin: -10px 0 -10px -1px;
        &.active-link-home {
            padding-bottom: 12px;
        }
    }
`;

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
        border-bottom: 6px solid transparent;
        border-image: linear-gradient(to right, ${color.highlight} 25%, #fff 25%) 1 100%;
        border-image-slice: 1;
        ${style.md} {
            border-image: linear-gradient(to right, ${color.highlight} 100%, #fff) 1 100%;
            border-image-slice: 1;
        }
    }
`;

const Navbar: FunctionComponent<NavbarProps> = ({ menuList, activePath }) => {
    const [toggleUl, setToggleUl] = useState("none");
    const dummyMenu = (key = "key") => <Menu key={key} className="navbar-menu" />;
    const _menuList = menuList.map((menu, idx) => {
        return (
            <Menu
                key={`${idx}_0`}
                css={notDummyMenu}
                className={`navbar-menu ${activePath != "/" || "active-link-home"}`}
            >
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
