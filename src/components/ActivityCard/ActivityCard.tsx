import {FC} from 'react'
import { ImageContainer } from '@components/ImageContainer'
import { UserIcon, PencilAltIcon, InformationCircleIcon } from '@heroicons/react/solid';

const ActivityCard : FC = () => {  

    const IconsContainer : FC = ({children}) => (
        <div className="flex justify-center items-center text-sm">
            {children}
        </div>
    );
    

    return (
        <>
            <div className="w-full bg-white rounded-xl p-3 group hover:bg-secondary lg:w-5/12">
                <div className="flex gap-3 mb-4 h-16">
                    <ImageContainer
                        className="w-12 h-12 ring-accent ring-2 rounded-full"
                        // src="https://ceii-s3.s3.amazonaws.com/users/202201111509316579.jpg"
                        alt="user"
                        rounded
                    />
                    
                    <div className='flex flex-col text-secondary mt-2 group-hover:text-white'>
                        <h3 className="font-bold text-lg">Creación de marca</h3>
                        <span className="text-sm italic">Lunes 21 de enero, 2021 - 8:00 AM</span>
                    </div>
                </div>
                <div className="flex justify-between text-secondary group-hover:text-white">
                    <IconsContainer>
                        <UserIcon className="w-7 h-7"/>
                        <span>15</span>
                    </IconsContainer>
                    
                    <IconsContainer>
                        <PencilAltIcon className="w-7 h-7"/>
                        <InformationCircleIcon className="w-7 h-7"/>
                    </IconsContainer>
                </div>
            </div>
        </>
    )
}

export default ActivityCard
