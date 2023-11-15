export const metadata = {
    title: 'Cadastro - Web Portfolio',
    description: 'Realização do cadastro para a sua conta no Web Portfolio',
}

import Header from "@/components/header";
import Link from "next/link";
import SignupForm from "./signupForm";
import { authStyles } from "../authStyles";

export default function Signup(){
    return (
        <>
        <Header loggedIn={false}/>
        <main className="grow min-h-[90vh]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-12 md:pt-26 md:pb-20">

                {/* Título da página */}
                <h1 className="text-xl font-semibold text-center pb-8">Seja bem vindo na nossa comunidade!<br></br> Crie já sua conta abaixo!</h1>

                {/* Form de signup */}
                <div className="max-w-md mx-auto">
                    <SignupForm/>
                    <div className="text-gray-800 text-center mt-6">
                        <span>Já possui uma conta? </span> 
                        <Link href="/login" className="text-green-600 hover:text-green-800 transition duration-200 ease-in-out">Realizar login</Link>
                    </div>
                </div>

            </div>
        </main>
        </>
    );
}