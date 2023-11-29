export const metadata = {
    title: 'Login - Web Portfolio',
    description: 'Realização do login para a sua conta no Web Portfolio',
}

import Header from "@/components/header";
import LoginForm from "./loginForm";
import Link from "next/link";
import { authStyles } from "../authStyles";

export default function Login(){
    return (
        <>
        <Header loggedIn={false}/>
        <main className="grow min-h-[90vh]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Título da página */}
                <h1 className="text-xl font-semibold text-center pb-8">Bem vindo de volta. Acesse sua conta abaixo.</h1>

                {/* Form de login */}
                <div className="max-w-md mx-auto">
                    <LoginForm/>
                    <div className="text-center mt-6">
                        <span className="opacity-80">Ainda não tem uma conta? </span> 
                        <Link href="/signup" className={authStyles.linkStyle}>Cadastre-se</Link>
                    </div>
                    {/* TODO: recuperar senha */}
                    {/* <div className="text-gray-800 text-center mt-2">
                        <span>Esqueceu sua senha? </span> 
                        <Link href="/login" className="text-green-600 hover:text-green-800 transition duration-200 ease-in-out">Recuperar</Link>
                    </div> */}
                </div>

            </div>
        </main>
        </>
    );
}