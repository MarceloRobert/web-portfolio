"use client"
import Project from "@/models/project";
import { useForm, useFieldArray, Control } from "react-hook-form";
import { useState } from "react";
import { configStyles } from "../configStyles";

type formValues = {
    projetosFA: Project[]
}

export default function PortfolioConfigForm (){
    const { control, register, handleSubmit, formState: { errors } } =
        useForm<formValues>({
            defaultValues: {
                "projetosFA": []
            }
        });
    
    // os métodos importados são os disponíveis, é possível inserir outras funcionalidades futuramente como o ```move``` por exemplo
    const { fields, append, replace, remove } = useFieldArray({
        name: "projetosFA", // projetosFieldArray
        control,
    });

    // Ao criar o usuário, um projeto será vinculado à ele
    // e deverá ser pego no banco
    // TODO: pegar os projetos com o banco ao entrar nessa página
    // em seguida usar replace(projetos) para inicializar os campos do forms
    // caso a lista de projetos estiver vazia, um elemento em branco deve ser colocado
    // let projetos : Project[] = [];

    const [loaded, setLoaded] = useState(false);
    if(!loaded){
        append(new Project({}));
        setLoaded(true);
    }

    function onSubmit(data: any) {
        console.log(data["projetosFA"]);
        // TODO: passar para JSON e enviar para o banco
    }

    return(
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
                        defaultValue={field.title}
                        className={configStyles.inputStyle}
                        {...register(`projetosFA.${index}.title`)}
                        required
                    />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor={`description${index.toString()}`}>Descrição</label>
                        <textarea
                        id={`description${index.toString()}`}
                        placeholder="O que é esse projeto?"
                        defaultValue={field.description}
                        className={configStyles.inputStyle}
                        {...register(`projetosFA.${index}.description`)}
                        required
                    />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor={`sourceUrl${index.toString()}`}>Link do repositório ou página</label>
                        <input 
                        type="text"
                        id={`sourceUrl${index.toString()}`}
                        placeholder="URL completa do repositório"
                        defaultValue={field.sourceUrl}
                        className={configStyles.inputStyle}
                        {...register(`projetosFA.${index}.sourceUrl`)}
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor={`photoUrl${index.toString()}`}>Link da imagem</label>
                        <input 
                        type="text"
                        id={`photoUrl${index.toString()}`}
                        placeholder="URL completa da imagem"
                        defaultValue={field.photoUrl}
                        className={configStyles.inputStyle}
                        {...register(`projetosFA.${index}.photoUrl`)}
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor={`date${index.toString()}`}>Data de realização</label>
                        <input 
                        type="date"
                        id={`date${index.toString()}`}
                        defaultValue={field.date}
                        className={configStyles.inputStyle}
                        {...register(`projetosFA.${index}.date`)}
                        />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor={`authors${index.toString()}`}>Co-autores</label>
                        <input 
                        type="text"
                        id={`authors${index.toString()}`}
                        placeholder="Separe com vírgula. Caso não haja, deixe em branco."
                        defaultValue={field.authors}
                        className={configStyles.inputStyle}
                        {...register(`projetosFA.${index}.authors`)}
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
    );
}