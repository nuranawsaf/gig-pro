import "@/styles/index.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../services/redux/store/store";
import Head from "next/head";
import Layout from "@/components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Portfolio Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
