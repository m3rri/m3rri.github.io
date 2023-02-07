/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { css } from "@emotion/react";
import { FaStar, FaEnvelope, FaGithub } from "react-icons/fa";
import { SiAmazonaws, SiSpringboot, SiNextdotjs, SiReact, SiJavascript, SiTypescript, SiOracle } from "react-icons/si";
import dynamic from "next/dynamic";
import Link from "next/link";
import MainArticle from "component/Molecules/MainArticle";
import ContentListEmt from "component/Molecules/ContentList";
import { BLOG_NAME } from "component/Molecules/Navbar";
import color, { styleConfig as style } from "component/Atoms/CssConfig";

const SkillChart = dynamic(() => import("component/Molecules/SkillChart"), {
    ssr: false,
});

const about = css`
    margin: 16px 16px 0;
    article {
        ${style.space} {
            margin: ${style.spaceY(32)};
        }
    }
    .about-name {
        color: ${color.black};
    }
    .about-skill-chart {
        height: 288px;
    }
    .about-link-has-url:hover {
        color: ${color.highlight};
    }
    .about-link-has-url:after {
        content: "↗";
    }
    .about-sub-description {
        color: ${color.black};
        font-size: 14px;
        font-weight: 100;
    }
    svg.about-skill-icon {
        display: inline;
        vertical-align: middle;
        font-size: 1.6rem;
        padding: 0 4px 4px 0;
    }
    svg.about-contact-icon {
        display: inline;
        vertical-align: middle;
        color: ${color.deep};
        font-size: 1.6rem;
        padding: 0 4px 4px 0;
    }
`;

function makeLink(name: String, url: String) {
    return (
        <Link href={`${url}`}>
            <a target={"_blank"} className="about-link-has-url">
                {name}
            </a>
        </Link>
    );
}
function getSubLiComponents(list: { name: ReactNode | String; value: String | ReactNode }[]) {
    return list.map((item) => (
        <>
            {item.name} <span className="about-sub-description"> {item.value}</span>
        </>
    ));
}
const techs = [
    {
        name: <SiAmazonaws className="about-skill-icon" />,
        value: "EC2, Elastic Beanstalk, RDS, Cognito, CodeDeploy",
    },
    {
        name: <SiSpringboot className="about-skill-icon" />,
        value: "JPA, QueryDsl, OAuth2.0, Swagger3.0, RESTful API",
    },
    {
        name: <SiNextdotjs className="about-skill-icon" />,
        value: "SSR, SSG",
    },
    {
        name: <SiReact className="about-skill-icon" />,
        value: "Zustand, emotion, tailwind, Atomic Design",
    },
    {
        name: <SiJavascript className="about-skill-icon" />,
        value: "es6, babel, webpack",
    },
    {
        name: <SiTypescript className="about-skill-icon" />,
        value: "",
    },
    {
        name: <SiOracle className="about-skill-icon" />,
        value: "ANSI Sql, procedure, function, indexing",
    },
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
        name: "",
        value: (
            <>
                👆 IT Developer
                <br />
                .........👇 PCB Engineer
            </>
        ),
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
        <div css={about}>
            <Head>
                <title>{BLOG_NAME} - About</title>
            </Head>
            <MainArticle articleName="✨Introduce">
                <ContentListEmt
                    liElements={[
                        <span key={"content0"} className="about-name">
                            김혜리 | Kim Hyeri
                        </span>,
                        "Web Developer",
                        <>
                            Skill
                            <div className="about-skill-chart">
                                <SkillChart />
                            </div>
                            <ContentListEmt Icon={FaStar} liElements={techLis} />
                        </>,
                        <>
                            Careers
                            <ContentListEmt Icon={FaStar} liElements={careerLis} />
                        </>,
                    ]}
                />
            </MainArticle>
            <MainArticle articleName="🕊Contact">
                <ContentListEmt
                    liElements={[
                        <>
                            <FaEnvelope className="about-contact-icon" />
                            <span> Email : m3rri17@gmail.com</span>
                        </>,
                        <>
                            <FaGithub className="about-contact-icon" />
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
