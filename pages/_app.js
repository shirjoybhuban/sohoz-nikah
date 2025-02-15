import '../styles/global.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import { wrapper } from '../store/store';
import { CustomSteps } from 'lib/steps/CustomSteps';

const colors = {
  brand: {
    100: '#FF87A6',
    200: '#FF7590',
    300: '#FF677F',
    400: '#ED5E74',
    500: '#E25A6F',
    600: '#CB5163',
    700: '#B44858',
    800: '#9E3E4D',
    900: '#873642',
  },
  text: {
    100: '#303030',
    200: '#153e75',
    300: '#2a69ac',
  },
  bg: {
    100: '#F2F3F7',
    200: '#FFF6F8',
  },
};
const theme = extendTheme({
  colors,
  fonts: {
    body: 'SolaimanLipi',
    heading: 'SolaimanLipi',
  },
  breakpoints: {
    sm: '320px',
    md: '700px',
    lg: '1100px',
    xl: '1920px',
  },
  styles: {
    global: {
      body: {
        color: 'blackAlpha.800',
      },
    },
  },
  components: {
    Steps: CustomSteps,
  },
});

const ViewPort = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

const App = (props) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Digital Matrimony SIte" />
        <meta name="keywords" content="insurance" />
        <title>Sohoz Nikha</title>
      </Head>
      <ViewPort {...props} />
    </ChakraProvider>
  );
};
export default wrapper.withRedux(App);
