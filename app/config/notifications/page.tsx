import Header from "@/components/header";
import ConfigDrawer from "../configDrawer";

export const metadata = {
    title: 'Notificações - Configurações Web Portfolio',
    description: 'Alterações das notificações no Web Portfolio',
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
                    <h1 className="font-bold text-xl">Configurações de notificações</h1>
                    <p>Notificações</p>
                </main>
            </div>
        </>
    );
}