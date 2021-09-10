import "./styles.css"
import {useEffect, useState} from "react";
import StyledIcon from "../../common/StyledIcons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/fontawesome-free-solid"
import db from "../../../database"

const Form = () => {
    const [changeIconSize, setChangeIconSize] = useState("icon-m")
    const [iconSelected, setIconSelected] = useState("Whatsapp")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        const size = window.screen.width
        const changeIconSize = () => size < 992 && size > 400? setChangeIconSize("icon-form-m") :
            size <= 400 ? setChangeIconSize("icon-form-s") : setChangeIconSize("icon-m")

        changeIconSize()
    }, [])

    const saveClient = () => {
        db.collection("clients").add({
            "name": name,
            "lastName": lastName,
            "phone": phone,
            "email": email
        }).then(() => console.log("save")).catch((e) => console.log("Error", e))
    }

    const saveMessage = () => {
        db.collection("messages").add({
            "name": name,
            "lastName": lastName,
            "phone": phone,
            "message": message,
            "contactWay": iconSelected
        }).then(() => console.log("message save")).catch((e) => console.log("Error", e))
    }

    const sendInfo = (e) => {
        e.preventDefault()
        saveClient()
        saveMessage()
    }

    return(
        <form className="form">
            <div className={"form-section"}>
                <h1>Envianos un mensaje</h1>
                <p>Selecciona el icono por donde quieres que nos pongamos en contacto contigo:</p>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div className="form-icons">
                        <StyledIcon iconName={faWhatsapp}
                                    className={changeIconSize}
                                    onClick={() => setIconSelected("Whatsapp")}
                                    iconColor={"#15AC31"}/>
                        <StyledIcon iconName={faEnvelope}
                                    className={changeIconSize}
                                    onClick={() => setIconSelected("Correo")}
                                    iconColor={"#EB4336"}/>
                    </div>
                </div>
                <p style={{marginBottom: 10}}>Enviar mensaje por
                    <strong style={iconSelected === "Correo" ?
                        {color : "#EB4336"} : {color : "#15AC31"}}> {iconSelected}</strong>
                </p>
                <div className="inputs-container">
                    <div className="input-container">
                        <input placeholder="Nombre:"
                               onChange={(e) => setName(e.target.value)}/>
                        <input placeholder="Apellidos:"
                               onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className="input-container">
                        <input placeholder="Teléfono:"
                               onChange={(e) => setPhone(e.target.value)}/>
                        <input placeholder="Correo:"
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <textarea className="area" maxLength={300}
                              onChange={(e) => setMessage(e.target.value)}/>
                    <button className="send-button"
                            onClick={(e) => sendInfo(e)}
                            style={iconSelected === "Correo" ?
                                {backgroundColor : "#EB4336"} :
                                {backgroundColor : "#15AC31"}}>Enviar mensaje</button>
                </div>
            </div>
        </form>
    )
}

export default Form