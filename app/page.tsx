import Header from "@/components/header"
import Landing from "./(default)/landing"

export default function App(){
    return (
        <>
        <Header loggedIn={false}></Header>
        <Landing></Landing>
        </>
    )
}