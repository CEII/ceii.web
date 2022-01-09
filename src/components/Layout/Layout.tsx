import Footer from '@components/Footer';
import { LayoutProps } from 'interfaces/props';
import { FC } from 'react';

const Layout: FC<LayoutProps> = ({ children, showFooter }) => (
    <main className="h-[92vh] mb-[8vh]">
        {children}
        {showFooter && <Footer />}
    </main>
);

export default Layout;
