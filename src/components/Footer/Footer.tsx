import { FunctionComponent } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faGithubSquare, faDiscord } from "@fortawesome/free-brands-svg-icons";

const Footer : FunctionComponent = () => {
    return (
        <footer className="flex justify-between p-8">
            <div className="flex bg-white rounded-full">
                <a href="https://www.facebook.com/CEII.UCA" className="self-center">
                    <FontAwesomeIcon icon={faFacebookSquare} color="#033C71" className="social-icon-p"/>
                </a>
                <a href="https://www.instagram.com/ceii.uca/?hl=es-la" className="self-center">
                    <FontAwesomeIcon icon={faInstagram} color="#033C71" className="social-icon-p"/>
                </a>
                <a href="https://github.com/CEII" className="self-center">
                    <FontAwesomeIcon icon={faGithubSquare} color="#033C71" className="social-icon-p"/>
                </a>
                <a href="https://discord.gg/MAYVjVyZcC" className="self-center">
                    <FontAwesomeIcon icon={faDiscord} color="#033C71" className="social-icon-p mr-6"/>
                </a>
            </div>
            <p className="text-white font-sans font-bold self-center copyright-sizes">© CEII - 2021</p>
        </footer>
    )
}

export default Footer;