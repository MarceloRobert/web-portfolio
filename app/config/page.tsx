"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Config(){
    // A página base não conterá nada, apenas irá redirecionar
    // para a configuração de perfil. Idealmente o usuário não
    // irá chegar apenas em /config, e sim em alguma das sub-rotas

    const [loaded, setLoaded] = useState(false);
    const router = useRouter();

    if(!loaded){
        const token = sessionStorage.getItem("accessToken");
        if(token == null){
            console.log("Não autorizado");
            setLoaded(true);
            router.replace("/");
        } else {
            setLoaded(true);
            router.replace('/config/profile');
        }
    }
    return(loaded && <></>);
}