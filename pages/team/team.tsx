import type { NextPage } from 'next';

const Team: NextPage = () => (
    <div className="flex flex-col p-4 md:justify-start md:items-start md:px-48 lg:py-16 lg:px-32">
        <div className="py-6 px-3 md:py-10">
            <h1 className="text-white font-bold text-2xl md:text-xl lg:text-3xl">
                Conoce a nuestros desarrolladores
            </h1>
            <span className="text-white italic text-md md:text-base lg:text-xl">
                ¡Gracias a todos por su contribución!
            </span>
        </div>
        {/* Cards-container */}
        <div className="flex flex-wrap text-white items-start md:justify-evenly">
            {/* Card */}
            <div className="flex flex-col bg-accent p-2 rounded-xl m-3 md:p-4 lg:mx-2 lg:px-10">
                <span className="font-semibold text-sm md:text-base lg:text-lg">
                    Walter Morales
                </span>
                <span className="italic underline text-xs lg:text-sm">
                    00019618@uca.edu.sv
                </span>
                <ul className="flex flex-col items-center text-xs mt-3 lg:text-sm">
                    <li>Project Manager</li>
                    <li>Scrum Master</li>
                    <li>FullStack Developer</li>
                </ul>
            </div>
            <div className="flex flex-col bg-accent p-2 rounded-xl m-3 md:p-4 lg:mx-2 lg:px-10">
                <span className="font-semibold text-sm md:text-base lg:text-lg">
                    Walter Morales
                </span>
                <span className="italic underline text-xs lg:text-sm">
                    00019618@uca.edu.sv
                </span>
                <ul className="flex flex-col items-center text-xs mt-3 lg:text-sm">
                    <li>Project Manager</li>
                    <li>Scrum Master</li>
                    <li>FullStack Developer</li>
                </ul>
            </div>
            <div className="flex flex-col bg-accent p-2 rounded-xl m-3 md:p-4 lg:mx-2 lg:px-10">
                <span className="font-semibold text-sm md:text-base lg:text-lg">
                    Walter Morales
                </span>
                <span className="italic underline text-xs lg:text-sm">
                    00019618@uca.edu.sv
                </span>
                <ul className="flex flex-col items-center text-xs mt-3 lg:text-sm">
                    <li>Project Manager</li>
                    <li>Scrum Master</li>
                    <li>FullStack Developer</li>
                </ul>
            </div>
        </div>
    </div>
);

export default Team;
