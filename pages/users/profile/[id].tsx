import type {NextPage} from 'next';
import {useRouter} from 'next/router';

const id: NextPage = () => {
    const router = useRouter();
    <div>
        <h1> perfil personal ruta:/users/profile/{router.query.id}:</h1>
    </div>
}
export default id;