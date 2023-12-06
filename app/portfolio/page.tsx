"use client"
import { useRouter } from "next/navigation";

export default function Portfolio(){
    // Essa página deve retornar ou uma mensagem de erro
    // ou deve ser redirecionada para um portfolio aleatório que o banco permitir

    const router = useRouter();
    router.replace('/portfolio/Marcelo Robert Santos');
    return(<></>);
}