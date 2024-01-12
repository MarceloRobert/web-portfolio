"use client"
import Project from "@/models/project";
import { useForm, useFieldArray, Control } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { configStyles } from "../configStyles";
import axios from "axios";
import useSWR from "swr";

type formValues = {
    projetosFA: Project[]
}

export default function PortfolioConfigForm (){
    const router = useRouter();
    
    const { control, register, handleSubmit, formState: { errors } } =
    useForm<formValues>({
        defaultValues: {
            "projetosFA": []
        }
    });
    
    // Os métodos importados são os disponíveis, é possível inserir outras funcionalidades futuramente como o ```move``` por exemplo
    const { fields, append, remove } = useFieldArray({
        name: "projetosFA", // projetosFieldArray
        control,
    });

    const [mensagem, setMensagem] = useState<string>();
    async function onSubmit(data: any) {
        console.log("Projetos do formulário:");
        console.log(data["projetosFA"]);

        for(const indice in data["projetosFA"]){
            const projeto = data["projetosFA"][indice];
            // Se não possui id então é um projeto novo, adiciona no banco
            if(projeto.id == null){
                console.log(`Salvar ${projeto["titulo"]}`);
                console.log(projeto.toJson());
                let resposta = await axios.post(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projetos/addProject`,
                    projeto.toJson(),
                    {
                        headers: {
                            Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
                            'Content-Type': 'application/json',
                        },
                    }
                );
                setMensagem(resposta.data.toString());
            } else
            // Se possuir id então verifica se houve alteração
            // quanto ao original para update e delete
            if (original != null) {

                // Realiza as updates se algo mudou
                let resposta;
                if (original[indice]["titulo"] != projeto["titulo"] ||
                    original[indice]["descricao"] != projeto["descricao"] ||
                    original[indice]["fotoUrl"] != projeto["fotoUrl"] ||
                    original[indice]["github"] != projeto["github"] ||
                    original[indice]["linkedin"] != projeto["linkedin"] ||
                    original[indice]["instagram"] != projeto["instagram"] ||
                    original[indice]["facebook"] != projeto["facebook"]
                ){
                    console.log(`Editar ${projeto["titulo"]}`);
                    console.log(projeto.toJsonWithID());
                    resposta = await axios.post(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}/projetos/updateProject`,
                        projeto.toJsonWithID(),
                        {
                            headers: {
                                Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
                                'Content-Type': 'application/json',
                            },
                        }
                    );
                }
                setMensagem(resposta?.data.toString());
            }
        }

        // Realiza os deletes se algum id sumiu
        if(original != null){
            for(const indice in (original as Object)){
                const projOriginal = original[indice];
                let apagarIndiceAtual = true;
                for(const indice2 in data["projetosFA"]){
                    const projForm = data["projetosFA"][indice2];
                    if(projForm["id"] == projOriginal["id"]){
                        apagarIndiceAtual = false;
                        break;
                    }
                }
                if(apagarIndiceAtual){
                    console.log(`Apagar ${projOriginal["titulo"]} de indice ${projOriginal["id"]}`);
                    let resposta = await axios.delete(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/projetos/deleteProject`,
                        {
                            data: {
                                "projectId": projOriginal["id"],
                            },
                            headers: {
                                Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
                                'Content-Type': 'application/json',
                            },
                        }
                    );
                    setMensagem(resposta?.data.toString());
                }
            }
        }
        // recarrega a página para atualizar os ids
        // router.replace("/config/portfolio");
    }

    // Ao criar o usuário, um projeto será vinculado à ele
    // e deverá ser pego no banco
    const [original, setOriginal] = useState();
    const {data, error, isLoading} = useSWR(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/projetos/getProjects`,
        (url:string) => axios.get(url, {
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            setOriginal(res.data);
            for(const index in res.data){
                const projeto = res.data[index];
                append(new Project(projeto));
            }
            if(res.data.length == 0){
                append(new Project({}));
            }
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
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => {
                return(
                <div key={field.id}>
                    <div className="flex flex-col my-2">
                        <label htmlFor={`titulo${index.toString()}`}>
                            Título ou nome do projeto
                        </label>
                        <input
                        type="text"
                        id={`titulo${index.toString()}`}
                        placeholder="Título"
                        defaultValue={field["titulo"]}
                        className={configStyles.inputStyle}
                        {...register(`projetosFA.${index}.titulo`)}
                        required
                    />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor={`descricao${index.toString()}`}>Descrição</label>
                        <textarea
                        id={`descricao${index.toString()}`}
                        placeholder="O que é esse projeto?"
                        defaultValue={field["descricao"]}
                        className={configStyles.inputStyle}
                        {...register(`projetosFA.${index}.descricao`)}
                        required
                    />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor={`linkRepositorio${index.toString()}`}>Link do repositório ou página</label>
                        <input 
                        type="text"
                        id={`linkRepositorio${index.toString()}`}
                        placeholder="URL completa do repositório"
                        defaultValue={field["linkRepositorio"]}
                        className={configStyles.inputStyle}
                        {...register(`projetosFA.${index}.linkRepositorio`)}
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor={`fotoUrl${index.toString()}`}>Link da imagem</label>
                        <input 
                        type="text"
                        id={`fotoUrl${index.toString()}`}
                        placeholder="URL completa da imagem"
                        defaultValue={field["fotoUrl"]}
                        className={configStyles.inputStyle}
                        {...register(`projetosFA.${index}.fotoUrl`)}
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor={`data${index.toString()}`}>Data de realização</label>
                        <input 
                        type="date"
                        id={`data${index.toString()}`}
                        defaultValue={field["data"]?.toString().substring(0, 10)}
                        className={configStyles.inputStyle}
                        {...register(`projetosFA.${index}.data`)}
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor={`autores${index.toString()}`}>Co-autores</label>
                        <input 
                        type="text"
                        id={`autores${index.toString()}`}
                        placeholder="Separe com vírgula. Caso não haja, deixe em branco."
                        defaultValue={field["autores"]?.toString()}
                        className={configStyles.inputStyle}
                        {...register(`projetosFA.${index}.autores`)}
                        />
                    </div>

                    <button type="button" className="block text-white bg-red-600 hover:bg-red-700 bg-opacity-50 rounded-md w-1/2 py-2 my-2"
                    onClick= {() => {
                        remove(index);
                    }}>
                        Remover projeto
                    </button>
                    <hr className="my-6"/>
                </div>
            );
            })}
            <button type="button" className="block text-white bg-blue-600 hover:bg-blue-700 rounded-md w-1/2 py-2 my-2"
            onClick= {() => {
                if(fields.length < 5){
                    append(new Project({}));
                }
            }}>
                Adicionar outro projeto
            </button>

            <button type="submit" className="block text-white bg-green-600 hover:bg-green-700 rounded-md w-1/2 py-2 my-2">
                Salvar
            </button>
        </form>
        {mensagem != null && mensagem != ""? <p>{mensagem}</p>
        : <></>}
        </>
    );
    }
}