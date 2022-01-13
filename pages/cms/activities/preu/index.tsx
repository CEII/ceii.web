import Layout from '@components/Layout';
import { SearchCircleIcon, PlusCircleIcon } from '@heroicons/react/solid';
import type { NextPage } from 'next';
import Head from 'next/head';
import CenteredContainer from '@components/Containers/CenteredContainer';
import InputGroup from '@components/Inputs/InputGroup';
import ActivityCard from '@components/ActivityCard';
import { useSession } from 'next-auth/react';
import Protected from '@components/Protected';
import { GoogleProps } from '@interfaces/props';
import Pagination from '@components/Pagination';

const Preu: NextPage<GoogleProps> = () => {
    const { data: session } = useSession();
        
    // if (!session)
    //     return (
    //         <Protected
    //             message="Debes iniciar sesión antes de visitar esta página"
    //             link={{ redirectTo: '/login', pageNameOrMessage: 'Inicia sesión' }}
    //         />
    //     );

    return(
        <>
            <Head>
                <title>Preu</title>
            </Head>
            
            <Layout showFooter>
                <CenteredContainer className="w-full h-full space-y-8" orientation="vertical">
                    <section className="w-4/5">
                        <div className="flex flex-col">
                            <h1 className="font-sans font-bold text-2xl text-white">Actividades</h1>
                            <h2 className="font-sans text-xl italic text-white mb-4">
                                Por ahora, solo del PreUniversitario
                            </h2>
                        </div>
                        <div className="flex w-full mb-8">
                            <div className="flex relative justify-center items-center w-full">
                                <InputGroup
                                    className="font-sans w-full h-11 placeholder:text-left placeholder:italic text-justify static"
                                    placeholder="Busca una actividad"
                                    type="text"
                                    identifier="activity"
                                    required
                                    minLength={19}
                                    maxLength={19}
                                    label={{ text: '' }}
                                />
                                <button type="button" className="rounded-full absolute right-0 mr-0.5">
                                    <SearchCircleIcon className="h-11 text-secondary font-bold" />
                                </button>
                            </div>
                            <button type="button" className="bg-white rounded-full ml-2">
                                <PlusCircleIcon className="h-11 p-1 text-secondary font-bold" />
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-5 w-full justify-between mb-12">
                            <ActivityCard />
                            <ActivityCard />
                            <ActivityCard />
                            <ActivityCard />
                        </div>


                        <Pagination />

                    </section>


                </CenteredContainer>
            </Layout>
        </>
    );
}

export default Preu;
