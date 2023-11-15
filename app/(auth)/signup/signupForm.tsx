"use client";

import { authStyles } from "../authStyles";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function SignupForm(){
    
    const { register, handleSubmit, formState } = useForm();

    async function signupSubmit(data:any) {
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/signup`, data);
    }

    return (
        <form>
            <div className="flex flex-wrap mb-4">
                <label 
                    className={authStyles.labelStyle} 
                    htmlFor="username">
                    Nome completo
                </label>
                <input 
                    id="username" 
                    type="text" 
                    className={authStyles.inputStyle}
                    placeholder="Seu nome" 
                    required/>
            </div>
            <div className="flex flex-wrap mb-4">
                <label 
                    className={authStyles.labelStyle} 
                    htmlFor="email">
                    Email
                </label>
                <input 
                    id="email" 
                    type="email" 
                    className={authStyles.inputStyle}
                    placeholder="Seu email" 
                    required/>
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
                    required/>
            </div>
            <div className="flex flex-wrap mb-4">
                <label 
                    className={authStyles.labelStyle} 
                    htmlFor="passwordConfirm">
                    Confirmar Senha
                </label>
                <input 
                    id="passwordConfirm" 
                    type="password" 
                    className={authStyles.inputStyle}
                    placeholder="Confirme sua senha" 
                    required/>
            </div>
            <div className="flex flex-wrap mt-6">
                <div className="w-full">
                <button className={authStyles.buttonStyle}>Cadastrar</button>
                </div>
            </div>
        </form>
    );
}