import Header from "@/components/header";
import ConfigDrawer from "../../../components/configDrawer";
import PortfolioConfigForm from "./portfolioConfigForm";

export const metadata = {
    title: 'Portfolio - Configurações',
    description: 'Alterações no seu portfolio web',
}

export default function Config(){
    return(
        <>
            <Header/>
            <div className="min-h-[90vh] flex flex-row">
                {/* Menu ao lado */}
                <ConfigDrawer/>

                {/* Configurações principais */}
                {/* Pegar os dados originais do usuário, colocar direto em um formulário. Se ao submeter o formulário os dados continuarem iguais, não há alteração, senão, verifica o que será mudado */}
                <main className="w-1/2 px-5 pt-5">
                    <h1 className="font-bold text-2xl mb-5">Configurações do Portfolio</h1>
                    <p className="text-xl underline">Orientações gerais:</p>
                    <p className="mb-8">Insira no máximo 5 projetos, as imagens dos projetos devem ser enviadas como link para um local público. Incentivamos o uso de imagens para o seu projeto, mesmo que seja do código; Caso não coloque nenhuma, a imagem padrão será utilizada. O título e descrição dos projetos são obrigatórios.</p>
                    <PortfolioConfigForm/>
                </main>
            </div>
        </>
    );
}