import "./styles.css"
import {useState} from "react";
import StyledIcon from "../../common/StyledIcons";
import {faWhatsapp, faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/fontawesome-free-solid"
import db from "../../../database"

const Form = () => {
    const [iconSelected, setIconSelected] = useState("Facebook")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const sendInfo = (e) => {
        e.preventDefault()
        db.collection("clients").add({
            "name": name,
            "lastName": lastName,
            "phone": phone,
            "email": email
        }).then(() => console.log("Se agregaron los datos")).catch((e) => console.log("No se pudo:", e))
    }

    return(
        <form className="form">
            <h1>Envianos un mensaje</h1>
            <p>Selecciona el icono por donde quieres que nos pongamos en contacto contigo:</p>
            <div className="form-icons">
                <StyledIcon iconName={faFacebook}
                            className={"icon-s"}
                            onClick={() => setIconSelected("Facebook")}
                            iconColor={"#1977F3"}/>
                <StyledIcon iconName={faWhatsapp}
                            className={"icon-s"}
                            onClick={() => setIconSelected("Whatsapp")}
                            iconColor={"#15AC31"}/>
                <StyledIcon iconName={faEnvelope}
                            className={"icon-s"}
                            onClick={() => setIconSelected("correo")}
                            iconColor={"#EB4336"}/>
            </div>
            <p style={{marginBottom: 10}}>Enviar mensaje por
                <strong style={iconSelected === "Whatsapp" ?
                    {color : "#15AC31"} :
                    iconSelected === "correo" ?
                {color : "#EB4336"} :
                {color: "#1977F3"}}> {iconSelected}</strong>
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
                <textarea className="area" maxLength={300}/>
                <button className="send-button"
                        onClick={(e) => sendInfo(e)}
                        style={iconSelected === "Whatsapp" ?
                            {backgroundColor : "#15AC31"} :
                            iconSelected === "correo" ?
                                {backgroundColor : "#EB4336"} :
                                {backgroundColor: "#1977F3"}}>Enviar mensaje</button>
            </div>
        </form>
    )
}

export default Form