import type { NextPage } from 'next';
import Link from 'next/link';
import MainArticle from 'component/Molecules/MainArticle';
import { getAllSortedPost } from 'data/blog';
import { BlogMeta } from 'component/types/Blog';

const Blog: NextPage = ({fivePostByCategory, params}:any) => {
  console.log(params);

  return fivePostByCategory.length===0 ?
    <div className='py-24'>
      <MainArticle articleName={"Blog"}/>
    </div>
    :
    <div className='mt-4 space-y-8'>
      {fivePostByCategory
        .map((cateInfo:{category:string, postList:BlogMeta[]})=>{
          return <MainArticle key={cateInfo.category} articleName={cateInfo.category}>
            <div className='mt-2 mb-1.5 px-1 space-y-2 divide-y divide-aaa/30 min-h-[150px]'>
              {cateInfo.postList.map(post=>{
                return <div key={post.id} className="flex flex-row py-3 px-2">
                  <div className='flex-1 self-center'>
                    <Link href={`/blog/${post.id}`}>
                      <a className="font-semibold text-black/80 hover:text-aaa">
                        <div>{post.title}</div>
                      </a>
                    </Link>
                    <div className='text-xs text-light cursor-default self-center pt-1'>
                      {post.category[1]} | #{post.tag.join(' #')}
                    </div>
                  </div>
                  <span className='flex-none text-aaa text-xs'>
                    {post.date}
                  </span>
                </div>;
              })}
            </div>
          </MainArticle>
      })}
      
    </div>;
}

export default Blog;

export async function getStaticProps(){
  const allPost:BlogMeta[] = await getAllSortedPost();
  const categoryList = allPost
    .map(post=>post.category[0])
    .filter((category:string, i:number, ary:string[])=>ary.indexOf(category)===i);
  const FivePostByCategory = categoryList.map((category:string)=>{
    let postList:BlogMeta[] = [];
    let count = 0;

    while(postList.length<5 && count<allPost.length){
      const post = allPost[count];
      if(post.category[0]===category){
        postList.push(post);
      }
      count++;
    }

    return {category, postList};
  },[]);

  return {
    props: {
      fivePostByCategory: FivePostByCategory
    }
  }
}