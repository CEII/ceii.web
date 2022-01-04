import type { NextPage } from 'next';
import ConstructionFido from '@components/ConstructionFido/ConstructionFido';

const Home: NextPage = () => {
    return (
        <div className="bg-primary w-full h-screen">
            <div className="flex flex-col justify-center items-center">
                <span className="bg-white text-accent px-5 text-3xl font-bold rounded-full mt-24 mb-6">
                    Ups!
                </span>
                <span className="text-white font-bold text-2xl mb-5">
                    Estamos en construcción
                </span>
                <div className="w-auto">
                    <ConstructionFido className="h-64" />
                </div>
                <span className="text-white italic text-2xl text-center mt-5 mb-6">
                    ¿Buscas los talleres socioafectivos?
                </span>
                <button
                    type="button"
                    className="bg-accent text-white rounded-full px-4 py-2 text-lg font-bold"
                >
                    Sí, llévame allá
                </button>
            </div>
        </div>
    );
};

export default Home;
