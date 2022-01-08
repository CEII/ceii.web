import type { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Cmslogo from 'components/Cmslogo/Index';

const Cms: NextPage = () => (
    <div>
        <navar>
            <FontAwesomeIcon icon={faBars} className="w-10 mt-3 ml-3 text-2xl text-white" />
        </navar>

        <section className="flex-col m-7 mt-16 space-y-5 w-80 p-2">

            <div className="pl-4 text-sm text-white rounded-2xl bg-secondary">
           
                <h2 className="pt-2 font-sans font-semibold">Administrar usuarios</h2>
                <p className="pt-2 pr-3 text-xs font-light"> Envía invitaciones a nuevos usuarios, modifica la información y roles existentes.</p>

                <div className="flex justify-end pb-2 pr-3">
                    <Link href="/cms/users">
                        <a className="pl-5 pr-5 font-medium text-xs mt-5 text-white rounded-full bg-accent">Vamos allá</a>
                    </Link>
                </div>
            </div>

            <div className="pl-4 text-sm bg-white rounded-2xl text-secondary">
                <h2 className="pt-2 font-sans font-semibold">Administrar talleres sociofectivos</h2>
                <p className="mt-3 text-xs font-light"> Añade, modifica y elimina actividades. Consulta la información de un taller en específico</p>

                <div className="flex justify-end pb-2 pr-3">
                    <Link href="/cms/users">
                        <a className="pl-5 pr-5 font-medium  text-xs mt-3 text-white rounded-full bg-accent">Vamos allá</a>
                    </Link>
                </div>

            </div>

            <div className="flex p-5 text-sm text-white rounded-2xl bg-secondary">
                <div>
                    <Cmslogo className="w-20 h-20 mr-3 " />
                </div>
            
                <div>
                    <h2 className="font-sans font-semibold">Es lo único que puedes hacer por el momento...</h2>
                    <p className="mt-3 text-xs font-light">¡Agregaremos nuevas funciones pronto!</p>
                </div>
            </div>
        </section>
    </div>
)
export default Cms;