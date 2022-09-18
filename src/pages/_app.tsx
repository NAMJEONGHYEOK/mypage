import '../../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head';
import {SessionProvider} from "next-auth/react";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../src/theme';
import createEmotionCache from '../../src/createEmotionCache';
import { Provider } from 'react-redux';
import  store  from '../store/store';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}


export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <SessionProvider session={pageProps.session} refetchInterval={5 * 60} refetchOnWindowFocus={true}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </SessionProvider>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

