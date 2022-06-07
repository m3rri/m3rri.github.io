import { FunctionComponent, ReactNode } from "react";
import { IconType } from 'react-icons/lib';
import { FaSquare } from 'react-icons/fa';

interface ListProps {
    liElements: (ReactNode | String)[];
    Icon?: IconType;
}

const ContentList:FunctionComponent<ListProps> = ({liElements, Icon=FaSquare})=>{
    const lis = liElements.map((liElement, idx)=>{
        return <li key={idx} className="text-deep font-bold">
            <Icon className="inline pb-1 pr-2 text-black"/>
            {liElement}
        </li>;
    });

    return <ul className="mt-3 mx-2 mb-5 space-y-2">
        {lis}
    </ul>;
}

export default ContentList;