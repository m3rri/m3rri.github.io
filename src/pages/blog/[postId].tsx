import type { GetStaticPropsContext, NextPage } from 'next';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown'
import { getAllSortedPostId, getPostData, getPrevNextPost } from 'data/blog';
import { BlogMeta } from 'component/types/Blog';

const Meta = ({category, tag}:{category:string[], tag:string[]})=>{
  return <div className='p-2'>
    <div className='category-area text-sm'>
      📂 {category.join(' > ')}
    </div>
    <div className='tag-area text-sm'>
      🧶 #{tag.join(' #')}
    </div>
  </div>
}

const Header = ({title, date}:{title:string, date:string})=>{
  return <header className='p-2 space-y-1 border-b border-deep'>
    <h1 className='text-3xl text-black font-bold'>{title}</h1>
    <div className='text-sm text-aaa'>{date}</div>
  </header>
}

const BlogLink = ({data, type}: {data:BlogMeta, type:number})=>{
  const text = type>0 ? '다음' : '이전';

  if(data===null){
    return <span className='text-sm text-aaa hidden md:block'>{text}글이 없습니다</span>;
  }else{
    const {id, title} = data;
    const link = type>0 ? `${title} 👉` : `👈 ${title}`;
    
    return <Link href={`/blog/${id}`}>
      <a className={`pl-1 hover:text-aaa`}>
        {link}
      </a>
    </Link>
  }
}

const Footer = ({prev, next}:{prev:BlogMeta, next:BlogMeta})=>{
  return <footer className='flex flex-col md:flex-row pt-1 px-2 lg:px-0 border-t border-deep'>
    <div className='flex-1'>
      <BlogLink data={prev} type={-1}/>
    </div>
    <div className='text-right'>
      <BlogLink data={next} type={1}/>
    </div>
  </footer>;
}

const BlogPost: NextPage = ({post, prev, next}:any) => {
  const {title, date, category, tag, content} = post;
  
  return <div className="-my-4 -mb-9 -mx-3 lg:mx-0 border-0 lg:border-l lg:border-r border-deep ">
    <Header title={title} date={date}/>
    <Meta category={category} tag={tag}/>
    <main className='markdown-body py-3 px-5 lg:px-2'>
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
    <div className='pt-2 px-2 lg:px-0 text-default'>/end of {title}</div>
    <Footer prev={prev} next={next}/>
  </div>
}

export default BlogPost;

export async function getStaticPaths(){
    return {
        paths: getAllSortedPostId().map((postId:string)=>({params: {postId}})),
        fallback: false
    }
}

export async function getStaticProps({params}:GetStaticPropsContext){
  const {postId} = params!;
  const post = getPostData(postId);
  const {prev, next} = getPrevNextPost(postId);

  return {
    props: {
      post, prev, next
    }
  }
}