import type { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Cmslogo from 'components/Cmslogo/Index';

const Cms: NextPage = () => (
    <div>
        <nav>
            <FontAwesomeIcon
                icon={faBars}
                className="w-10 mt-3 ml-4 text-2xl text-white md:text-5xl"
            />
        </nav>

        <section className="flex flex-col p-2 mt-16 space-y-5 m-7 md:gap-12 md:ml-20 md:w-3/4 lg:grid lg:grid-cols-2 lg:gap-8 lg:ml-0 lg:space-y-0 lg:my-auto lg:p-12 lg:w-full lg:place-items-center ">
            <div className="flex flex-col justify-between pl-4 text-sm text-white rounded-2xl bg-secondary md:h-32 md:pb-2 lg:p-5 lg:h-72 lg:w-9/12 lg:place-self-end hover:bg-white group">
                <div className="transition-all duration-500 group-hover:text-secondary">
                    <h2 className="pt-2 font-sans font-semibold md:text-xl">
                        Administrar usuarios
                    </h2>
                    <p className="pt-2 pr-3 text-xs font-light md:text-sm">
                        {' '}
                        Envía invitaciones a nuevos usuarios, modifica la
                        información y roles existentes.
                    </p>
                </div>

                <div className="flex justify-end pb-2 pr-4 md:pb-1">
                    <Link href="/cms/users">
                        <a className="flex h-6 pl-5 pr-5 mt-5 text-xs font-medium text-white transition ease-in-out delay-150 rounded-full bg-accent md:text-sm md:px-7 hover:scale-110">
                            Vamos allá
                        </a>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col justify-between pl-4 text-sm bg-white hover:bg-secondary group rounded-2xl text-secondary md:pb-2 lg:p-5 lg:h-72 lg:w-9/12 lg:place-self-start">
                <div className="transition-all duration-500 md:pb-4 group-hover:text-white">
                    <h2 className="pt-2 font-sans font-semibold md:text-xl">
                        Administrar talleres sociofectivos
                    </h2>
                    <p className="pt-2 pr-3 text-xs font-light md:text-sm">
                        {' '}
                        Añade, modifica y elimina actividades. Consulta la
                        información de un taller en específico
                    </p>
                </div>

                <div className="flex justify-end pb-2 pr-4 md:pb-1">
                    <Link href="/cms/users">
                        <a className="h-6 pl-5 pr-5 mt-5 text-xs font-medium text-white transition ease-in-out delay-150 rounded-full bg-accent md:text-sm md:px-7 hover:scale-110">
                            Vamos allá
                        </a>
                    </Link>
                </div>
            </div>

            <div className="flex items-center p-5 text-sm text-white hover:bg-white group rounded-2xl bg-secondary lg:h-72 lg:w-9/12 lg:place-self-end">
                <div>
                    <Cmslogo className="w-20 h-20 mr-7 " />
                </div>

                <div className="transition-all duration-500 md:pb-4 group-hover:text-secondary">
                    <h2 className="font-sans font-semibold md:text-2xl md:font-medium md:pr-10">
                        Es lo único que puedes hacer por el momento...
                    </h2>
                    <p className="mt-3 text-xs font-light md:text-sm">
                        ¡Agregaremos nuevas funciones pronto!
                    </p>
                </div>
            </div>
        </section>
    </div>
);
export default Cms;
