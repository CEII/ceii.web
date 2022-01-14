import Layout from '@components/Layout';
import Protected from '@components/Protected';
import { GoogleProps } from 'interfaces/props';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import type { NextPage } from 'next';
import CenteredContainer from '@components/Containers/CenteredContainer';
import InputGroup from '@components/Inputs/InputGroup';
import { ExclamationCircleIcon } from "@heroicons/react/solid";

const New: NextPage<GoogleProps> = () => {
    const { data: session } = useSession();

    /*
    if (!session)
        return (
            <Protected
                message="Debes iniciar sesión antes de visitar esta página"
                link={{ redirectTo: '/login', pageNameOrMessage: 'Inicia sesión' }}
            />
        );
    */

    return (
        <>
            <Head>
                <title>Talleres Socioafectivos</title>
            </Head>
            <Layout showFooter showNav>
                <div className="flex justify-center md:pt-6">
                    <div className='flex flex-col md:space-y-6 lg:space-y-24 xl:space-y-6'>
                        <section>
                            <h1 className='text-white font-bold text-center md:text-4xl lg:text-6xl xl:text-5xl'>Talleres Socioafectivos</h1>
                            <p className='text-white italic md:text-xl lg:text-2xl xl:text-2xl text-center'>Agrega la informacion necesaria</p>
                        </section>
                        <form className='md:pt-4 xl:pt-0 xl:flex xl:justify-around'>
                            <section className='flex flex-col'>
                                <div className='flex flex-col-reverse text-white font-medium group lg:text-2xl xl:texl-lg'>
                                    <InputGroup
                                        placeholder='Titulo del taller'
                                        type='text'
                                        identifier='title_input'
                                        required
                                        label={{ text: "Titulo" }}
                                    />
                                </div>
                                <div className='flex bg-white w-1/2 text-red-500 rounded-full mt-2 md:mb-8 lg:text-lg'>
                                    <ExclamationCircleIcon className='w-5 ml-2' />
                                    <p>Introduce un titulo valido</p>
                                </div>
                                <section className='flex md:space-x-4 lg:text-2xl'>
                                    <div className='md:w-1/2'>
                                        <div className='flex flex-col-reverse text-white font-medium group md:mb-14'>
                                            <InputGroup
                                                placeholder='DD/MM/AAAA'
                                                type='date'
                                                identifier='date_input'
                                                required
                                                label={{ text: "Fecha" }}
                                            />
                                        </div>
                                    </div>
                                    <div className='md:w-1/2'>
                                        <div className='flex flex-col-reverse text-white font-medium group'>
                                            <InputGroup
                                                placeholder='HH:MM'
                                                type='time'
                                                identifier='time_input'
                                                required
                                                label={{ text: "Hora" }}
                                            />
                                        </div>
                                    </div>

                                </section>


                                <div className='flex flex-col-reverse text-white font-medium group lg:text-2xl md:mb-14'>
                                    <InputGroup
                                        placeholder='Facilitador'
                                        type='text'
                                        identifier='facilitator_input'
                                        required
                                        label={{ text: "Facilitador" }}
                                    />
                                </div>

                    
                            </section>
                            <section className='flex flex-col'>
                                <section className='flex md:space-x-16 lg:text-2xl xl:space-x-0'>
                                    <div className='md:w-1/2'>
                                        <div className='flex flex-col-reverse text-white font-medium group md:mb-14 xl:w-1/2'>
                                            <InputGroup
                                                placeholder='modalidad'
                                                type='select'
                                                identifier='modalidad_input'
                                                required
                                                label={{ text: "Modalidad" }}
                                            />
                                        </div>
                                    </div>
                                    <div className='md:w-1/2'>
                                        <div className='flex flex-col-reverse text-white font-medium group md:mb-12 xl:ml-0 xl:w-1/2'>
                                            <InputGroup
                                                placeholder='Cupos'
                                                type='text'
                                                identifier='quota_input'
                                                required
                                                label={{ text: "Cupos" }}
                                            />
                                        </div>
                                    </div>
                                </section>
                                <p className='text-white md:text-xl lg:text-lg'>Descripcion</p>
                                <textarea id='area_input' className="rounded md:w-full md:h-20 xl:w-2/3" placeholder='Descripcion' required />
                                <div className='flex bg-white w-1/2 text-red-500 rounded-full md:mt-2 md:mb-6 lg:text-lg lg:text-2xl'>
                                    <ExclamationCircleIcon className='w-5 ml-2' />
                                    <p>Introduce un titulo valido</p>
                                </div>
                            </section>
                        </form>
                        <div className='flex justify-center'>
                            <a href="" className='btn btn-primary md:w-60 lg:h-14 lg:text-2xl xl:h-12 text-center'>
                                Agregar
                            </a>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )

};

export default New;
