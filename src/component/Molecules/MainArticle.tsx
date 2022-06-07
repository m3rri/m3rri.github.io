import { FunctionComponent } from "react";
import Link from 'next/link';

interface ArticleProps {
    articleLink?: string;
    articleName: string;
}

const MainArticle:FunctionComponent<ArticleProps> = ({articleLink, articleName, children})=>{
    const articleTitle = <h2 className='text-default text-center tracking-widest font-bold border border-deep py-1.5 px-4 absolute -top-5 -left-[1px] w-[300px] bg-white'>
        {articleName}
    </h2>;

    return <article className={`${articleLink}List border border-deep p-3 relative`}>
        {articleLink ?
        <Link href={`/${articleLink}`}>
            <a className='hover:text-light'>{articleTitle}</a>
        </Link>
        :
        articleTitle
        }
        {children || <div className='py-[60px] text-center text-black/70'>/ empty😪 /</div>}
    </article>
}

export default MainArticle;