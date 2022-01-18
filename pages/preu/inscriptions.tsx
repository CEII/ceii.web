import { useQuery } from 'react-query';
import Layout from '@components/Layout';
import { NextPage } from 'next';
import { getAll } from '@services/preu/preuService';
import { useSession } from 'next-auth/react';
import Protected from '@components/Protected';
import Head from 'next/head';
import CourseCard from '@components/CourseCard';
import { Switch } from '@headlessui/react';
import { useEffect, useState } from 'react';
import useGuestMode from '@hooks/useGuestMode';

const Preu: NextPage = () => {
    const [fetchOwn, setFetchOwn] = useState(false);
    const { data: session } = useSession();
    const [guest] = useGuestMode();
    const { data, refetch } = useQuery('courses', () => getAll({ year: new Date().getFullYear() }));

    useEffect(() => {
        refetch();
    }, [refetch, fetchOwn]);

    if (!session && !guest)
        return (
            <Protected
                message="Debes iniciar sesión antes de visitar esta página"
                link={{ redirectTo: '/login', pageNameOrMessage: 'Inicia sesión' }}
            />
        );

    return (
        <>
            <Head>
                <title>PreUniversitario - {new Date().getFullYear()}</title>
            </Head>
            <Layout showFooter showNav>
                <section className="px-8 w-full py-4 space-y-4 md:px-20 lg:w-4/5 mx-auto">
                    <article className="text-white text-sm font-light space-y-3 xl:space-y-0 xl:text-base">
                        <h1 className="text-2xl font-bold xl:text-4xl xl:mb-3">¡Nos encantaría que participes!</h1>
                        <p>
                            Selecciona las actividades de tu interés en el día y hora que tengas disponibilidad,
                            nosotros te contactaremos al acercarse la fecha de cada actividad.
                        </p>
                        <p>
                            Recuerda que estas actividades son para completar tu participación en los Talleres
                            Sociafectivos.
                        </p>
                        <p>
                            Por cualquier consulta o error en la página (estamos en desarrollo 😅), puedes enviar un
                            correo a
                            <a
                                className="underline text-blue-400 hover:text-blue-600 italic ml-1"
                                href="mailto:00019618@uca.edu.sv"
                            >
                                00019618@uca.edu.sv
                            </a>
                            .
                        </p>
                    </article>
                    <article className="">
                        <Switch.Group>
                            <div className="flex items-center">
                                <Switch.Label className="mr-4 text-sm font-semibold text-white">
                                    Mostrar mis inscripciones unicamente
                                </Switch.Label>
                                <Switch
                                    checked={fetchOwn}
                                    onChange={setFetchOwn}
                                    className={`${
                                        fetchOwn ? 'bg-accent' : 'bg-gray-200'
                                    } inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent`}
                                >
                                    <span
                                        className={`${
                                            fetchOwn ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                                    />
                                </Switch>
                            </div>
                        </Switch.Group>
                    </article>
                    <article className="flex flex-wrap w-full justify-center">
                        {data &&
                            data.courses.map(({ id, title, schedule, description, enabled, isEnrolled }) => (
                                <CourseCard
                                    key={id}
                                    id={id}
                                    title={title}
                                    schedule={schedule}
                                    description={description}
                                    enabled={enabled && !guest}
                                    isEnrolled={isEnrolled}
                                    isFiltered={fetchOwn}
                                />
                            ))}
                    </article>
                </section>
            </Layout>
        </>
    );
};

export default Preu;
