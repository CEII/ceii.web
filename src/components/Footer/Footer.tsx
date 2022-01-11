import { faDiscord, faFacebookSquare, faGithubSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
    return (
        <footer className="fixed h-[8vh] bottom-0 left-0 w-full flex items-center justify-around bg-primary">
            <div className="bg-white flex justify-evenly items-center rounded-full px-2 py-1 space-x-3 md:px-4 lg:space-x-5">
                <a href="https://www.facebook.com/CEII.UCA" className="flex items-center justify-center group">
                    <Icon
                        className="h-[1.75rem] w-[1.75rem!important] md:h-[2.25rem] md:w-[2.25rem!important] group-hover:text-accent group-hover:scale-110 smooth-transition"
                        icon={faFacebookSquare}
                        color="#033C71"
                    />
                </a>
                <a
                    href="https://www.instagram.com/ceii.uca/?hl=es-la"
                    className="flex items-center justify-center group"
                >
                    <Icon
                        className="h-[1.75rem] w-[1.75rem!important] md:h-[2.25rem] md:w-[2.25rem!important] group-hover:text-accent group-hover:scale-110 smooth-transition"
                        icon={faInstagram}
                        color="#033C71"
                    />
                </a>
                <a href="https://github.com/CEII" className="flex items-center justify-center group">
                    <Icon
                        className="h-[1.75rem] w-[1.75rem!important] md:h-[2.25rem] md:w-[2.25rem!important] group-hover:text-accent group-hover:scale-110 smooth-transition"
                        icon={faGithubSquare}
                        color="#033C71"
                    />
                </a>
                <a href="https://discord.gg/MAYVjVyZcC" className="flex items-center justify-center group">
                    <Icon
                        className="h-[1.75rem] w-[1.75rem!important] md:h-[2.25rem] md:w-[2.25rem!important] group-hover:text-accent group-hover:scale-110 smooth-transition"
                        icon={faDiscord}
                        color="#033C71"
                    />
                </a>
            </div>
            <p className="text-white font-sans font-bold self-center copyright-sizes">
                © CEII - {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;
