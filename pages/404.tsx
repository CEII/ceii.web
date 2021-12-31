import Image from 'next/image';

const Custom404 = () => {
  return (
    <div className="bg-primary p-16 w-full h-screen  ">
      <div className="flex flex-col mt-24 space-y-3 justify-center items-center lg:mt-40">
        <div
          className=" bg-white text-xl font-bold w-1/3 text-center rounded-lg 
          lg: w-24 "
        >
          <h1 className="text-accent">404</h1>
        </div>
        <p className="text-white font-bold text-lg">No hay nada por aquí...</p>
        <div className="w-auto">
          <Image
            className="
            lg:"
            src="/lost-fido.svg"
            width={250}
            height={250}
            priority
          />
        </div>
        <button
          className=" w-9/12  font-semibold bg-accent text-white rounded-md
          md:w-40 
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
