import { FunctionComponent } from 'react';

const CourseCard : FunctionComponent = () => {
    return (
        <div className="w-80 bg-white rounded-xl text-secondary py-1 px-3 my-2 md:w-[340px] lg:w-[378px]">
            <h3 className="text-base font-bold lg:text-[20px]"> Conceptos Basicos de Programacion</h3>

            <div className="flex items-center justify-start my-1">
                <img className="rounded-full h-6 w-6 md:h-8 md:w-8 lg:h-11 lg:w-11" src="https://yt3.ggpht.com/ytc/AKedOLQwkRfcKtHErgMrwFJOn7_TgFDg_hlDtHlWTVTg9A=s176-c-k-c0x00ffffff-no-rj" alt="user"/>
                <h4 className="text-[12px] mx-2">Walter Morales </h4>
            </div>

            <hr className="border-secondary"/>

            <h5 className="text-[10px] md:text-xs font-medium mt-1"> Horarios</h5>
            <p className="text-[8px] md:text-[10px] mb-1"> Lunes, Miercoles y Viernes, de 8:00 a.m.</p>

            <hr className="border-secondary mb-1"/>

            <p className="text-[8px] md:text-[10px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla lobortis ut augue sed eleifend. Vivamus aliquet varius nibh, consectetur placerat turpis luctus vel. Pellentesque iaculis mollis nibh, venenatis euismod nunc euismod quis.
            </p>

            <div className="w-full flex justify-between items-center text-[10px] mt-2">
                <span className="font-bold">1/20</span>
                <button className="text-white rounded-full bg-accent px-2 py-[3px]">Inscribirme</button>
            </div>
        </div>
    )
};

export default CourseCard;