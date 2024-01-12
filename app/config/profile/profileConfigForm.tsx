"use client";
import UserProfile from "@/models/userProfile";
import { configStyles } from "../configStyles";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import useSWR from "swr";


export default function ProfileConfigForm(){
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [original, setOriginal] = useState();
    const [mensagem, setMensagem] = useState<string>();

    async function onSubmit(data: any) {
        // verifica se algum campo mudou para pedir a alteração no banco.
        // se nenhum campo mudou, não faz nada
        console.log(data);
        if(original != null){
            if( data["bio"] != original["bio"] ||
                data["fotoUrl"] != original["fotoUrl"] ||
                data["github"] != original["github"] ||
                data["linkedin"] != original["linkedin"] ||
                data["instagram"] != original["instagram"] ||
                data["facebook"] != original["facebook"]
            ){
                let resposta = await axios.post(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/usuario/updateUser`, data, {
                        headers: {
                            Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
                        }
                    }
                );
                console.log(resposta);
                setMensagem(resposta.data.toString());
            } else {
                console.log("Nada alterado");
            }

            if(data["password"] != null && data["password"] != ""){
                const objeto = {
                    "usuarioPasswordEditDTO": data["password"]
                }
                let resposta = await axios.post(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/usuario/updatePassword` + "?usuarioPasswordEditDTO=" + data["password"], objeto, {
                        headers: {
                            Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
                        }
                    }
                );
                setMensagem(resposta.data.toString());
            }
        }
    }

    const {data, error, isLoading} = useSWR(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/usuario/getUserData`,
        (url:string) => axios.get(url, {
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            setOriginal(res.data);
            return (res.data);
        }),
        // Opções para não revalidar automaticamente
        // (Não ficar refazendo os gets)
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );
    if(isLoading)
        return (
            <p className="w-screen h-screen flex justify-center items-center">Carregando...</p>
        );
    else if (error){
        console.log(error);
        return(
            <p className="w-screen h-screen flex justify-center items-center">Houve um erro</p>
        );}
    else {
    return(
        <>
        { mensagem != null?
        <p>{mensagem}</p> : <></>
        }
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col my-2">
                <label htmlFor="username">Nome</label>
                <input
                type="text"
                id="username"
                placeholder="Nome completo"
                defaultValue={data["username"]}
                className={configStyles.inputDisabledStyle}
                disabled={true}
            />
            </div>
            <div className="flex flex-col my-2">
                <label htmlFor="email">Email</label>
                <input 
                type="email"
                id="email"
                placeholder="Email"
                defaultValue={data["email"]}
                className={configStyles.inputDisabledStyle}
                disabled={true}
                />
            </div>
            <div className="flex flex-col my-2">
                <label htmlFor="bio">Sobre você</label>
                <textarea
                id="bio"
                placeholder="Fale um pouco sobre você"
                defaultValue={data["bio"]}
                className={configStyles.inputStyle}
                {...register("bio")}
            />
            </div>
            <div className="flex flex-col my-2">
                <label htmlFor="password">Senha</label>
                <input 
                type="password"
                id="password"
                placeholder="Alterar senha"
                className={configStyles.inputStyle}
                {...register("password")}
                />
            </div>
            {/* <div className="flex flex-col my-2">
                <label htmlFor="passwordConfirm">Confirmar senha</label>
                <input 
                type="password"
                id="passwordConfirm"
                placeholder="Confirmar senha"
                className={configStyles.inputStyle}
                {...register("passwordConfirm")}
                />
            </div> */}
            <hr className="my-8" />
            <div className="flex flex-col my-2">
                <label htmlFor="fotoUrl">URL da foto de perfil</label>
                <input 
                type="url"
                id="fotoUrl"
                placeholder="Insira a URL completa"
                defaultValue={data["fotoUrl"]}
                className={configStyles.inputStyle}
                {...register("fotoUrl")}
                />
            </div>
            {/* TODO: inserir ícones das redes sociais */}
            <div className="flex flex-col my-2">
                <label htmlFor="linkedin">Perfil no LinkedIn</label>
                <input 
                type="url"
                id="linkedin"
                placeholder="Insira a URL completa"
                defaultValue={data["linkedin"]}
                className={configStyles.inputStyle}
                {...register("linkedin")}
                />
            </div>
            <div className="flex flex-col my-2">
                <label htmlFor="github">Perfil no GitHub</label>
                <input 
                type="url"
                id="github"
                placeholder="Insira a URL completa"
                defaultValue={data["github"]}
                className={configStyles.inputStyle}
                {...register("github")}
                />
            </div>
            <div className="flex flex-col my-2">
                <label htmlFor="facebook">Perfil no Facebook</label>
                <input 
                type="url"
                id="facebook"
                placeholder="Insira a URL completa"
                defaultValue={data["facebook"]}
                className={configStyles.inputStyle}
                {...register("facebook")}
                />
            </div>
            <div className="flex flex-col my-2">
                <label htmlFor="instagram">Perfil no Instagram</label>
                <input 
                type="url"
                id="instagram"
                placeholder="Insira a URL completa"
                defaultValue={data["instagram"]}
                className={configStyles.inputStyle}
                {...register("instagram")}
                />
            </div>
            {/* <div className="flex flex-col my-2">
                <label htmlFor="twitterUrl" className="block">Perfil no X</label>
                <input 
                type="url"
                id="twitterUrl"
                placeholder="Insira a URL completa"
                defaultValue={userTeste.twitterUrl}
                className={configStyles.inputStyle}
                {...register("twitterUrl")}
                />
            </div> */}
            <button type="submit" className="text-white bg-green-600 hover:bg-green-700 rounded-md w-1/2 py-2 my-2">Salvar</button>
        </form>
        </>
    );}
}