import type { NextPage } from "next";
import HomeComponent from "component/Templates/Home";
import { getAllSortedPost } from "data/blog";
import { useTitle } from "data/store";

const Home: NextPage = ({ post }: any) => {
    useTitle();

    return <HomeComponent blogMetaList={post} />;
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
