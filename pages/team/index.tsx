import Footer from '@components/Team/Footer';
import type { NextPage } from 'next';
import Image from 'next/image';
import ProfileImg from '@components/Team/ProfileImg';

const Team: NextPage = () => (
    <div className="flex flex-col p-4 h-screen md:justify-start md:items-start md:px-44 lg:py-16 lg:px-32">
        <div className="py-6 px-3 md:py-10">
            <h1 className="text-white font-bold text-2xl md:text-xl lg:text-3xl">
                Conoce a nuestros desarrolladores
            </h1>
            <span className="text-white italic text-md md:text-base lg:text-xl">
                ¡Gracias a todos por su contribución!
            </span>
        </div>
        {/* Cards-container */}
        <div className="grid grid-cols-2 text-white md:justify-evenly lg:grid-cols-3">
            {/* Card */}
            <div className="bg-accent py-2 px-1 h-max rounded-xl m-1 md:p-4 lg:mx-2">
                <div className="flex flex-wrap space-x-2 h-auto">
                    <ProfileImg className="bg-gray-400 border-2 border-white rounded-full w-7 h-7 lg:h-9 lg:w-9" />
                    <div className="flex flex-col">
                        <span className="font-semibold text-sm lg:text-lg">
                            Walter Morales
                        </span>
                        <span className="italic underline text-xxs md:text-xs lg:text-sm">
                            00019618@uca.edu.sv
                        </span>
                    </div>
                </div>
                <div className="flex h-auto justify-center text-center mt-3 flex-col items-center text-xs lg:text-sm">
                    <span className="h-max"> Project Manager </span>
                </div>
            </div>
            <div className="bg-accent py-2 px-1 h-max rounded-xl m-1 md:p-4 lg:mx-2">
                <div className="flex flex-wrap space-x-2 h-auto">
                    <ProfileImg className="bg-gray-400 border-2 border-white rounded-full w-7 h-7 lg:h-9 lg:w-9" />
                    <div className="flex flex-col">
                        <span className="font-semibold text-sm lg:text-lg">
                            Walter Morales
                        </span>
                        <span className="italic underline text-xxs md:text-xs lg:text-sm">
                            00019618@uca.edu.sv
                        </span>
                    </div>
                </div>
                <div className="flex h-auto justify-center flex-col space-y-1 text-center mt-3 items-center text-xs lg:text-sm">
                    <span> Project Manager </span>
                    <span> Scrum Master </span>
                    <span> FullStack Developer </span>
                </div>
            </div>
        </div>
        {/* Nota: no sé cómo posicionar el footer y que esté siempre abajo
        se supone que es así, pero no hace nada xd */}
        {/* A ya lo hizo xddd */}
        <footer className="absolute bottom-0">
            <Footer />
        </footer>
    </div>
);

export default Team;
