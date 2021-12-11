import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@components/Layout';

const Home: NextPage = () => (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout showNavbar />
    </>
  );

export default Home;
