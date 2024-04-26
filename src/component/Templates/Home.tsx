/** @jsxImportSource @emotion/react */
import { FunctionComponent } from "react";
import { css } from "@emotion/react";
import { BlogMeta } from "component/types/Blog";
import MainArticle from "component/Molecules/MainArticle";
import dynamic from "next/dynamic";
import articleWrapper from "component/Atoms/ArticleWrapper";
import BlogMetaList from "component/Molecules/BlogMetaList";

const SkillChart = dynamic(() => import("component/Molecules/SkillChart"), { ssr: false });

interface HomeProps {
    blogMetaList: BlogMeta[];
}

const home = css`
    .home-skill-chart-wrapper {
        height: 384px;
    }
`;

const Home: FunctionComponent<HomeProps> = ({ blogMetaList }) => {
    return (
        <div
            css={css`
                ${articleWrapper};
                ${home};
            `}
        >
            <MainArticle link="about" title="✨Stack">
                <div className="home-skill-chart-wrapper">
                    <SkillChart />
                </div>
            </MainArticle>
            <MainArticle link="blog" title="🧱Blog">
                <BlogMetaList blogMetaList={blogMetaList} />
            </MainArticle>
            <MainArticle link="portfolio" title="🔮Portfolio" />
        </div>
    );
};

export default Home;
