/* eslint-disable no-nested-ternary */
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { LayoutProps } from 'interfaces/props';
import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

const Layout: FC<LayoutProps> = ({ children, showFooter, showNav }) => (
    <main
        className={`relative max-w-screen overflow-y-auto ${showFooter && 'mb-[8vh]'} ${showNav && 'mt-[6vh]'} ${
            showFooter ? (showNav ? 'h-[86vh]' : 'h-[92vh]') : 'h-screen'
        }`}
    >
        <Toaster />
        {showNav && <Navbar />}
        {children}
        {showFooter && <Footer />}
    </main>
);

export default Layout;
