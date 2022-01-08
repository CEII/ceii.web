/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import type { NextPage } from 'next';
import { GoogleProps } from 'interfaces/props';
import React from 'react';
import ImageContainer from '@components/ImageContainer';
import storageService from '@services/storageService';
import { USER_DISPLAY_NAME, USER_IMAGE } from '@constants/session';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage<GoogleProps> = () => {
    const { data: session } = useSession();

    if (!session)
        return (
            <>
                <Head>
                    <title>Bienvenid@</title>
                </Head>
                <div className="w-full h-screen flex items-center justify-center">
                    <Link href="/login">
                        <a className="btn btn-primary">Inicia sesión</a>
                    </Link>
                </div>
            </>
        );

    return (
        <>
            <Head>
                <title>Bienvenid@</title>
            </Head>
            <div className="w-screen h-screen flex flex-col items-center justify-center text-white">
                <ImageContainer src={storageService.get(USER_IMAGE)} className="w-32 h-32" />
                <p>¡Bienvenido {storageService.get(USER_DISPLAY_NAME)}!</p>
            </div>
        </>
    );
};

export default Home;
