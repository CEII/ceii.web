import CenteredContainer from '@components/Containers/CenteredContainer';
import { ImageContainer } from '@components/ImageContainer';
import { FunctionComponent } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { CardTeamProps } from '@interfaces/props';

const CardTeam: FunctionComponent<CardTeamProps> = ({ email, name, lastName, imgUrl, participation }) => {
    return (
        <CenteredContainer
        orientation="vertical"
        className="bg-accent w-full rounded-2xl smooth-transition p-4 my-2 space-y-4 first:bg-secondary hover:scale-105 md:w-5/12 md:mx-4 lg:w-80"
    >
        <CenteredContainer orientation="vertical" className="text-center space-y-2">
            <ImageContainer
                className="bg-gray-400 border-2 border-white rounded-full w-[4.5rem] h-[4.5rem] lg:h-20 lg:w-20"
                alt="profile"
                src= { imgUrl}
                rounded={ true }
            />
            <p className="flex flex-col flex-start">
                <span className="font-semibold text-lg">{ `${name} ${lastName}` }</span>
                <a href={`mailto:${email}`} className="italic underline text-xs lg:text-sm">
                    { email}
                </a>
            </p>
        </CenteredContainer>
        <CenteredContainer orientation="vertical" className="font-bold text-sm space-y-2">
            {
                participation.map( ptn => (
                    <span className="px-2 py-1 bg-white rounded-full text-secondary">{ ptn }</span>
                    )
                )
            }
        </CenteredContainer>
        <CenteredContainer orientation="horizontal" className="pt-4 space-x-4">
            <a>
                <Icon icon={faInstagram} className="text-2xl hover:scale-125 smooth-transition" />
            </a>
            <a>
                <Icon icon={faLinkedin} className="text-2xl hover:scale-125 smooth-transition" />
            </a>
            <a>
                <Icon icon={faTwitter} className="text-2xl hover:scale-125 smooth-transition" />
            </a>
            <a>
                <Icon icon={faFacebook} className="text-2xl hover:scale-125 smooth-transition" />
            </a>
            <a>
                <Icon icon={faGithub} className="text-2xl hover:scale-125 smooth-transition" />
            </a>
        </CenteredContainer>
    </CenteredContainer>)
};

const Team: FunctionComponent = () => (
    <div className="w-full">
        <div className="flex flex-col p-4 md:px-12 lg:py-16 lg:px-32 xl:p-16 xl:items-center">
            <div className="py-6 px-3 md:py-10">
                <h1 className="text-white font-bold text-2xl md:text-xl lg:text-2xl">
                    Conoce a nuestros desarrolladores
                </h1>
                <span className="text-white italic text-md md:text-base lg:text-xl">
                    ¡Gracias a todos por su contribución!
                </span>
            </div>
            {/* Cards-container */}
            <div className="flex flex-wrap items-center justify-center text-white px-2">
                <CardTeam
                    email={"00019618@uca.edu.sv"}
                    name={"Walter"}
                    lastName={"Morales"}
                    imgUrl={"https://ceii-s3.s3.amazonaws.com/users/202201132136568806.jpg"}
                    participation={["Lead Programmer", "Lead Programmer", "Lead Programmer"]}/>
                
                <CardTeam
                    email={"00019618@uca.edu.sv"}
                    name={"Walter"}
                    lastName={"Morales"}
                    imgUrl={"https://ceii-s3.s3.amazonaws.com/users/202201132136568806.jpg"}
                    participation={["Lead Programmer", "Lead Programmer"]}/>
            </div>
        </div>
    </div>
);

export default Team;
