/** @jsxImportSource @emotion/react */
import { FunctionComponent } from "react";
import { css } from "@emotion/react";
import { BlogMeta } from "component/types/Blog";
import color from "../Atoms/CssConfig";
import MainArticle from "component/Molecules/MainArticle";
import articleWrapper from "component/Atoms/ArticleWrapper";
import BlogMetaList from "component/Molecules/BlogMetaList";
import Link from "next/link";

interface HomeProps {
    blogMetaList: BlogMeta[];
    tags: string[];
}

const home = css`
    .post-tag-wrapper{
        margin: 1rem -3px 3rem;
        display: flex;
        flex-wrap: wrap;
    }
    .post-tag{
        padding: 3px;
        color: ${color.def};
        margin: 0.1rem 0.2rem;
        border-radius: 0.5rem;
    }
    .post-tag:hover{
        color: ${color.highlight};
    }
`;

const Home: FunctionComponent<HomeProps> = ({ blogMetaList, tags }) => {
    return (
        <div
            css={css`
                ${articleWrapper};
                ${home};
            `}
        >
            <div className="post-tag-wrapper">
                {tags.map(tag=>
                    //<Link href={`/blog/tag/${tag.toLowerCase()}`}>
                        //<a>
                            <div key={tag} className="post-tag">#{tag}</div>
                        //</div></a>
                    //</Link>
                )}
            </div>
            <MainArticle link="blog" title="🧱Recent Posts">
                <BlogMetaList blogMetaList={blogMetaList} />
            </MainArticle>
        </div>
    );
};

export default Home;
