export const metadata = {
    title: 'Cadastro - Web Portfolio',
    description: 'Realização do cadastro para a sua conta no Web Portfolio',
}

import Header from "@/components/header";
import Link from "next/link";
import { authStyles } from "../authStyles";

export default function Signup(){
    return (
        <div className="min-h-screen">
        <Header loggedIn={false}/>
        <main className="grow">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-12 md:pt-26 md:pb-20">

                {/* Título da página */}
                <h1 className="text-xl font-semibold text-center pb-8">Seja bem vindo na nossa comunidade!<br></br> Crie já sua conta abaixo!</h1>

                {/* Form de login */}
                <div className="max-w-md mx-auto">
                    <form>
                    <div className="flex flex-wrap mb-4">
                        <label className={authStyles.labelStyle} htmlFor="username">Nome completo</label>
                        <input id="username" type="text" className={authStyles.inputStyle} placeholder="Seu nome" required />
                    </div>
                    <div className="flex flex-wrap mb-4">
                        <label className={authStyles.labelStyle} htmlFor="email">Email</label>
                        <input id="email" type="email" className={authStyles.inputStyle} placeholder="Seu email" required />
                    </div>
                    <div className="flex flex-wrap mb-4">
                        <label className={authStyles.labelStyle} htmlFor="password">Senha</label>
                        <input id="password" type="password" className={authStyles.inputStyle} placeholder="Sua senha" required />
                    </div>
                    <div className="flex flex-wrap mb-4">
                        <label className={authStyles.labelStyle} htmlFor="password">Confirmar Senha</label>
                        <input id="password" type="password" className={authStyles.inputStyle} placeholder="Confirme sua senha" required />
                    </div>
                    <div className="flex flex-wrap mt-6">
                        <div className="w-full">
                        <button className="btn text-white bg-green-600 hover:bg-green-700 w-full py-2 rounded-md">Cadastrar</button>
                        </div>
                    </div>
                    </form>
                    <div className="text-gray-800 text-center mt-6">
                        <span>Já possui uma conta? </span> 
                        <Link href="/login" className="text-green-600 hover:text-green-800 transition duration-200 ease-in-out">Realizar login</Link>
                    </div>
                </div>

            </div>
        </main>
        </div>
    );
}