/* eslint-disable consistent-return */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { BlurredImageContainer, ImageContainer } from '@components/ImageContainer';
import type { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import encodings from '@constants/encodings';
import Layout from '@components/Layout';
import Developers from '@components/Developers';
import storageService from '@services/storageService';
import { GUEST_MODE } from '@constants/session';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const { data: session } = useSession();
    const router = useRouter();

    function setAsGuest() {
        storageService.set(GUEST_MODE, true);
        router.push('/home');
    }

    return (
        <>
            <Head>
                <title>CEII - UCA</title>
            </Head>
            <Layout showFooter>
                <div className="w-full relative">
                    <nav className="flex justify-end p-3 absolute z-20">
                        {session ? (
                            <>
                                <Link href="/home">
                                    <a className="btn btn-medium btn-secondary mr-2">Inicio</a>
                                </Link>
                                <button
                                    className="btn btn-medium btn-secondary"
                                    type="button"
                                    onClick={() => signOut()}
                                >
                                    Cerrar sesión
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login">
                                    <a className="btn btn-medium btn-secondary mr-2">Inicia sesión</a>
                                </Link>
                                <button className="btn btn-medium btn-secondary" type="button" onClick={setAsGuest}>
                                    Ver como invitado
                                </button>
                            </>
                        )}
                    </nav>
                    <div className="bg-black bg-opacity-60 absolute h-full w-full z-10" />
                    <div className="grid grid-cols-12 grid-rows-6 w-full min-h-[92vh]">
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
                    <div className="w-full absolute bottom-0 left-0 z-10 text-white font-bold p-5 text-base flex justify-between items-end md:text-3xl md:p-10">
                        <h1 className="cursor-default">
                            Comunidad Estudiantil de <br />
                            Ingeniería Informática
                        </h1>
                        <ImageContainer
                            src="/img/fido.png"
                            alt="fido"
                            className="w-20 h-20 lg:translate-y-4 smooth-transition hover:scale-110"
                            rounded
                        />
                    </div>
                </div>
                <div className="">
                    <Developers />
                </div>
                <div className="min-h-full grid justify-items-center gap-y-3 space-y-4 pt-12 pb-32 md:px-10 lg:px-32 xl:px-60">
                    <div className="py-6 px-3 md:py-5">
                        <h1 className="text-white font-bold text-2xl md:text-xl lg:text-2xl">Más acerca de nosotros</h1>
                        <span className="text-white italic text-md md:text-base lg:text-xl">
                            Nuestra misión y visión
                        </span>
                    </div>
                    <div className="bg-secondary smooth-transition w-3/4 p-3 rounded-md text-white md:w-5/12 md:justify-self-start lg:w-1/3 lg:p-5 xl:w-1/3 hover:scale-110">
                        <h3 className="font-bold lg:text-lg xl:text-2xl">¿Quienes somos?</h3>
                        <p className="text-sm pt-2 md:text-base lg:text-lg">
                            Somos una comunidad dedicada al aprendizaje y formación integral de los estudiantes de
                            Ingeniería Informática; nos dedicamos a fomentar un ambiente de desarrollo y solidaridad.
                        </p>
                    </div>
                    <div className="bg-white smooth-transition w-3/4 p-3 rounded-md text-secondary md:w-5/12 lg:w-1/3 lg:p-5 xl:w-1/3 hover:scale-110">
                        <h3 className="font-bold lg:text-lg xl:text-2xl">Misión</h3>
                        <p className="text-sm pt-2 md:text-base lg:text-lg">
                            Ser un medio de crecimiento, creando las oportunidades necesarias para potenciar las
                            aptitudes de los estudiantes de Ingeniería Informática en todos los ámbitos.
                        </p>
                    </div>
                    <div className="bg-secondary smooth-transition w-3/4 p-3 rounded-md text-white md:w-5/12 md:justify-self-end lg:w-1/3 lg:p-5 xl:w-1/3 hover:scale-110">
                        <h3 className="font-bold lg:text-lg xl:text-2xl">Visión</h3>
                        <p className="text-sm pt-2 md:text-base lg:text-lg">
                            Establecer un estándar de calidad en los futuros profesionales de Ingeniería Informática,
                            con una amplia gama de áreas de estudio; ser desarrolladores de éxito.
                        </p>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Home;
