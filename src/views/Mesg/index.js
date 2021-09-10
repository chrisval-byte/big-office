import Login from "./Login";
import MesgAccess from "./MesgAccess";
import {useEffect, useState} from "react";

const Mesg = () => {
    const [isLogged, setIsLogged] = useState(false)
    useEffect(() => {
        const user = sessionStorage.getItem("user")
        const pwd = sessionStorage.getItem("pwd")
        if(user && pwd){
            setIsLogged(true)
        }
    }, [])

    return(
        <div>
            {isLogged ? <MesgAccess/> : <Login/>}
        </div>
    )
}

export default Mesg