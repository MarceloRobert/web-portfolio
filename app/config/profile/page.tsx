"use client"

import Header from "@/components/header";
import ProfileConfigForm from "./profileConfigForm";
import ConfigDrawer from "../../../components/configDrawer";
import { useState } from "react";
import { useRouter } from "next/navigation";

// export const metadata = {
//     title: 'Perfil - Configurações',
//     description: 'Alterações do seu perfil no Web Portfolio',
// }


export default function Config(){
    const [loaded, setLoaded] = useState(false);
    const router = useRouter();

    if(!loaded){
        const token = sessionStorage.getItem("accessToken");
        if(token == null){
            console.log("Não autorizado");
            setLoaded(true);
            router.replace("/");
        } else
            setLoaded(true);
    }
    return(
        loaded &&
        <>
            <Header/>
            <div className="min-h-[90vh] flex flex-row">
                {/* Menu ao lado */}
                <ConfigDrawer/>

                {/* Configurações principais */}
                {/* Pegar os dados originais do usuário, colocar direto em um formulário. Se ao submeter o formulário os dados continuarem iguais, não há alteração, senão, verifica o que será mudado */}
                <main className="min-w-[450px] w-1/2 px-5 pt-5">
                    <h1 className="font-bold text-2xl">Configurações de Perfil</h1>
                    <ProfileConfigForm/>
                </main>
            </div>
        </>
    );
}