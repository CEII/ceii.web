import type { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import BoxFido from '@components/Icons/BoxFido';
import { FC } from 'react';
import Layout from '@components/Layout';
import Head from 'next/head';

const CmsContainer: FC = ({ children }) => (
    <article
        className="flex flex-col justify-between text-sm text-white rounded-2xl bg-secondary transition-all duration-500 group 
        hover:bg-white p-4 space-y-4 w-full md:w-2/3 lg:w-2/6"
    >
        {children}
    </article>
);

const Cms: NextPage = () => (
    <>
        <Head>
            <title>CMS</title>
        </Head>
        <nav>
            <FontAwesomeIcon icon={faBars} className="w-10 mt-3 ml-4 text-2xl text-white md:text-5xl" />
        </nav>

        <Layout showFooter>
            <section className="h-full px-10 pt-10 flex flex-col items-center justify-start space-y-4">
                <CmsContainer>
                    <div className="group-hover:text-secondary space-y-2">
                        <h2 className="font-semibold md:text-xl">Administrar usuarios</h2>
                        <p className="text-xs font-light md:text-sm md:font-normal">
                            Envía invitaciones a nuevos usuarios, modifica la información y roles existentes.
                        </p>
                    </div>

                    <Link href="/cms/users">
                        <a className="btn btn-small btn-primary self-end lg:btn-medium">Vamos allá</a>
                    </Link>
                </CmsContainer>

                <CmsContainer>
                    <div className="group-hover:text-secondary space-y-2">
                        <h2 className="font-semibold md:text-xl">Administrar talleres sociofectivos</h2>
                        <p className="text-xs font-light md:text-sm md:font-normal">
                            Añade, modifica y elimina actividades. Consulta la información de un taller en específico
                        </p>
                    </div>

                    <Link href="/cms/users">
                        <a className="btn btn-small btn-primary self-end lg:btn-medium">Vamos allá</a>
                    </Link>
                </CmsContainer>

                <div className="flex items-center p-4 text-sm text-white rounded-2xl bg-secondary space-x-7 w-full md:w-2/3 lg:w-2/6">
                    <BoxFido className="w-24 h-24" />

                    <div className="md:pb-4 space-y-2">
                        <h2 className="font-sans font-semibold md:text-xl md:font-medium md:pr-10">
                            Es lo único que puedes hacer por el momento...
                        </h2>
                        <p className="text-xs font-light md:text-sm md:font-normal">
                            ¡Agregaremos nuevas funciones pronto!
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    </>
);

export default Cms;
