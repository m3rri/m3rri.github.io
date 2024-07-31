import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "component/Organisms/Layout";
import "styles/globals.css";
import "github-markdown-css";
import * as gtag from "libs/gtags";
import Script from "next/script";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const { asPath } = router;
    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gtag.GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                        });
                        `,
                    }}
                />
                <meta name="google-site-verification" content="-IYFAYTqi7mYYCPb6BhJKCcZVcWghBEgTqFyxyXrNBc" />
            </Head>
            {process.env.NODE_ENV !== "development" && (
                <>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <Script
                        strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
                    />
                </>
            )}
            <Layout asPath={asPath}>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
