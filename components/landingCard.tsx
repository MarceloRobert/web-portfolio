export default function LandingCard({titulo, texto}:{titulo:string, texto:string}){
    return (
        <div className="rounded-lg border border-transparent px-5 py-4 mx-3 my-2 transition-colors hover:border-gray-300 bg-gray-300 bg-opacity-80 hover:bg-gray-200 hover:dark:border-neutral-700 dark:bg-neutral-800 hover:dark:bg-neutral-800/30">
            <h3 className={`mb-3 text-2xl font-semibold`}>
                {titulo}
            </h3>
            <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
                {texto}
            </p>
        </div>
    );
}