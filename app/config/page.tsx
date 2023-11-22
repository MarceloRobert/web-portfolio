"use client"
import { useRouter } from "next/navigation";

export default function Config(){
    const router = useRouter();
    router.replace('/config/profile');
    return(<></>);
}