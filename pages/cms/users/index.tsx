import Layout from '@components/Layout';
import type { NextPage } from 'next';
import UserCard from '../../../src/components/UserCard/UserCard';

const Users: NextPage = () => (
    <Layout showNav>
        <div className="flex flex-col justify-center items-center">
            <div>
                <h1 className="text-white">Bienvenido @Walter{/* user */}</h1>
                <p className="text-white">Esta es la información que tenemos sobre ti</p>
            </div>

            <UserCard />
        </div>
    </Layout>
);
export default Users;
