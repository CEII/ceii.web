import { useRouter } from "next/router";

export default function id(){
    const router = useRouter();
        return (
            <div>
                <h1> Hola {router.query.id}</h1>
            </div>
         )
}