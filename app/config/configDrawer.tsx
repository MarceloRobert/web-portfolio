import Link from "next/link";
import { configStyles } from "./configStyles";

export default function ConfigDrawer(){
    return(
        <aside className="bg-gray-300 dark:bg-gray-700 min-w-[20%]">
            <p className="pl-5 py-5 text-xl font-semibold">Configurações</p>
            <ul>
                <li>
                    <Link href={'/config/profile'} className={configStyles.linkStyle}>Perfil</Link>
                </li>
                <li>
                    <Link href={'/config/notifications'}  className={configStyles.linkStyle}>Notificações</Link>
                </li>
                <li>
                    <Link href={''} className={configStyles.linkStyle}>Conexões</Link>
                </li>
            </ul>
        </aside>
    );
}