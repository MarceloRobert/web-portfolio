export const metadata = {
    title: 'Login - Web Portfolio',
    description: 'Realização do login para a sua conta no Web Portfolio',
}

import Header from "@/components/header";
import Link from "next/link";
import { authStyles } from "../authStyles";

export default function Login(){
    return (
        <div className="min-h-screen">
        <Header loggedIn={false}/>
        <main className="grow">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Título da página */}
                <h1 className="text-xl font-semibold text-center pb-8">Bem vindo de volta. Acesse sua conta abaixo.</h1>

                {/* Form de login */}
                <div className="max-w-md mx-auto">
                    <form>
                    <div className="flex flex-wrap mb-4">
                        <label className={authStyles.labelStyle} htmlFor="email">Email</label>
                        <input id="email" type="email" className={authStyles.inputStyle} placeholder="Seu email" required />
                    </div>
                    <div className="flex flex-wrap mb-4">
                        <label className={authStyles.labelStyle} htmlFor="password">Senha</label>
                        <input id="password" type="password" className={authStyles.inputStyle} placeholder="Sua senha" required />
                    </div>
                    {/* Para se manter conectado */}
                    {/* <div className="flex flex-wrap">
                        <input id="keepLogin" type="checkbox"/>
                        <label className="flex items-center pl-2 text-gray-800" htmlFor="keepLogin">Mantenha-me conectado</label>
                    </div> */}
                    <div className="flex flex-wrap mt-6">
                        <div className="w-full">
                        <button className="btn text-white bg-green-600 hover:bg-green-700 w-full py-2 rounded-md">Login</button>
                        </div>
                    </div>
                    </form>
                    <div className="text-gray-800 text-center mt-6">
                        <span>Ainda não tem uma conta? </span> 
                        <Link href="/signup" className="text-green-600 hover:text-green-800 transition duration-200 ease-in-out">Cadastre-se</Link>
                    </div>
                    {/* TODO: recuperar senha */}
                    {/* <div className="text-gray-800 text-center mt-2">
                        <span>Esqueceu sua senha? </span> 
                        <Link href="/login" className="text-green-600 hover:text-green-800 transition duration-200 ease-in-out">Recuperar</Link>
                    </div> */}
                </div>

            </div>
        </main>
        </div>
    );
}