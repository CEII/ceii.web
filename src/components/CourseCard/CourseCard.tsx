import ImageContainer from '@components/ImageContainer';
import { FunctionComponent } from 'react';

const CourseCard: FunctionComponent = () => {
    return (
        <div className="w-80 bg-white rounded-xl text-secondary py-2 px-3 my-2 md:w-96 border-animate">
            <h3 className="text-base font-bold md:text-lg">Conceptos Basicos de Programacion</h3>
            <div className="flex items-center justify-start py-1 border-b border-secondary mb-1">
                <ImageContainer
                    className="rounded-full h-6 w-6 md:h-8 md:w-8 lg:h-11 lg:w-11"
                    src="/img/empty.png"
                    alt="user"
                />
                <h4 className="text-sm mx-4">Walter Morales </h4>
            </div>
            <div className="border-b border-secondary mb-1 py-1">
                <h5 className="text-sm font-semibold"> Horarios</h5>
                <p className="text-xs"> Lunes, Miercoles y Viernes, de 8:00 a.m.</p>
            </div>
            <div>
                <p className="text-xs">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla lobortis ut augue sed eleifend.
                    Vivamus aliquet varius nibh, consectetur placerat turpis luctus vel. Pellentesque iaculis mollis
                    nibh, venenatis euismod nunc euismod quis.
                </p>
            </div>
            <div className="w-full flex justify-between items-center text-sm mt-2">
                <span className="font-bold">1/20</span>
                <button type="button" className="btn btn-small btn-primary">
                    Inscribirme
                </button>
            </div>
        </div>
    );
};

export default CourseCard;
