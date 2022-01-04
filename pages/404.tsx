import LostFido from 'components/Svgs/LostFido';
import { NextPage } from 'next';

const Custom404: NextPage = () => {
  return (
    <div className="bg-primary p-16 w-full h-screen  ">
      <div className="flex flex-col mt-24 space-y-5 justify-center items-center lg:mt-40">
        <div
          className=" bg-white p-1 font-bold w-1/3 text-center rounded-full
          lg: w-24 "
        >
          <h1 className="text-accent text-2xl">404</h1>
        </div>
        <p className="text-white font-bold text-xl lg:text-2xl md:text-2xl ">No hay nada por aquí...</p>
        <div className="w-auto">
          <LostFido className="w-44 md:w-48 lg:w-52" />
        </div>
        <button
          className=" w-9/12 p-1 text-[18px] font-semibold bg-accent text-white rounded-full
          md:w-3/12
          lg:w-48  
          
          "
          type="submit"
        >
          Vuelve a casa
        </button>
      </div>
    </div>
  );
};
export default Custom404;
