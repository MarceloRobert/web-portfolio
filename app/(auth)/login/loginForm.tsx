"use client";
// os componentes do next são renderizados no servidor,
// porém o formulário precisa guardar um estado próprio
// para isso ele precisa usar o cliente, mas se usasse
// o cliente na página toda, não daria pra usar algumas
// funcionalidades de servidor do next como o exportMetadata

import { authStyles } from "../authStyles";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginForm(){
    
    const { register, handleSubmit, formState } = useForm();
    const router = useRouter();
    
    async function loginSubmit(data:any) {
        let resposta = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signin`, data);

        if(resposta.status === 200) {
            sessionStorage.setItem("accessToken", resposta.data.accessToken);
            sessionStorage.setItem("uid", resposta.data.id);
            router.push("/config/profile");
        }
    }

    return (
        <form onSubmit={handleSubmit(loginSubmit)}>
            <div className="flex flex-wrap mb-4">
                <label className={authStyles.labelStyle} htmlFor="username">Nome de usuário</label>
                <input 
                    id="username"
                    type="text"
                    className={authStyles.inputStyle}
                    placeholder="Seu nome" 
                    required 
                    {...register("username")}/>
            </div>
            <div className="flex flex-wrap mb-4">
                <label 
                    className={authStyles.labelStyle}
                    htmlFor="password">
                    Senha
                </label>
                <input 
                    id="password" 
                    type="password" 
                    className={authStyles.inputStyle} 
                    placeholder="Sua senha" 
                    required 
                    {...register("password")} />
            </div>
            {/* Para se manter conectado */}
            {/* <div className="flex flex-wrap">
                <input id="keepLogin" type="checkbox"/>
                <label className="flex items-center pl-2 text-gray-800" htmlFor="keepLogin">Mantenha-me conectado</label>
            </div> */}
            <div className="flex flex-wrap mt-6">
                <div className="w-full">
                <button className={authStyles.buttonStyle}>Login</button>
                </div>
            </div>
        </form>
    );
}