import { FunctionComponent } from 'react';
import Navbar from '@components/Navbar';
/* email, name, lastName, imageUrl, role, description */
const UserCard: FunctionComponent = () => {
    return (
        <div className="flex flex-col justify-center items-center h-96 w-4/12  border-4 rounded bg-white space-y-4">
            <img className="rounded-full border-4 w-[100px] h-[100px] border-accent" />
            <h1>
                Walter{/* name */} Morales {/* lastName */}
            </h1>
            <p>00019618@uca.edu.sv {/* email */}</p>

            <p>Vicepresidente, Repr. Comité Relaciones Públicas {/* No sé xd */}</p>

            <p>.NET & FullStack Developer @ Elaniin </p>

            <footer className="relative bottom-0 w-full bg-secondary text-white h-16 flex justify-center ">
                #00019618 {/* ucaId */}
            </footer>
        </div>
    );
};

export default UserCard;
