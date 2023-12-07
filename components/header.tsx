"use client"
import Link from "next/link"
import { useState } from "react";

const headerStyles = {
    headerStyle: "bg-gray-200 dark:bg-gray-800 min-h-[10vh] flex justify-between items-center h-fit",
    linkStyle: "hover:font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 px-5 min-h-[10vh] flex items-center",
    navStyle: "flex justify-around items-center text-lg",
    logoStyle: "mx-4 text-xl font-semibold"
}

export default function Header(){
    const [loggedIn, setLoggedin] = useState(false);
    const [loaded, setLoaded] = useState(false);

    if(!loaded){
        // if(window !== undefined){
        //     if(sessionStorage.getItem("accessToken") != null){
        //         setLoggedin(true);
        //     }
        // }
        setLoggedin(true);
        setLoaded(true);
    }

    return(
        <header className={headerStyles.headerStyle}>
                <Link href={"/"} className={headerStyles.logoStyle}>
                    Web Portfolio
                </Link>
                <nav className={headerStyles.navStyle}>

                    <Link href={"/portfolio"} className={headerStyles.linkStyle}>
                        Explorar
                    </Link>
                
                    {loggedIn ?
                        <Link href={"/portfolio/teste"} className={headerStyles.linkStyle}>Meu Portfolio</Link>
                        :
                        <Link href={"/login"} className={headerStyles.linkStyle}>Entrar</Link>}
                
                    {loggedIn ?
                        <Link href={"/config/profile"} className={headerStyles.linkStyle}>Meu Perfil</Link>
                        :
                        <Link href={"/signup"} className={headerStyles.linkStyle}>Criar Conta</Link>}
                </nav>
        </header>
    )
}