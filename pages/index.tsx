import { useQuery } from 'react-query';
import type { NextPage } from 'next';
import * as userService from '@services/users/userService';

const Home: NextPage = () => {
    const { data, isLoading, isError } = useQuery('users', () =>
        userService.getUsers()
    );

    if (isLoading) return <h1>Loading</h1>;

    if (isError) return <h1>Error</h1>;

    if (data) console.log(data);

    return <h1>Fetching</h1>;
};

export default Home;
