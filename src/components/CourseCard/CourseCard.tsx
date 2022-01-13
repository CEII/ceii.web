import { useMutation } from 'react-query';
import { PreuCardProps } from '@interfaces/props';
import { FC, useEffect, useRef, useState } from 'react';
import { enroll } from '@services/preu/preuService';
import toast from 'react-hot-toast';
import CenteredContainer from '@components/Containers/CenteredContainer';
import { LONG_NOTIFICATION } from '@constants/notify';

const CardLoader: FC = () => (
    <CenteredContainer
        className="w-full h-full rounded-xl absolute top-0 left-0 bg-black bg-opacity-50"
        orientation="vertical"
    >
        <div className="w-10 h-10 rounded-full bg-secondary animate-ping" />
    </CenteredContainer>
);

const CourseCard: FC<PreuCardProps> = ({ id, title, schedule, description, enabled, isEnrolled, isFiltered }) => {
    const isMounted = useRef(false);

    const [cardState, setCardState] = useState({
        id,
        title,
        schedule,
        description,
        enabled,
        isEnrolled,
        isFiltered,
    });

    const { data, isLoading, mutate } = useMutation(() => enroll(id));

    useEffect(() => {
        if (isMounted.current && data != null) {
            setCardState(data);

            const mssg = data.isEnrolled === false ? 'Te has desinscrito' : 'Te has inscrito';

            toast.success(mssg, LONG_NOTIFICATION);
        } else isMounted.current = true;
    }, [data]);

    return (
        <div
            className={`${
                !isEnrolled && isFiltered && 'hidden'
            } relative w-full bg-white rounded-xl text-secondary py-2 px-3 my-2 smooth-transition group hover:bg-secondary hover:text-white md:mx-2 md:w-5/12 xl:w-1/4 flex flex-col`}
        >
            {isLoading && <CardLoader />}
            <h3 className="text-base font-bold border-b border-secondary group-hover:border-white md:text-lg xl:text-xl">
                {cardState.title}
            </h3>
            {/* <div className="flex items-center justify-start py-1 border-b border-secondary group-hover:border-white mb-1">
                <ImageContainer
                    className="rounded-full h-6 w-6 md:h-8 md:w-8 lg:h-11 lg:w-11"
                    src="/img/empty.png"
                    alt="user"
                />
                <h4 className="text-sm mx-4">Walter Morales </h4>
            </div> */}
            <div className="border-b border-secondary group-hover:border-white mb-1 py-1">
                <h5 className="text-sm font-semibold xl:text-base">Horarios</h5>
                <p className="text-xs xl:text-sm">{new Date(cardState.schedule).toLocaleString()}</p>
            </div>
            <div>
                <p className="text-xs xl:text-sm">{cardState.description}</p>
            </div>
            <div className="w-full flex justify-between items-center text-sm mt-2 lg:mt-auto">
                <span className="font-bold" />
                <button
                    type="button"
                    className={`btn btn-small ${!cardState.isEnrolled ? 'btn-primary' : 'btn-dark'}`}
                    disabled={!cardState.enabled}
                    onClick={() => mutate()}
                >
                    {!cardState.isEnrolled ? 'Inscribirme' : 'Desinscribirme'}
                </button>
            </div>
        </div>
    );
};

export default CourseCard;
