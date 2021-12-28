import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';

import GoogleSignIn from '@components/Buttons/GoogleSignIn';

import fullCeii from '../public/showcase/h-5.jpg';
import carpets from '../public/showcase/h-6.jpg';
import diploma from '../public/showcase/h-4.jpg';
import cafe from '../public/showcase/h-2.jpg';
import openHouse from '../public/showcase/h-3.jpg';
import Spinner from '@components/Spinner';

const Home: NextPage = () => {
    const [imagesDone, setImagesDone] = useState([false, false, false, false, false]);

    function setMainContent(index: number) {
        const newLoaded = [...imagesDone];
        newLoaded[index] = true;

        setImagesDone(newLoaded);
    }

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div>
                Probando el cambio
            </div>

        </>
    );
}

export default Home;
