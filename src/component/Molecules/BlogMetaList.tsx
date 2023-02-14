/** @jsxImportSource @emotion/react */
import { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { BlogMeta } from "component/types/Blog";
import BlogMetaBox from "component/Atoms/BlogMetaBox";
import EmptyArticle from "component/Atoms/EmptyArticle";

interface BlogMetas {
    blogMetaList: BlogMeta[];
    className?: string;
}

const BlogMetaListStyle = styled.div`
    margin: 8px 0 6px;
    padding: 0 4px;
`;

const BlogMetaList: FunctionComponent<BlogMetas> = ({ blogMetaList, className = "min-h-300" }) => {
    return blogMetaList.length > 0 ? (
        <BlogMetaListStyle className={className}>
            {blogMetaList.map((blogMeta) => {
                return <BlogMetaBox key={blogMeta.id} {...blogMeta} />;
            })}
        </BlogMetaListStyle>
    ) : (
        <EmptyArticle />
    );
};

export default BlogMetaList;
