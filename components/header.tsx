import Link from "next/link"

const headerStyles = {
    linkStyle: "px-5 py-4 hover:bg-gray-200 hover:font-semibold transition-all duration-200",
    navStyle: "flex justify-around text-lg",
    logoStyle: "mx-4 text-xl font-semibold",
    containerStyle: "flex justify-between items-center",
    headerStyle: "bg-gray-100"
}


interface HeaderProps{
    loggedIn:boolean
}

export default function Header({loggedIn}:HeaderProps){
    return(
        <header className={headerStyles.headerStyle}>
            <div className={headerStyles.containerStyle}>
                <p className={headerStyles.logoStyle}>Web Portfolio</p>
                <nav className={headerStyles.navStyle}>
                    <Link href={""} className={headerStyles.linkStyle}>Explorar</Link>
                    {
                    loggedIn ?
                        <>
                        <Link href={""} className={headerStyles.linkStyle}>Meu Portfolio</Link>
                        <Link href={""} className={headerStyles.linkStyle}>Meu Perfil</Link>
                        </> :
                        <>
                        <Link href={""} className="px-5 py-4 hover:bg-gray-200 hover:font-semibold transition-all duration-200">Entrar</Link>
                        <Link href={""} className={headerStyles.linkStyle}>Criar Conta</Link>
                        </>
                    }
                </nav>
            </div>
        </header>
    )
}