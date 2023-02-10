import { useEffect } from "react";

const BLOG_NAME = "MERRI`s DEVELOG";

export const useTitle = (title?: string) => {
    useEffect(() => {
        if (title) {
            document.title = `${BLOG_NAME} - ${title}`;
        } else {
            document.title = BLOG_NAME;
        }
    });
};

export { BLOG_NAME };
