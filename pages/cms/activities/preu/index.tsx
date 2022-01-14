import Layout from '@components/Layout';
import { SearchCircleIcon, PlusCircleIcon } from '@heroicons/react/solid';
import type { NextPage } from 'next';
import Head from 'next/head';
import CenteredContainer from '@components/Containers/CenteredContainer';
import ActivityCard from '@components/ActivityCard';
import { useSession } from 'next-auth/react';
import Protected from '@components/Protected';
import { GoogleProps } from '@interfaces/props';
import { useQuery } from 'react-query';
import { getAll } from '@services/preu/preuService';
import InputGroup from '@components/Inputs/InputGroup';

const Preu: NextPage<GoogleProps> = () => {
    const { data: session } = useSession();
    const { data } = useQuery('courses', () => getAll({ year: new Date().getFullYear() }));

    if (!session)
        return (
            <Protected
                message="Debes iniciar sesión antes de visitar esta página"
                link={{ redirectTo: '/login', pageNameOrMessage: 'Inicia sesión' }}
            />
        );

    const renderActivityCards = () => {
        if (!data) return null;

        return (
            <div className="flex flex-col w-full mb-12 gap-4 lg:grid lg:grid-cols-2 lg:w-full lg:gap-x-36 lg:gap-y-6">
                {data &&
                    data.courses.map(({ id, title, schedule, description, enabled, isEnrolled }) => (
                        <ActivityCard
                            key={id}
                            id={id}
                            title={title}
                            schedule={schedule}
                            description={description}
                            enabled={enabled}
                            isEnrolled={isEnrolled}
                        />
                    ))}
            </div>
        );
    };

    return (
        <>
            <Head>
                <title>PreUniversitario - {new Date().getFullYear()}</title>
            </Head>

            <Layout showNav showFooter>
                <CenteredContainer className="w-full pt-6" orientation="vertical">
                    <section className="w-10/12">
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
                                <button type="submit" className="rounded-full absolute right-0 mr-0.5">
                                    <SearchCircleIcon className="h-11 text-secondary font-bold" />
                                </button>
                            </div>
                            <button type="button" className="bg-white rounded-full ml-2">
                                <PlusCircleIcon className="h-11 p-1 text-secondary font-bold" />
                            </button>
                        </div>
                        {renderActivityCards()}
                    </section>
                </CenteredContainer>
            </Layout>
        </>
    );
};

export default Preu;
