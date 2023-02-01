/** @jsxImportSource @emotion/react */
import { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Navbar from "component/Molecules/Navbar";
import { allMenu } from "cache/blogData";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import Link from "next/link";
import color, { styleConfig as style } from "../Atoms/CssConfig";

interface LayoutProps {
    asPath: string;
}

const PaddingAside = styled.div`
    flex: 1 1 auto;
    height: 100%;
    width: 8px;
`;

const Header = styled.header`
    border-bottom: 1px solid ${color.deep};
    &.header-get-on {
        z-index: 10;
        position: fixed;
        top: 0;
        width: 100%;
    }
`;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    .main-area {
        flex: none;
        margin: 16px 0;
        width: 100%;
        ${style.lg} {
            width: 1000px;
            margin: 16px 12px;
        }
    }
`;

const Footer = styled.footer`
    background: ${color.white};
    border-top: 1px solid ${color.deep};
    color: ${color.black};
    font-size: 13px;
    letter-spacing: -0.01em;
    padding: 11px;
    div {
        ${style.space} {
            padding: ${style.spaceY(4)};
        }
    }
    svg {
        display: inline;
        vertical-align: middle;
    }
    a:hover {
        color: ${color.highlight};
    }
    &.fixed-bottom {
        position: fixed;
        bottom: 0;
    }
`;

const Layout: FunctionComponent<LayoutProps> = ({ asPath, children }) => {
    const [headerClass, setHeaderClass] = useState("");
    const [scrollState, setScrollState] = useState(0);
    const [footerClass, setFooterClass] = useState("");
    const mainArea = useRef<HTMLElement>(null);
    const thisYear = new Date().getFullYear();

    useEffect(() => {
        const setFooter = () => {
            if (mainArea.current) {
                const windowHeight = window.innerHeight;
                const contentHeight = mainArea.current.clientHeight;
                windowHeight - 150 > contentHeight ? setFooterClass("fixed-bottom") : setFooterClass("");
            }
        };
        window.addEventListener("resize", setFooter);
        setFooter();
    }, [footerClass, children, mainArea.current?.clientHeight]);

    useEffect(() => {
        const setHeader = () => {
            const { scrollY, innerHeight } = window;
            const currentScroll = scrollY + innerHeight;
            const { scrollHeight } = document.body;

            if (scrollY > 0 && ((scrollY > 36 && scrollState >= scrollY) || currentScroll + 100 > scrollHeight)) {
                setHeaderClass("header-get-on");
            } else {
                setHeaderClass("");
            }
            setScrollState(scrollY);
        };
        window.addEventListener("scroll", setHeader);
        setScrollState(window.scrollY);
    }, [scrollState]);

    return (
        <div
            css={css`
                color: ${color.black};
            `}
        >
            <Header className={headerClass}>
                <Navbar menuList={allMenu} activePath={asPath} />
            </Header>
            <MainWrapper>
                <PaddingAside />
                <main className="main-area" ref={mainArea}>
                    {children}
                </main>
                <PaddingAside />
            </MainWrapper>
            <Footer className={footerClass}>
                <div>
                    <FaEnvelope /> m3rri17@gmail.com
                </div>
                <div>
                    <FaGithub />
                    <Link href="https://github.com/m3rri">
                        <a target={"_blank"}> https://github.com/m3rri</a>
                    </Link>
                </div>
                <div>© 2022-{thisYear} KimHyeRi. All rights reserved.</div>
            </Footer>
        </div>
    );
};

export default Layout;
