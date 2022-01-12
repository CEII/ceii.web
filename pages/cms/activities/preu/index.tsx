import Layout from '@components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SearchCircleIcon, PlusCircleIcon } from '@heroicons/react/solid';
import type { NextPage } from 'next';
import Head from 'next/head';
import CenteredContainer from '@components/Containers/CenteredContainer';
import InputGroup from '@components/Inputs/InputGroup';

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
                <div className="container w-4/5">
                    <div className="flex flex-col">
                        <h1 className="font-sans font-bold text-2xl text-white">Actividades</h1>
                        <h2 className="font-sans text-xl italic text-white mb-4">
                            Por ahora, solo del PreUniversitario
                        </h2>
                    </div>
                    <div className="flex w-full">
                        <div className="flex relative justify-center items-center w-full">
                            <InputGroup
                                className="font-sans w-full h-11 placeholder:text-left placeholder:italic"
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
                </div>
            </CenteredContainer>
        </Layout>
    </>
);

export default Preu;
