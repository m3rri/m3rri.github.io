/** @jsxImportSource @emotion/react */
import { FunctionComponent } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import color, { styleConfig as style } from "./CssConfig";
import { BlogMeta } from "component/types/Blog";

const BlogMetaWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 12px 8px;
    ${style.space} {
        margin: ${style.spaceY(6)};
        border-top: 1px solid ${color.efefef};
    }
`;

const BlogMetaTitleWrapper = styled.div`
    algin-self: center;
    flex: 1 1 0%;
    a div {
        color: ${color.black};
        font-weight: 500;
        &:hover {
            color: ${color.aaa};
        }
    }
`;

const BlogMetaEtcWrapper = styled.div`
    a, span {
        align-self: center;
        color: ${color.light};
        font-size: 12px;
        padding-top: 3px;
    }
    a {
        cursor: pointer;
    }
    span {
        cursor: default;
    }
    a:hover {
        color: ${color.highlight}
    }
`;

const BlogMetaDate = styled.span`
    color: ${color.aaa};
    flex: none;
    font-size: 12px;
    padding-top: 3px;
`;

const BlogMetaBox: FunctionComponent<BlogMeta> = ({ id, title, category, tag, date }) => {
    const linkUrl = `/blog/${id}`;
    const etcContent = <>
        <Link href={`/blog/category/${category[1]}`}>
            <a>{category[1]}</a>
        </Link>
        <span> |</span>
        {
            tag.map(t=><span key={t}>
                <span> </span>
                <Link href={`/blog/tag/${t.toLowerCase()}`}>
                    <a>#{t}</a>
                </Link>
            </span>)
        }
    </>;

    return (
        <BlogMetaWrapper>
            <BlogMetaTitleWrapper>
                <Link href={linkUrl}>
                    <a>
                        <div>{title}</div>
                    </a>
                </Link>
                <BlogMetaEtcWrapper>{etcContent}</BlogMetaEtcWrapper>
            </BlogMetaTitleWrapper>
            <BlogMetaDate>{date}</BlogMetaDate>
        </BlogMetaWrapper>
    );
};

export default BlogMetaBox;
