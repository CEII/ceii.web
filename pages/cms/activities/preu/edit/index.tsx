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
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const modalities = [
    { id: 1, modality: 'Virtual' },
    { id: 2, modality: 'Presencial' },
]
const New: NextPage<GoogleProps> = () => {

    const [selectedModality, setSelectedModality] = useState(modalities[0])

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
                    <div className='flex flex-col md:space-y-6 md:space-y-0 lg:space-y-24 xl:space-y-6'>
                        <section>
                            <h1 className='text-white font-bold text-center md:text-4xl lg:text-6xl xl:text-4xl'>Talleres Socioafectivos</h1>
                            <p className='text-white italic md:text-xl lg:text-2xl xl:text-2xl text-center'>Agrega la informacion necesaria</p>
                        </section>

                        <form className='md:pt-4 xl:pt-0 xl:flex xl:justify-around xl:space-x-44 2xl:space-x-72'>
                            <section className='flex flex-col'>
                                <div className='flex flex-col-reverse text-white font-medium group lg:text-2xl xl:texl-lg iphone:text-sm'>
                                    <InputGroup
                                        placeholder='Taller socioafectivo'
                                        type='text'
                                        identifier='title_input'
                                        required
                                        label={{ text: "Titulo del taller" }}
                                    />
                                </div>
                                <div className='flex bg-white w-1/2 text-red-500 rounded-full mt-2 iphone:w-2/3 iphone:text-sm md:mb-8 md:w-2/3 lg:text-lg xl:w-2/3'>
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


                                <div className='flex flex-col-reverse text-white font-medium group lg:text-2xl md:mb-10 xl:mb-5'>
                                    <InputGroup
                                        placeholder='Facilitador'
                                        type='text'
                                        identifier='facilitator_input'
                                        required
                                        label={{ text: "Facilitador" }}
                                    />
                                </div>


                            </section>

                            <section className='flex flex-col xl:space-y-10'>
                                <section className='flex md:space-x-4 lg:text-2xl'>
                                    <div className='md:w-1/2'>

                                        <div className='flex flex-col'>
                                            <label className='xl:text-lg text-white font-bold'>Modalidad</label>
                                            <Listbox value={selectedModality} onChange={setSelectedModality}>
                                                <Listbox.Button className="relative xl:w-2/3 xl:h-10 text-left bg-white rounded-full shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 xl:text-xl">{selectedModality.modality}
                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                        <SelectorIcon
                                                            className="w-5 h-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </Listbox.Button>
                                                <Listbox.Options className="bg-white rounded-xl mt-2">
                                                    {modalities.map((modality) => (
                                                        <Listbox.Option
                                                            key={modality.id}
                                                            value={modality}
                                                        >
                                                            {modality.modality}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Listbox>
                                        </div>

                                    </div>
                                    <div className='md:w-1/2 xl:flex xl:flex-row-reverse'>
                                        <div className='flex flex-col-reverse text-white font-medium group xl:w-2/3'>
                                            <InputGroup
                                                placeholder=''
                                                type='number'
                                                identifier='quote_input'
                                                required
                                                label={{ text: "Cupos" }}
                                            />
                                        </div>
                                    </div>



                                </section>
                                <div>
                                    <p className='text-white md:text-xl'>Descripcion</p>
                                    <textarea className="rounded md:w-full md:mb-1 md:h-48 xl:mb-0" placeholder='Descripcion' required />
                                    <div className='flex bg-white w-1/2 text-red-500 rounded-full mt-2 md:mt-0 md:mb-8 md:w-2/3 lg:text-lg xl:w-2/3'>
                                        <ExclamationCircleIcon className='w-5 ml-2' />
                                        <p>Introduce un titulo valido</p>
                                    </div>
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
