"use client"

import axios from "axios";
import Header from "@/components/header";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
import { getServerSideProps } from "next/dist/build/templates/pages";

type Props = {
    params : {
        pid: string // os parâmetros devem ser os mesmos nomes das subpastas
    }
}

const portfolioStyles = {
    contactCardStyle: "flex items-center justify-center w-1/3"
}

export default function PortfolioPID({params}:Props){
    // Utilizar o pid para acessar o banco de dados e retornar os dados
    // esses dados são um objeto json contendo informações do usuário e
    // dos projetos dele

    // exemplo de resposta do servidor
    let resposta = {
        "name": "Marcelo Robert Santos",
        "bio": "Marcelo é Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam deleniti repellat! Molestias aperiam enim incidunt omnis fuga libero error deleniti vitae quasi illo numquam quo, tempore ut, nostrum labore. ",
        "email": "emaildecontato@email.com",
        "githubUrl": "algo",
        "linkedinUrl": "Linkedin",
        "facebookUrl": "facebook",
        // por enquanto os campos nulos aqui precisam existir, mas no cenário real não é necessário retornar isso
        "twitterUrl": "null",
        "instagramUrl": null,
        "photoUrl": "https://avatars.githubusercontent.com/u/76781499?v=4",
        "projetos": [
            {
                "title": "Projeto 1",
                "description": "Descrição do projeto 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus neque ut possimus natus doloribus sit. Sint exercitationem architecto voluptatem unde doloremque nihil blanditiis eveniet ut quidem, eius minima molestiae quis?",
                "date": "01/01/2021",
                "photoUrl": "https://hub.packtpub.com/wp-content/uploads/2018/05/programming.jpg",
                "sourceUrl": "URL do código fonte do projeto"
            },
            {
                "title": "Projeto 2",
                "description": "Descrição do projeto 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus fuga obcaecati temporibus facilis! Soluta consequuntur a debitis at quam. Adipisci animi corrupti dolores porro rem labore, quae et totam nisi!",
                "authors": "Coautor1",
                "photoUrl": "https://idocode.com.br/wp-content/uploads/2021/07/pexels-luis-gomes-546819-2048x1360.jpg",
                "sourceUrl": "URL do código 2"
            },
            {
                "title": "Projeto 3",
                "description": "Descrição do projeto 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem pariatur id atque, fugiat quidem voluptatum est unde delectus explicabo illum incidunt neque rerum eos voluptatibus laudantium cum eligendi possimus maxime!",
                "authors": "Autor 1, Autor 2",
                "date": "Doze do doze",
                "photoUrl": "https://cdn.discordapp.com/attachments/931572225629384764/1096407746032705567/Screenshot_20230411-132201_YouTube.jpg?ex=657c42c8&is=6569cdc8&hm=07d29cbc27b32c05b2344dcf21ce2d9d55a1f2cc304d6c540d755de4bb28f04a&",
                "sourceUrl": "Projeto 3"
            }
        ]
    };

    // SWR é uma biblioteca para renderização client-side
    // Significa stale-while-revalidate
    // Acessa a url passada usando a função que é o segundo parâmetro
    // Essa função deve retornar os dados para cair na var data
    const {data, error, isLoading} = useSWR(
        `http://localhost:8080/api/projetos/getProjects/${params.pid}`,
        (url:string) => axios.get(url).then((res) => res.data)
    );

    if(isLoading)
        return (
            <p className="w-screen h-screen flex justify-center items-center">Carregando...</p>
        );
    else if (error){
        console.log(error);
        return(
            <>
            <p className="w-screen h-screen flex justify-center items-center">Houve um erro</p>
            </>
        );}
    else {
    console.log(data);
    return(
        <>
        <Header/>
        <main className="min-h-[90dvh]flex justify-center">
            {/* Informações do usuário */}
            <section className="mt-8 text-center max-w-lg mx-auto">
                <img className="mb-4 rounded-full w-32 h-32 inline-block"
                src={data[0]["usuario"]["fotoUrl"]} alt="Imagem de perfil da pessoa" />
                <h1 className="mb-2 text-4xl">{data[0]["usuario"]["username"]}</h1>
                <p>{data[0]["usuario"]["bio"]}</p>
            </section>

            {/* Projetos */}
            <section className="max-w-5xl mx-auto">
                <h2 className="text-center text-3xl my-16">Projetos</h2>
                {data.map((projeto:any, index:number) => {
                    return(
                    <div key={"projeto" + index} className={"grid md:grid-cols-2 grid-cols-1 mb-12 md:mx-4 mx-16" + (index & 1 ? " md:pr-16" : " md:pl-16")}>
                        <div className={"px-4 flex flex-col justify-evenly" + (index & 1 ? " md:order-1" : "")}>
                            <div>
                                <h3 className="text-2xl mb-4 underline">{projeto["titulo"]}</h3>
                                <p className="mb-2">{projeto["descricao"]}</p>
                            </div>
                            <div className="flex flex-col">
                                {projeto["data"] != null && projeto["data"] != ""?
                                    <p>{"Data de realização: " + projeto["data"]}</p>
                                : <></>}
                                {projeto["autores"] != null && projeto["autores"] != ""?
                                    <p>{"Coautores: " + projeto["autores"]}</p>
                                : <></>}
                                {projeto["linkRepositorio"] != null && projeto["linkRepositorio"] != ""?
                                    <p>{"Disponível em: " + projeto["linkRepositorio"]}</p>
                                : <></>}
                            </div>
                        </div>
                        <img className="w-full h-auto rounded-2xl" src={projeto["fotoUrl"] != null && projeto["fotoUrl"] != ""? projeto["fotoUrl"] : "https://hub.packtpub.com/wp-content/uploads/2018/05/programming.jpg"} alt="Imagem ilustrativa do projeto" />
                    </div>
                    );
                })}
            </section>

            {/* Contatos */}
            <section className="max-w-4xl mx-auto mb-16">
                <h2 className="text-center text-3xl mt-16 mb-8">Entre em contato</h2>

                <div className="flex flex-wrap justify-center">
                    <div className={portfolioStyles.contactCardStyle}>
                        <svg className="w-5 h-5 m-[6px] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331 331">
                        <path d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602 L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z" />
                        <polygon points="165.001,146.4 310.087,40.001 19.911,40 "/>
                        </svg>
                        <Link aria-label="Email link" href={"mailto:" + data[0]["usuario"]["email"]}>{data[0]["usuario"]["email"]}</Link>
                    </div>

                    {data[0]["usuario"]["github"] != null && data[0]["usuario"]["github"] != "" ? <div className={portfolioStyles.contactCardStyle}>
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                        </svg>
                        <Link href={data[0]["usuario"]["github"]}>Perfil no GitHub</Link>
                    </div> : <></>}

                    {data[0]["usuario"]["linkedin"] != null && data[0]["usuario"]["linkedin"] != "" ? <div className={portfolioStyles.contactCardStyle}>
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                        </svg>
                        <Link href={data[0]["usuario"]["linkedin"]}>Perfil no LinkedIn</Link>
                    </div> : <></>}

                    {/* {resposta["twitterUrl"] != null ? <div className={portfolioStyles.contactCardStyle}>
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                        </svg>
                        <Link href={resposta.twitterUrl??""}>Perfil no X</Link>
                    </div> : <></>} */}

                    {data[0]["usuario"]["facebook"] != null && data[0]["usuario"]["facebook"] != "" ? <div className={portfolioStyles.contactCardStyle}>
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                        </svg>
                        <Link href={data[0]["usuario"]["facebook"]}>Perfil no Facebook</Link>
                    </div>:<></>}

                    {data[0]["usuario"]["instagram"] != null && data[0]["usuario"]["instagram"] ? <div className={portfolioStyles.contactCardStyle}>
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20.145" cy="11.892" r="1" />
                        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                        </svg>
                        <Link href={data[0]["usuario"]["instagram"]}>Perfil no Instagram</Link>
                    </div> : <></>}
                </div>
            </section>
        </main>
        </>
    );}
}