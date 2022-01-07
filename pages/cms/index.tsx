import type { NextPage } from 'next';
import Link from 'next/link';

const Cms: NextPage = () => (
        <div>
            <navar> 
                <p className="bg-white"> espacio para el menu de barras</p> 
            </navar>
            
            <section className="flex-col p-10 m-5 space-y-5">
                
            <div className="text-white rounded-md bg-secondary">
                <h2 className="font-sans font-semibold">Administracion de usuarios</h2>
                <p className="font-light"> Envía invitaciones a nuevos usuarios, modifica la información y roles existentes.</p>
                <Link href="/cms/users">
                     <a className="rounded-full bg-accent">Vamos allá</a>
                </Link>
            </div>
            
            <div className="bg-white rounded-md text-secondary">
                <h2 className="font-sans font-semibold">Administracion de talleres sociofectivos</h2>
                <p className="font-normal]"> Añade, modifica y elimina actividades. Consulta la información de un taller en específico</p>
                <Link href="/cms/users">
                     <a className="text-white rounded-full bg-accent">Vamos allá</a>
                </Link>
            </div>

            <div className="flex text-white rounded-md bg-secondary">
                <div> <p>logo ceii</p></div>
                
                <div>    
                <h2 className="font-sans font-semibold">Es lo único que puedes hacer por el momento...</h2>
                <p className="font-extralight">¡Agregaremos nuevas funciones pronto!</p>
                <Link href="/cms/users">
                     <a className="rounded-full bg-accent">Vamos allá</a>
                </Link>
                </div>
            </div>
            
            </section>

            
        </div>
)
export default Cms;