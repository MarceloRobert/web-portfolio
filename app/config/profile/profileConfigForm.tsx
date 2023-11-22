"use client";
const UserProfile = require("@/models/userProfile");
import { configStyles } from "../configStyles";
import axios from "axios";
import { useForm } from "react-hook-form";


export default function ProfileConfigForm(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    // os dados do usuário devem ser definidos seguindo a classe
    let userTeste = new UserProfile(
        "Marcelo",
        "email@email.com",
        "123456",
        "Descrição"
    );

    function onSubmit(data: any) {
        // verifica se algum campo mudou para pedir a alteração no banco.
        // se nenhum campo mudou, não faz nada
        if(data.nome != userTeste.name || data.bio != userTeste.bio || data.email != userTeste.email){
            // axios.post();
            console.log("Algo alterado");
        } else {
            console.log("Nada alterado");
        }
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col my-2">
                <label htmlFor="nome">Nome completo</label>
                <input
                type="text"
                id="nome"
                placeholder="Nome completo"
                defaultValue={userTeste.name}
                className={configStyles.inputStyle}
                {...register("nome")}
            />
            </div>
            <div className="flex flex-col my-2">
                <label htmlFor="bio">Sobre você</label>
                <textarea
                id="bio"
                placeholder="Bio"
                defaultValue={userTeste.bio}
                className={configStyles.inputStyle}
                {...register("bio")}
            />
            </div>
            <div className="flex flex-col my-2">
                <label htmlFor="email">Email</label>
                <input 
                type="email"
                id="email"
                placeholder="Email"
                defaultValue={userTeste.email}
                className={configStyles.inputStyle}
                {...register("email")}
                />
            </div>
            <button type="submit" className="text-white bg-green-600 hover:bg-green-700 rounded-md w-1/2 py-2 my-2">Salvar</button>
        </form>
    );
}