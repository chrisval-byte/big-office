import "./styles.css"
import {useState} from "react";
import {useHistory} from "react-router-dom";
import db from "../../../database";

const Login = () => {
    const [user, setUser] = useState("")
    const [pwd, setPwd] = useState("")
    const history = useHistory()

    const login = (e) => {
        e.preventDefault()
        db.collection("admins").get().then((docs) => {
            docs.forEach((admin) => {
                const userDB = admin.get("user")
                const pwdDB = admin.get("pwd")

                if(userDB !== user || pwdDB !== pwd){
                    alert("Datos ingresados incorrectamente.")
                }else{
                    localStorage.setItem("user", user)
                    localStorage.setItem("pwd", pwd)
                    return history.go(0)
                }
            })
        })
    }

    return(
        <div className="access-container">
            <div className="access-section">
                <div>
                    <h2>Inicio de sesión</h2>
                    <p>Inicia sesión como administrador para entrar a tus mensajes.</p>
                </div>
                <div className="access-section-inputs">
                    <input className="input-access"
                           onChange={(e) => setUser(e.target.value)}
                           placeholder={"Usuario:"}/>
                    <input className="input-access"
                           onChange={(e) => setPwd(e.target.value)}
                           placeholder={"Contraseña:"} type={"password"}/>
                </div>
                <button onClick={(e) => login(e)}>Iniciar sesión</button>
            </div>
        </div>
    )
}

export default Login
