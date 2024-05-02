import type { NextPage } from "next";
import HomeComponent from "component/Templates/Home";
import { getAllSortedPost, getAllSortedTag } from "data/blog";
import { useTitle } from "data/store";

const Home: NextPage = ({ post, tags }: any) => {
    useTitle();

    return <HomeComponent blogMetaList={post} tags={tags} />;
};

export default Home;

export async function getStaticProps() {
    let post = await getAllSortedPost();
    if (post.length > 15) {
        post = post.splice(0, 15);
    }

    let tags = await getAllSortedTag();

    return {
        props: {
            post, tags
        },
    };
}
