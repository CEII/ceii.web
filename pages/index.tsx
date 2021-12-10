import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout showNavbar>
      </Layout>
    </>
  );
};

export default Home;
