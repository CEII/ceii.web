import type { NextPage } from 'next';

const Team: NextPage = () => (
    <div className="flex flex-col">
        <div className="p-6 mt-5">
            <h1 className="text-white font-bold text-2xl">
                Conoce a nuestros desarrolladores
            </h1>
            <span className="text-white italic text-md">
                ¡Gracias a todos por su contribución!
            </span>
        </div>
        {/* Cards */}
        <div className="space-y-4 p-3 flex flex-wrap text-white">
            {/* Card */}
            <div className="flex flex-col bg-accent p-3 rounded-xl">
                <span className="text-bold text-base"> Walter Morales </span>
                <span className="italic underline text-sm">
                    00019618@uca.edu.sv
                </span>
                <ul className="flex flex-col text-sm mt-3">
                    <li>Project Manager</li>
                    <li>Scrum Master</li>
                    <li>FullStack Developer</li>
                </ul>
            </div>
        </div>
    </div>
);

export default Team;
