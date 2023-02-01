/** @jsxImportSource @emotion/react */
import { FunctionComponent } from "react";
import Link from "next/link";
import { css } from "@emotion/react";
import { BlogMeta } from "component/types/Blog";
import MainArticle from "component/Molecules/MainArticle";
import dynamic from "next/dynamic";
import color, { styleConfig as style } from "../Atoms/CssConfig";

const SkillChart = dynamic(() => import("component/Molecules/SkillChart"), { ssr: false });

interface HomeProps {
    blogMetaList: BlogMeta[];
}

const home = css`
    margin-top: 16px;
    article {
        ${style.space} {
            margin: ${style.spaceY(32)};
        }
    }
    .home-skill-chart-wrapper {
        height: 384px;
    }
    .home-skill-set {
        font-size: 15px;
        padding: 12px 20px;
    }
    .home-blog-meta-list {
        margin: 8px 0 6px;
        min-height: 300px;
        padding: 0 4px;
        .home-blog-meta {
            display: flex;
            flex-direction: row;
            padding: 12px 8px;
            ${style.space} {
                margin: ${style.spaceY(6)};
                border-top: 1px solid ${color.efefef};
            }
        }
        .home-blog-meta-title-wrapper {
            align-self: center;
            flex: 1 1 0%;
        }
        .home-blog-meta-title-link {
            color: ${color.black};
            font-weight: 500;
            &:hover {
                color: ${color.aaa};
            }
        }
        .home-blog-meta-etc {
            align-self: center;
            color: ${color.light};
            cursor: default;
            font-size: 12px;
            padding-top: 3px;
        }
        .home-blog-meta-date {
            color: ${color.aaa};
            flex: none;
            font-size: 12px;
            padding-top: 3px;
        }
    }
`;

const Home: FunctionComponent<HomeProps> = ({ blogMetaList }) => {
    return (
        <div css={home}>
            <MainArticle articleLink="about" articleName="✨Stack">
                <div className="home-skill-chart-wrapper">
                    <SkillChart />
                </div>
                <div className="home-skill-set">
                    AWS / SpringBoot / Next.js / React / Javascript / Oracle / Spring / Java
                </div>
            </MainArticle>
            <MainArticle articleLink="blog" articleName="🗳Blog">
                {blogMetaList.length > 0 && (
                    <div className="home-blog-meta-list">
                        {blogMetaList.map((blogMeta) => {
                            return (
                                <div key={blogMeta.id} className="home-blog-meta">
                                    <div className="home-blog-meta-title-wrapper">
                                        <Link href={`/blog/${blogMeta.id}`}>
                                            <a className="home-blog-meta-title-link">
                                                <div>{blogMeta.title}</div>
                                            </a>
                                        </Link>
                                        <div className="home-blog-meta-etc">
                                            {blogMeta.category[1]} | #{blogMeta.tag.join(" #")}
                                        </div>
                                    </div>
                                    <span className="home-blog-meta-date">{blogMeta.date}</span>
                                </div>
                            );
                        })}
                    </div>
                )}
            </MainArticle>
            <MainArticle articleLink="portfolio" articleName="🗃Portfolio" />
        </div>
    );
};

export default Home;
