import Header from "@/components/header"
import LandingCard from "@/components/landingCard"
import Link from "next/link"

export default function App(){
    return (
        <>
        <Header/>
        <main className="flex min-h-[90vh] flex-col items-center justify-between p-24">
            {/* Título */}
            <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <h1 className="text-5xl font-bold pb-5">Web Portfolio</h1>
                <h2 className="text-xl font-semibold text-center">Apresente o seu trabalho e a si mesmo no mundo online.</h2>
            </div>

            {/* Descrição */}
            <div className="max-w-lg mt-8 text-center">
                <p>Use o portfolio online como um website personalizado para guardar seus melhores projetos e tenha um link próprio para enviar suas candidaturas e ter maiores chances de sucesso!</p>
            </div>

            {/* Benefícios */}
            <section className="my-24 grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-3 lg:text-left">
                <LandingCard
                    titulo={"Elegante"}
                    texto={"Design de website moderno para se manter atualizado entre os candidatos."}
                />

                <LandingCard
                    titulo={"Fácil de usar"}
                    texto={"Com apenas alguns cliques você já poderá compartilhar seu mais novo portfolio."}
                />

                <LandingCard
                    titulo={"Personalizado"}
                    texto={"Insira apenas as informações que você possui, sem se preocupar com espaços em branco."}
                />
            </section>

            {/* Explorar */}
            <section className="w-1/2 max-w-md text-center flex flex-col">
                <Link href={'/signup'} className="text-white text-xl bg-green-600 hover:bg-green-700 w-full py-2 rounded-md hover:font-semibold transition-all duration-200">
                    Crie sua conta agora
                </Link>

                <span className="my-2">ou</span>

                <Link href={'/portfolio'} className="text-white text-xl bg-green-600 hover:bg-green-700 w-full py-2 rounded-md hover:font-semibold transition-all duration-200">
                    Explore portfolios reais
                </Link>
            </section>
            </main>

            <footer className="flex items-center lg:flex-row flex-col justify-between mt-20 py-4 px-8 lg:space-y-0 space-y-6" 
            style={{background: `linear-gradient(10deg,
            rgba(150, 150, 200, 0.3) 0%,
            rgba(0, 0, 0, 0.3) 50%,
            rgba(150, 150, 200, 0.3) 100%
            )`}}>
                <div className="lg:text-end text-center">
                    <p>Criado por Marcelo Robert Santos</p>
                    <p>e Lucas Batista Pereira</p>
                </div>

                <p>
                    UNIFEI - Universidade Federal de Itajubá
                </p>

                <div className="lg:text-left text-center">
                    <p>XDES03 - Programação Web</p>
                    <p>Docente Phyllipe</p>
                </div>
            </footer>
        </>
    )
}