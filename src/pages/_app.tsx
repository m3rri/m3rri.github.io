import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from 'component/Organisms/Layout';
import 'styles/globals.css';
import 'github-markdown-css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const {asPath} = router;
  
  return <Layout asPath={asPath}>
    <Component {...pageProps} />
  </Layout>;
}

export default MyApp;