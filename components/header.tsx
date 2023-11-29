import Link from "next/link"

const headerStyles = {
    headerStyle: "bg-gray-200 dark:bg-gray-800 min-h-[10vh] flex justify-between items-center h-fit",
    linkStyle: "hover:font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 px-5 min-h-[10vh] flex items-center",
    navStyle: "flex justify-around items-center text-lg",
    logoStyle: "mx-4 text-xl font-semibold"
}


interface HeaderProps {
    loggedIn:boolean,
    headerClassName?:string,
}

export default function Header({loggedIn, headerClassName}:HeaderProps){
    return(
        <header className={headerClassName != null? headerClassName : headerStyles.headerStyle}>
                <Link href={"/"} className={headerStyles.logoStyle}>
                    Web Portfolio
                </Link>
                <nav className={headerStyles.navStyle}>

                    <Link href={""} className={headerStyles.linkStyle}>
                        Explorar
                    </Link>
                
                    {loggedIn ?
                        <Link href={"/portfolio"} className={headerStyles.linkStyle}>Meu Portfolio</Link>
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