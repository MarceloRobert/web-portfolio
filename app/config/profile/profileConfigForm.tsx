"use client";
import UserProfile from "@/models/userProfile";
import { configStyles } from "../configStyles";
import { useForm } from "react-hook-form";
import axios from "axios";


export default function ProfileConfigForm(){
    const { register, handleSubmit, formState: { errors } } = useForm();

    // TODO: receber os dados do usuário a partir do banco
    // os dados do usuário devem ser definidos seguindo a classe
    let userTeste = new UserProfile({
        name: "Marcelo",
        email: "email",
        bio: "bio",
        photoUrl: "photo",
        linkedinUrl: "linkedin",
        githubUrl: "github",
        facebookUrl: "facebook",
        instagramUrl: "instagram",
        twitterUrl: "twitter",
    });

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
                placeholder="Fale um pouco sobre você"
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
            <div className="flex flex-col my-2">
                <label htmlFor="photoUrl">URL da foto de perfil</label>
                <input 
                type="url"
                id="photoUrl"
                placeholder="Insira a URL completa"
                defaultValue={userTeste.photoUrl}
                className={configStyles.inputStyle}
                {...register("photoUrl")}
                />
            </div>
            {/* TODO: inserir ícones das redes sociais */}
            <div className="flex flex-col my-2">
                <label htmlFor="linkedinUrl">Perfil no LinkedIn</label>
                <input 
                type="url"
                id="linkedinUrl"
                placeholder="Insira a URL completa"
                defaultValue={userTeste.linkedinUrl}
                className={configStyles.inputStyle}
                {...register("linkedinUrl")}
                />
            </div>
            <div className="flex flex-col my-2">
                <label htmlFor="githubUrl">Perfil no GitHub</label>
                <input 
                type="url"
                id="githubUrl"
                placeholder="Insira a URL completa"
                defaultValue={userTeste.githubUrl}
                className={configStyles.inputStyle}
                {...register("githubUrl")}
                />
            </div>
            <div className="flex flex-col my-2">
                <label htmlFor="facebookUrl">Perfil no Facebook</label>
                <input 
                type="url"
                id="facebookUrl"
                placeholder="Insira a URL completa"
                defaultValue={userTeste.facebookUrl}
                className={configStyles.inputStyle}
                {...register("facebookUrl")}
                />
            </div>
            <div className="flex flex-col my-2">
                <label htmlFor="instagramUrl">Perfil no Instagram</label>
                <input 
                type="url"
                id="instagramUrl"
                placeholder="Insira a URL completa"
                defaultValue={userTeste.instagramUrl}
                className={configStyles.inputStyle}
                {...register("instagramUrl")}
                />
            </div>
            <div className="flex flex-col my-2">
                <label htmlFor="twitterUrl" className="block">Perfil no X</label>
                <input 
                type="url"
                id="twitterUrl"
                placeholder="Insira a URL completa"
                defaultValue={userTeste.twitterUrl}
                className={configStyles.inputStyle}
                {...register("twitterUrl")}
                />
            </div>
            <button type="submit" className="text-white bg-green-600 hover:bg-green-700 rounded-md w-1/2 py-2 my-2">Salvar</button>
        </form>
    );
}