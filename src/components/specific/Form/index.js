import "./styles.css"
import {useState} from "react";
import StyledIcon from "../../common/StyledIcons";
import {faWhatsapp, faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/fontawesome-free-solid"

const Form = () => {
    const [iconSelected, setIconSelected] = useState("Facebook")
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
                    <input placeholder="Nombre:"/>
                    <input placeholder="Apellidos:"/>
                </div>
                <div className="input-container">
                    <input placeholder="Teléfono:"/>
                    <input placeholder="Correo:"/>
                </div>
                <textarea className="area" maxLength={300}/>
                <button className="send-button"
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