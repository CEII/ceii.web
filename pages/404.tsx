import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '@components/Layout';
import LostFido from '@components/Svgs/LostFido';

const NotFound: NextPage = () => (
    <>
        <Head>
            <title>Nada por aquí</title>
        </Head>
        <Layout showNavbar>
            <div className="mt-20 flex flex-col items-center justify-center space-y-10 lg:space-y-14 cursor-default">
                <div className="text-white font-bold text-2xl space-y-4 text-center lg:text-3xl lg:space-y-8">
                    <span className="bg-white text-accent rounded-full px-4 py-1 text-3xl font-bold">404</span>
                    <p>No hay nada por aquí...</p>
                </div>
                <LostFido />
                <Link href="/">
                    <a className="btn-primary animate-pulse">
                        Regresar
                    </a>
                </Link>
            </div>
        </Layout>
    </>
);

export default NotFound;
