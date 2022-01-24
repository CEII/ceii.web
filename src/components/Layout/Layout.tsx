/* eslint-disable no-nested-ternary */
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { LayoutProps } from 'interfaces/props';
import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

const Layout: FC<LayoutProps> = ({ children, showFooter, showNav }) => (
    <main className="flex flex-col overflow-y-auto min-h-[92vh]">
        <Toaster />
        {showNav && <Navbar />}
        {children}
        {showFooter && <Footer />}
    </main>
);

export default Layout;
