"use client"
import { useRouter } from "next/navigation";

export default function Config(){
    // A página base não conterá nada, apenas irá redirecionar
    // para a configuração de perfil. Idealmente o usuário não
    // irá chegar apenas em /config, e sim em alguma das sub-rotas

    const router = useRouter();
    router.replace('/config/profile');
    return(<></>);
}