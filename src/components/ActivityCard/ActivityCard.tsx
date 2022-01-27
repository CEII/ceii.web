import { FC, useState } from 'react';
import { ImageContainer } from '@components/ImageContainer';
import { UserIcon, PencilAltIcon, InformationCircleIcon } from '@heroicons/react/solid';
import { PreuCardProps } from '@interfaces/props';

const ActivityCard: FC<PreuCardProps> = ({ id, title, schedule, description, enabled, isEnrolled }) => {
    const [activityCard, setActivityCard] = useState({
        id,
        title,
        schedule,
        description,
        enabled,
        isEnrolled,
    });

    const IconsContainer: FC = ({ children }) => (
        <div className="flex justify-center items-center text-sm">{children}</div>
    );

    return (
        <div className="w-full bg-white rounded-xl p-3 group hover:bg-secondary">
            <div className="flex gap-3 mb-4 h-16">
                <ImageContainer
                    className="w-12 h-12 ring-accent ring-2 rounded-full"
                    // src="https://ceii-s3.s3.amazonaws.com/users/202201111509316579.jpg"
                    alt="user"
                    rounded
                />

                <div className="flex flex-col text-secondary group-hover:text-white">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <span className="text-sm italic">{new Date(activityCard.schedule).toLocaleString()}</span>
                </div>
            </div>
            <div className="flex justify-between text-secondary group-hover:text-white">
                <IconsContainer>
                    <UserIcon className="w-7 h-7" />
                    <span>15</span>
                </IconsContainer>

                <IconsContainer>
                    <PencilAltIcon className="w-7 h-7" />
                    <InformationCircleIcon className="ml-2 w-7 h-7" />
                </IconsContainer>
            </div>
        </div>
    );
};

export default ActivityCard;
