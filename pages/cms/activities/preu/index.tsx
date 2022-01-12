import Layout from '@components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import type { NextPage } from 'next';
import Head from 'next/head';
import CenteredContainer from '@components/Containers/CenteredContainer';

const Preu: NextPage = () => (
    <>
        <Head>
            <title>Preu</title>
        </Head>
        <nav>
            <FontAwesomeIcon icon={faBars} className="w-10 mt-3 ml-4 text-2xl text-white md:text-5xl" />
        </nav>

        <Layout showFooter>
            <CenteredContainer className="w-full h-full space-y-8" orientation="vertical">
                <h1 className="font-sans text-white">Actividades</h1>


            </CenteredContainer>
        </Layout>

    </>
);

export default Preu;