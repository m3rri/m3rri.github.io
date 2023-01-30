import { FunctionComponent, useEffect, useState } from "react";
//import Navbar from 'component/Molecules/Navbar';
import Navbar from "component/Molecules/NavbarEmotion";
import { allMenu } from "cache/blogData";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import Link from "next/link";

interface LayoutProps {
    asPath: string;
}

const mainPadding = <div className="aside-non-role h-full flex-auto w-2"></div>;
const DEFAULT_BORDER = "border-b border-deep";

const Layout: FunctionComponent<LayoutProps> = ({ asPath, children }) => {
    const [headerClass, setHeaderClass] = useState(DEFAULT_BORDER);
    const [scrollState, setScrollState] = useState(0);
    const [footerClass, setFooterClass] = useState("mt-5");

    useEffect(() => {
        const setFooter = () => {
            const windowHeight = window.innerHeight;
            const contentHeight = document.querySelector(".mainArea")!.clientHeight;
            windowHeight - 150 > contentHeight ? setFooterClass("fixed bottom-0 w-full") : setFooterClass("mt-5");
        };
        window.addEventListener("resize", setFooter);
        setFooter();
    }, [footerClass, children]);

    useEffect(() => {
        const setHeader = () => {
            const { scrollY, innerHeight } = window;
            const currentScroll = scrollY + innerHeight;
            const { scrollHeight } = document.body;

            if (scrollY > 0 && ((scrollY > 36 && scrollState >= scrollY) || currentScroll + 100 > scrollHeight)) {
                setHeaderClass(`z-10 fixed top-0 w-full ${DEFAULT_BORDER}`);
            } else {
                setHeaderClass(DEFAULT_BORDER);
            }
            setScrollState(scrollY);
        };
        window.addEventListener("scroll", setHeader);
        setScrollState(window.scrollY);
    }, [scrollState]);

    return (
        <div className="text-black">
            <header className={headerClass}>
                <Navbar menuList={allMenu} activePath={asPath} />
            </header>
            <div className="mainArea flex flex-row">
                {mainPadding}
                <main className="px-3 w-full lg:w-[1000px] my-4 flex-none">{children}</main>
                {mainPadding}
            </div>
            <footer
                className={`p-4 space-y-2 bg-white border-t border-deep ${footerClass} w-full text-black tracking-widest`}
            >
                <div>
                    <FaEnvelope className="inline" /> m3rri17@gmail.com
                </div>
                <div>
                    <FaGithub className="inline" />
                    <Link href="https://github.com/m3rri">
                        <a target={"_blank"}> https://github.com/m3rri</a>
                    </Link>
                </div>
                <div>©2022 KimHyeRi. All rights reserved.</div>
            </footer>
        </div>
    );
};

export default Layout;
