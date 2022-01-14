import ProfileImg from '@components/Team/ProfileImg';
import { FunctionComponent } from 'react';

const Team: FunctionComponent = () => (
    <div className="w-full">
        <div className="flex flex-col p-4 md:px-44 lg:py-16 lg:px-32 xl:p-16 xl:items-center">
            <div className="py-6 px-3 md:py-10">
                <h1 className="text-white font-bold text-2xl md:text-xl lg:text-3xl">
                    Conoce a nuestros desarrolladores
                </h1>
                <span className="text-white italic text-md md:text-base lg:text-xl">
                    ¡Gracias a todos por su contribución!
                </span>
            </div>
            {/* Cards-container */}
            <div className="grid grid-cols-2 text-white md:justify-evenly gap-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4">
                {/* Card */}
                <div className="bg-accent py-2 px-1 h-full rounded-xl md:p-4">
                    <div className="flex flex-wrap space-x-2 h-auto">
                        <ProfileImg className="bg-gray-400 border-2 border-white rounded-full w-7 h-7 lg:h-9 lg:w-9" />
                        <div className="flex flex-col flex-start">
                            <span className="font-semibold text-sm lg:text-lg">Walter Morales</span>
                            <span className="italic underline text-xxs md:text-xs lg:text-sm">00019618@uca.edu.sv</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-center mt-3 items-center text-xs lg:text-sm">
                        <span> Project Manager </span>
                    </div>
                </div>
                {/* espacio */}
                <div className="bg-accent py-2 px-1 h-full rounded-xl md:p-4">
                    <div className="flex flex-wrap space-x-2 h-auto">
                        <ProfileImg className="bg-gray-400 border-2 border-white rounded-full w-7 h-7 lg:h-9 lg:w-9" />
                        <div className="flex flex-col">
                            <span className="font-semibold text-sm lg:text-lg">Walter Morales</span>
                            <span className="italic underline text-xxs md:text-xs lg:text-sm">00019618@uca.edu.sv</span>
                        </div>
                    </div>
                    <div className="flex flex-col h-max justify-center text-center mt-3 items-center text-xs lg:text-sm">
                        <span> Project Manager </span>
                        <span> Project Manager </span>
                        <span> Project Manager </span>
                    </div>
                </div>
                <div className="bg-accent py-2 px-1 h-full rounded-xl md:p-4">
                    <div className="flex flex-wrap space-x-2 h-auto">
                        <ProfileImg className="bg-gray-400 border-2 border-white rounded-full w-7 h-7 lg:h-9 lg:w-9" />
                        <div className="flex flex-col">
                            <span className="font-semibold text-sm lg:text-lg">Walter Morales</span>
                            <span className="italic underline text-xxs md:text-xs lg:text-sm">00019618@uca.edu.sv</span>
                        </div>
                    </div>
                    <div className="flex flex-col h-max justify-center text-center mt-3 items-center text-xs lg:text-sm">
                        <span> Project Manager </span>
                        <span> Project Manager </span>
                        <span> Project Manager </span>
                    </div>
                </div>
                <div className="bg-accent py-2 px-1 h-full rounded-xl md:p-4">
                    <div className="flex flex-wrap space-x-2 h-auto">
                        <ProfileImg className="bg-gray-400 border-2 border-white rounded-full w-7 h-7 lg:h-9 lg:w-9" />
                        <div className="flex flex-col flex-start">
                            <span className="font-semibold text-sm lg:text-lg">Walter Morales</span>
                            <span className="italic underline text-xxs md:text-xs lg:text-sm">00019618@uca.edu.sv</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-center mt-3 items-center text-xs lg:text-sm">
                        <span> Project Manager </span>
                    </div>
                </div>
                {/* espacio */}
                <div className="bg-accent py-2 px-1 h-full rounded-xl md:p-4">
                    <div className="flex flex-wrap space-x-2 h-auto">
                        <ProfileImg className="bg-gray-400 border-2 border-white rounded-full w-7 h-7 lg:h-9 lg:w-9" />
                        <div className="flex flex-col">
                            <span className="font-semibold text-sm lg:text-lg">Walter Morales</span>
                            <span className="italic underline text-xxs md:text-xs lg:text-sm">00019618@uca.edu.sv</span>
                        </div>
                    </div>
                    <div className="flex flex-col h-max justify-center text-center mt-3 items-center text-xs lg:text-sm">
                        <span> Project Manager </span>
                        <span> Project Manager </span>
                        <span> Project Manager </span>
                    </div>
                </div>
                <div className="bg-accent py-2 px-1 h-full rounded-xl md:p-4">
                    <div className="flex flex-wrap space-x-2 h-auto">
                        <ProfileImg className="bg-gray-400 border-2 border-white rounded-full w-7 h-7 lg:h-9 lg:w-9" />
                        <div className="flex flex-col">
                            <span className="font-semibold text-sm lg:text-lg">Walter Morales</span>
                            <span className="italic underline text-xxs md:text-xs lg:text-sm">00019618@uca.edu.sv</span>
                        </div>
                    </div>
                    <div className="flex flex-col h-max justify-center text-center mt-3 items-center text-xs lg:text-sm">
                        <span> Project Manager </span>
                        <span> Project Manager </span>
                        <span> Project Manager </span>
                    </div>
                </div>
            </div>
            {/* Nota: no sé cómo posicionar el footer y que esté siempre abajo
        se supone que es así, pero no hace nada xd */}
            {/* A ya lo hizo xddd */}
        </div>
    </div>
);

export default Team;
