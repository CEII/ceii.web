import type { NextPage } from 'next';
import ConstructionFido from '@components/ConstructionFido/ConstructionFido';

const Home: NextPage = () => {
    return (
        <div className="bg-primary w-full h-screen">
            <div className="flex flex-col justify-center items-center">
                <span className="bg-white text-accent px-5 text-3xl font-bold rounded-full mt-20 mb-7">
                    Ups!
                </span>
                <span className="text-white font-bold text-2xl">
                    Estamos en construcción
                </span>
                <ConstructionFido />
                <span className="text-white italic text-2xl my-4 text-center">
                    ¿Buscas los talleres socioafectivos?
                </span>
                <button
                    type="button"
                    className="bg-accent text-white rounded-full px-4 py-2 text-lg"
                >
                    Sí, llévame allá
                </button>
            </div>
        </div>
    );
};

export default Home;
