import Header from "@/components/header";
import ProfileConfigForm from "./profileConfigForm";
import ConfigDrawer from "../configDrawer";

export const metadata = {
    title: 'Perfil - Configurações Web Portfolio',
    description: 'Alterações do seu perfil no Web Portfolio',
}


export default function Config(){
    return(
        <>
            <Header loggedIn={true}/>
            <div className="min-h-[90vh] flex flex-row">
                {/* Menu ao lado */}
                <ConfigDrawer/>

                {/* Configurações principais */}
                {/* Pegar os dados originais do usuário, colocar direto em um formulário. Se ao submeter o formulário os dados continuarem iguais, não há alteração, senão, verifica o que será mudado */}
                <main className="w-1/2 px-5 pt-5">
                    <h1 className="font-bold text-xl">Configurações de Perfil</h1>
                    <ProfileConfigForm></ProfileConfigForm>
                </main>
            </div>
        </>
    );
}