import type { NextPage } from 'next';
import ConstructionFido from '@components/ConstructionFido/ConstructionFido';

const Home: NextPage = () => {
    return (
        <div className="bg-primary w-full h-screen flex justify-center">
            <div className="flex flex-col justify-center items-center space-y-5">
                <span className="bg-white py-1 text-accent px-5 text-3xl font-bold rounded-full md:text-4xl md:px-6">
                    Ups!
                </span>
                <span className="text-white font-bold text-2xl break-words md:text-3xl">
                    Estamos en construcción
                </span>
                <div className="w-auto">
                    <ConstructionFido className="h-64 md:h-72" />
                </div>
                <p className="text-white italic text-2xl text-center break-words w-96 md:text-3xl">
                    ¿Buscas los talleres socioafectivos?
                </p>
                <button
                    type="button"
                    className="bg-accent text-white rounded-full px-4 py-2 text-lg font-bold md:text-2xl"
                >
                    Sí, llévame allá
                </button>
            </div>
        </div>
    );
};

export default Home;
