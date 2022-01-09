/* eslint-disable consistent-return */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { BlurredImageContainer, ImageContainer } from '@components/ImageContainer';
import { GoogleProps } from 'interfaces/props';
import type { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import encodings from '@constants/encodings';

const Home: NextPage<GoogleProps> = () => {
    const { data: session } = useSession();

    return (
        <>
            <Head>
                <title>CEII - UCA</title>
            </Head>
            <div className="w-screen h-screen relative">
                <nav className="w-full flex justify-end p-3 absolute z-20">
                    {session ? (
                        <button
                            className="btn btn-medium btn-secondary"
                            type="button"
                            onClick={() => signOut({ callbackUrl: '/', redirect: true })}
                        >
                            Cerrar sesión
                        </button>
                    ) : (
                        <Link href="/login">
                            <a className="btn btn-medium btn-secondary">Inicia sesión</a>
                        </Link>
                    )}
                </nav>
                <div className="w-full h-full relative">
                    <div className="bg-black bg-opacity-60 absolute h-full w-full z-10" />
                    <div className="grid grid-cols-12 grid-rows-6 w-full h-full">
                        <BlurredImageContainer
                            src="/img/home/todos.jpg"
                            alt="ceii"
                            className="col-span-12 row-span-2 lg:col-span-9 lg:row-span-3"
                            dataBlur={encodings.YELLOW}
                        />
                        <BlurredImageContainer
                            src="/img/home/alfombras.jpg"
                            alt="ceii"
                            className="col-span-7 row-span-2 lg:row-start-4 lg:col-start-4 lg:col-span-3 lg:row-span-3"
                            dataBlur={encodings.BLUE}
                        />
                        <BlurredImageContainer
                            src="/img/home/diploma.jpg"
                            alt="ceii"
                            className="col-span-5 row-span-3 lg:row-start-1 lg:col-start-10 lg:col-span-4 lg:row-span-6"
                            dataBlur={encodings.GREEN}
                        />
                        <BlurredImageContainer
                            src="/img/home/pedro.jpg"
                            alt="ceii"
                            className="col-span-7 row-span-2 lg:row-start-4 lg:col-start-1 lg:col-span-3 lg:row-span-3"
                            dataBlur={encodings.PURPLE}
                        />
                        <BlurredImageContainer
                            src="/img/home/open-house.jpg"
                            alt="ceii"
                            className="col-span-5 row-span-2 lg:row-start-4 lg:col-start-7 lg:col-span-3 lg:row-span-3"
                            dataBlur={encodings.SALMON}
                        />
                    </div>
                    <div className="w-full absolute bottom-0 left-0 z-10 text-white font-bold p-5 text-xl flex justify-between items-end md:text-3xl md:p-10">
                        <p className="cursor-default">
                            Comunidad Estudiantil de <br />
                            Ingeniería Informática
                        </p>
                        <ImageContainer
                            src="/img/fido.png"
                            alt="fido"
                            className="w-32 h-32 lg:translate-y-4 smooth-transition hover:scale-110"
                            rounded
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
