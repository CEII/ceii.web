import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Profile: NextPage = () => {
    const router = useRouter();
    return (
    <div>
        <h1> Perfil personal ruta:/users/profile/{router.query.id}:</h1>
    </div>
    );
}
export default Profile;