import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme, { darkTheme, lightTheme } from '../styles/theme';
import useDarkMode from 'use-dark-mode';
import { responsiveFontSizes } from '@material-ui/core/styles';
import NextNprogress from 'nextjs-progressbar';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const {value: isDark} = useDarkMode()
  const themeConfig = isDark ? darkTheme : lightTheme;

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={responsiveFontSizes(themeConfig)}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <NextNprogress
            options={{ easing: 'ease', speed: 500 }} ya
            color="#29D"
            startPosition={0.3}
            stopDelayMs={200}
            height="3"
          />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};