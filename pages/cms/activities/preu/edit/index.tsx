import Layout from '@components/Layout';
import Protected from '@components/Protected';
import { GoogleProps } from 'interfaces/props';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import React from 'react';
import type { NextPage } from 'next';
import InputGroup from '@components/Inputs/InputGroup';
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const modalities = [
    { name: 'Virtual' },
    { name: 'Presencial' },
]

const facilitators = [
    { email: '0001918@uca.edu.sv' },
]


const New: NextPage<GoogleProps> = () => {

    const [selected, setSelected] = useState(modalities[0])
    const [selectedfac, setSelectedfac] = useState(facilitators[0])

    const { data: session } = useSession();

    if (!session)
        return (
            <Protected
                message="Debes iniciar sesión antes de visitar esta página"
                link={{ redirectTo: '/login', pageNameOrMessage: 'Inicia sesión' }}
            />
        );
    
    return (
        <>
            <Head>
                <title>Talleres Socioafectivos</title>
            </Head>
            <Layout showFooter showNav>
                <div className="flex justify-center md:pt-6">
                    <div className='flex flex-col iphone:space-y-4 md:space-y-2 md:space-y-0 lg:space-y-14 xl:space-y-6'>
                        <section>
                            <h1 className='text-white font-bold text-center iphone:text-xl md:text-4xl lg:text-6xl xl:text-4xl'>Talleres Socioafectivos</h1>
                            <p className='text-white italic iphone:text-sm md:text-xl lg:text-2xl xl:text-2xl text-center'>Agrega la informacion necesaria</p>
                        </section>
                        <form className='md:pt-4 xl:pt-0 iphone:space-y-5 md:space-y-10 lg:space-y-20 xl:space-y-0 xl:flex xl:justify-around xl:space-x-44 2xl:space-x-72'>
                            <section className='flex flex-col iphone:space-y-5 lg:space-y-5 xl:space-y-0 2xl:space-y-0'>
                                <div className='flex flex-col-reverse text-white font-medium group iphone:text-xs md:text-md lg:text-2xl xl:texl-lg sm:text-sm'>
                                    <div className='flex bg-white w-1/2 text-red-500 rounded-full mt-2 iphone:w-2/3 iphone:h-4 iphone:text-xs md:mb-8 md:w-2/3 lg:text-lg xl:w-2/3'>
                                        <ExclamationCircleIcon className='w-5 ml-2' />
                                        <p>Introduce un titulo valido</p>
                                    </div>
                                    <InputGroup
                                        placeholder='Taller socioafectivo'
                                        type='text'
                                        identifier='title_input'
                                        required
                                        label={{ text: "Titulo del taller" }}
                                    />
                                </div>
                                <section className='flex iphone:space-x-3 md:space-x-4 md:h-24 xl:h-32 2xl:h-32 iphone:text-xs lg:text-2xl'>
                                    <div className='md:w-1/2 iphone:w-1/2'>
                                        <div className='flex flex-col-reverse text-white font-medium group md:mb-14 iphone:w-full'>
                                            <InputGroup
                                                placeholder='DD/MM/AAAA'
                                                type='date'
                                                identifier='date_input'
                                                required
                                                label={{ text: "Fecha" }}
                                            />
                                        </div>
                                    </div>
                                    <div className='md:w-1/2 iphone:w-1/2'>
                                        <div className='flex flex-col-reverse text-white font-medium group iphone:w-full'>
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
                                <div className='flex flex-col'>
                                    <label className='iphone:text-lg xl:text-lg text-white font-bold'>Facilitador</label>
                                    <Listbox value={selectedfac} onChange={setSelectedfac}>
                                        <div className="relative mt-1 iphone:mt-0 iphone:w-full">
                                            <Listbox.Button className="relative iphone:h-6 md:h-8 lg:h-10 2xl:h-12 w-full py-1 pl-3 pr-10 text-left bg-white rounded-full shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                                <span className="block truncate iphone:text-xs">{selectedfac.email}</span>
                                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                    <SelectorIcon
                                                        className="w-5 h-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Listbox.Button>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {facilitators.map((facilitators, facilitatorsIdx) => (
                                                        <Listbox.Option
                                                            key={facilitatorsIdx}
                                                            className={({ active }) =>
                                                                `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                                                                        cursor-default select-none relative py-2 pl-10 pr-4`
                                                            }
                                                            value={facilitators}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                    <span
                                                                        className={`${selected ? 'font-medium' : 'font-normal'
                                                                            } block truncate iphone:text-xs`}
                                                                    >
                                                                        {facilitators.email}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span
                                                                            className={`${active ? 'text-amber-600' : 'text-amber-600'
                                                                                }
                                                                                        absolute inset-y-0 left-0 flex items-center pl-3`}
                                                                        >
                                                                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </Listbox>
                                </div>
                            </section>
                            <section className='flex flex-col xl:space-y-10 iphone:space-y-5 md:space-y-10'>
                                <section className='flex md:space-x-4 iphone:text-xs lg:text-2xl'>
                                    <div className='iphone:w-1/2 md:w-1/2'>
                                        <div className='flex flex-col'>
                                            <label className='iphone:text-lg xl:text-lg md:text-lg lg:text-lg text-white font-bold'>Modalidad</label>
                                            <Listbox value={selected} onChange={setSelected}>
                                                <div className="relative mt-1 iphone:mt-0 iphone:w-2/3 md:mt-0 lg:mt-0">
                                                    <Listbox.Button className="relative iphone:h-6 md:h-8 lg:h-10 w-full py-1 pl-3 pr-10 text-left bg-white rounded-full shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                                        <span className="block truncate">{selected.name}</span>
                                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                            <SelectorIcon
                                                                className="w-5 h-5 text-gray-400"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    </Listbox.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        leave="transition ease-in duration-100"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Listbox.Options className="absolute iphone:w-32 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                            {modalities.map((modalities, modalitiesIdx) => (
                                                                <Listbox.Option
                                                                    key={modalitiesIdx}
                                                                    className={({ active }) =>
                                                                        `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                                                                        cursor-default select-none relative py-2 pl-10 pr-4`
                                                                    }
                                                                    value={modalities}
                                                                >
                                                                    {({ selected, active }) => (
                                                                        <>
                                                                            <span
                                                                                className={`${selected ? 'font-medium' : 'font-normal'
                                                                                    } block truncate iphone:text-xs`}
                                                                            >
                                                                                {modalities.name}
                                                                            </span>
                                                                            {selected ? (
                                                                                <span
                                                                                    className={`${active ? 'text-amber-600' : 'text-amber-600'
                                                                                        }
                                                                                        absolute inset-y-0 left-0 flex items-center pl-3`}
                                                                                >
                                                                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                                                </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </Listbox.Option>
                                                            ))}
                                                        </Listbox.Options>
                                                    </Transition>
                                                </div>
                                            </Listbox>
                                        </div>
                                    </div>
                                    <div className='iphone:w-1/2 md:w-1/2 xl:flex xl:flex-row-reverse iphone:flex iphone:justify-end'>
                                        <div className='flex flex-col-reverse text-white font-medium group xl:w-2/3 iphone:w-2/3'>
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
                                    <p className='text-white font-bold iphone:text-lg md:text-xl'>Descripcion</p>
                                    <textarea className="rounded iphone:w-full iphone:h-16 md:w-full md:mb-1 md:h-48 xl:h-48 xl:mb-0" placeholder='Descripcion' required />
                                    <div className='flex bg-white w-1/2 text-red-500 rounded-full mt-2 iphone:w-2/3 iphone:h-4 iphone:text-xs md:mt-0 md:mb-8 md:w-2/3 lg:text-lg xl:w-2/3'>
                                        <ExclamationCircleIcon className='w-5 ml-2' />
                                        <p>Introduce un titulo valido</p>
                                    </div>
                                </div>
                            </section>
                        </form>
                        <div className='flex justify-center iphone:mt-5'>
                            <a href="" className='btn btn-primary iphone:w-63 md:w-60 lg:h-14 lg:text-2xl xl:h-12 text-center'>
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
