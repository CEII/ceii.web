import { FunctionComponent } from 'react';
import Navbar from '@components/Navbar';

interface ILayoutProps {
    showNavbar: boolean;
    showFooter: boolean;
}

const Layout: FunctionComponent<ILayoutProps> = ({ children, showNavbar, showFooter }) => (
    <>
        {showNavbar && <Navbar />}
        <main className="p-4 md:py-6 md:px-10 lg:py-8 lg:px-12">
            { children }
        </main>
    </>
);

export default Layout;
