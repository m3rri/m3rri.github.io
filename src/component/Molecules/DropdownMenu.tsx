/** @jsxImportSource @emotion/react */
import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Menu } from "component/types/Menu";
import color, { styleConfig as style } from "../Atoms/CssConfig";
import DropDownButton from "../Atoms/ButtonDropDown";

interface DropDownProps {
    menu: Menu;
    activePath: string;
}

const DropDownListWrapper = styled.div`
    background: ${color.white};
    border: 1px solid ${color.deep};
    margin: 8px 20px;
    position: relative;
    width: auto;
    z-index: 0;
    ${style.md} {
        margin: 6px;
        position: absolute;
        z-index: 10;
    }
    .dropdown-menu-list {
        font-size: 14px;
        padding: 4px 0;
        .dropdown-menu-list-part-name {
            color: ${color.black};
            font-size: 12px;
            font-weight: bold;
            padding-left: 8px;
        }
        li {
            border: 0;
        }
        a {
            display: block;
            justify-content: center;
            padding: 8px 16px;
            &:hover {
                background: ${color.light};
                color: ${color.white};
                transition-duration: 300ms;
            }
        }
        .dropdown-menu-active-link {
            background: ${color.highlight};
        }
    }
    ul:not(:first-of-type) {
        border-top: 1px solid ${color.light};
    }
`;

const menuActiveLink = css`
    border-bottom: 6px solid ${color.highlight};
`;

const DropdownMenu: FunctionComponent<DropDownProps> = ({ menu, activePath = "" }) => {
    const DROPDOWN_PREFIX = "dropdown_";
    const [toggleLi, setToggleLi] = useState("none");
    const { name, url, children } = menu;
    const partList = children!.map((child) => child.part).filter((part, idx, list) => idx === list.indexOf(part));
    const ulList = partList.map((part, i) => {
        return (
            <ul key={`ul-${i}`} className="dropdown-menu-list">
                {part && part.trim() !== "" && <span className="dropdown-menu-list-part-name">{part}</span>}
                {children!
                    .filter((child) => child.part === part)
                    .map((child, j) => {
                        const dropdownActiveLink = activePath.startsWith(`${url}${child.url}`)
                            ? "dropdown-menu-active-link"
                            : "";

                        return (
                            <li key={`${i}-${j}`}>
                                <Link href={`${url}${child.url}`}>
                                    <a className={dropdownActiveLink}>{child.name}</a>
                                </Link>
                            </li>
                        );
                    })}
            </ul>
        );
    });

    useEffect(() => {
        const dropdownToggle = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.dataset.dropdownFor !== `${DROPDOWN_PREFIX}${name}` &&
                target.closest(`#${DROPDOWN_PREFIX}${name}`) === null
            ) {
                setToggleLi("none");
                window.removeEventListener("click", dropdownToggle);
            }
        };
        window.addEventListener("click", dropdownToggle);
    }, [toggleLi]);

    return (
        <>
            <DropDownButton
                data-dropdown-for={`${DROPDOWN_PREFIX}${name}`}
                onClick={() => setToggleLi(toggleLi === "none" ? "" : "none")}
                css={activePath.startsWith(url) ? menuActiveLink : {}}
            >
                {name} 📔
            </DropDownButton>
            <DropDownListWrapper
                id={`${DROPDOWN_PREFIX}${name}`}
                css={css`
                    display: ${toggleLi};
                `}
            >
                {ulList}
            </DropDownListWrapper>
        </>
    );
};

export default DropdownMenu;
