import type { NextPage } from "next";
import Head from "next/head";
import HomeComponent from "component/Templates/Home";
import { BLOG_NAME } from "component/Molecules/Navbar";
import { getAllSortedPost } from "data/blog";

const Home: NextPage = ({ post }: any) => {
    return (
        <>
            <Head>
                <title>{BLOG_NAME}</title>
            </Head>
            <HomeComponent blogMetaList={post} />
        </>
    );
};

export default Home;

export async function getStaticProps() {
    let post = await getAllSortedPost();
    if (post.length > 5) {
        post = post.splice(0, 5);
    }

    return {
        props: {
            post,
        },
    };
}
