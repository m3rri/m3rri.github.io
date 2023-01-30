import { ReactNode } from "react";
import type { NextPage } from "next";
import { FaStar, FaEnvelope, FaGithub } from "react-icons/fa";
import {
    SiAmazonaws,
    SiSpringboot,
    SiNextdotjs,
    SiReact,
    SiJavascript,
    SiOracle,
    SiSpring,
    SiJava,
} from "react-icons/si";
import dynamic from "next/dynamic";
import Link from "next/link";
import MainArticle from "component/Molecules/MainArticle";
import ContentListEmt from "component/Molecules/ContentList";

const SkillChart = dynamic(() => import("component/Molecules/SkillChart"), {
    ssr: false,
});

function makeLink(name: String, url: String) {
    return (
        <Link href={`${url}`}>
            <a target={"_blank"} className="after:content-['↗'] hover:text-highlight">
                {name}
            </a>
        </Link>
    );
}
function getSubLiComponents(list: { name: ReactNode; value: String }[]) {
    return list.map((item) => (
        <>
            {item.name} <span className="text-black"> / {item.value}</span>
        </>
    ));
}
const techs = [
    {
        name: <SiAmazonaws className="inline text-xl" />,
        value: "+Elastic Beanstalk +RDS +Cognito",
    },
    {
        name: <SiSpringboot className="inline text-xl" />,
        value: "+JPA +OAuth2.0 +Swagger3.0 +RESTful API",
    },
    {
        name: <SiNextdotjs className="inline text-xl" />,
        value: "CSR/SSR/SSG +typescript +Docker",
    },
    {
        name: <SiReact className="inline text-xl" />,
        value: "+Zustand +tailwind +Atomic Design",
    },
    {
        name: <SiJavascript className="inline text-xl" />,
        value: "es5 +es6 +babel +webpack",
    },
    {
        name: <SiOracle className="inline text-xl" />,
        value: "ANSI Sql +procedure +function +indexing",
    },
    { name: <SiSpring className="inline text-xl" />, value: "" },
    { name: <SiJava className="inline text-xl" />, value: "" },
];
const careers = [
    {
        name: makeLink("Seegene. Inc", "https://www.seegene.co.kr/"),
        value: "2021.11.~ Insilico Platform",
    },
    {
        name: makeLink("KHANTECH", "https://www.khantech.co.kr/"),
        value: "2018.04.~2021.11. SD Development",
    },
    {
        name: (
            <>
                ----👆 IT Developer---
                <br />
                ------👇 PCB Engineer---
            </>
        ),
        value: "",
    },
    {
        name: makeLink("KOREA CIRCUIT CO.,LTD", "https://www.kcg.co.kr/"),
        value: "2013.12.~2016.12. Front Engineering",
    },
];
const techLis = getSubLiComponents(techs);
const careerLis = getSubLiComponents(careers);

const About: NextPage = () => {
    return (
        <div className="mt-4 space-y-8">
            <MainArticle articleName="✨Introduce">
                <ContentListEmt
                    liElements={[
                        <span key={"content0"} className="text-black">
                            김혜리 | Kim Hyeri
                        </span>,
                        "Front/Backend Developer",
                        <>
                            TECH
                            <div className="h-72">
                                <SkillChart />
                            </div>
                            <ContentListEmt Icon={FaStar} liElements={techLis} />
                        </>,
                        <>
                            CAREERS
                            <ContentListEmt Icon={FaStar} liElements={careerLis} />
                        </>,
                    ]}
                />
            </MainArticle>
            <MainArticle articleName="🕊Contact">
                <ContentListEmt
                    liElements={[
                        <>
                            <FaEnvelope className="inline pb-0.5" />
                            <span> Email : m3rri17@gmail.com</span>
                        </>,
                        <>
                            <FaGithub className="inline pb-0.5" />
                            <span> Github : </span>
                            {makeLink("https://github.com/m3rri", "https://github.com/m3rri")}
                        </>,
                    ]}
                />
            </MainArticle>
        </div>
    );
};

export default About;
