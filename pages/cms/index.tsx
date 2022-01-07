import type { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const Cms: NextPage = () => (
        <div >
            <navar> 
                <FontAwesomeIcon icon={faBars}  className="w-10 ml-5 text-white "/> 
            </navar>
            
            <section className="flex-col m-8 space-y-5 ">
                
            <div className="p-3 text-white rounded-lg bg-secondary ">
                <h2 className="font-sans font-semibold">Administracion de usuarios</h2>
                    <p className="mt-3 text-xs font-light"> Envía invitaciones a nuevos usuarios, modifica la información y roles existentes.</p>
                
                <div className="flex justify-end pr-3">
                    <Link href="/cms/users">
                        <a className="pl-5 pr-5 mt-5 font-medium text-white rounded-full bg-accent">Vamos allá</a>
                    </Link> 
                </div>
            </div>
            
            <div className="p-5 bg-white rounded-lg text-secondary">
                <h2 className="font-sans font-semibold">Administracion de talleres sociofectivos</h2>
                    <p className="mt-3 text-xs font-light"> Añade, modifica y elimina actividades. Consulta la información de un taller en específico</p>
                
                <div className="flex justify-end pr-3">
                    <Link href="/cms/users">
                        <a className="pl-5 pr-5 m-3 font-medium text-white rounded-full bg-accent">Vamos allá</a>
                    </Link> 
                </div>
                
            </div>

            <div className="flex p-5 text-white rounded-lg bg-secondary">
                <div> <p>logo ceii</p></div>
                
                <div>    
                <h2 className="font-sans font-semibold">Es lo único que puedes hacer por el momento...</h2>
                <p className="mt-3 text-xs font-light">¡Agregaremos nuevas funciones pronto!</p>
                </div>
            </div>
            </section>
        </div>
)
export default Cms;