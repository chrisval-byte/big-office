import "./styles.css"
import SectionTitle from "../../../../components/common/SectionTitles"
import StyledIcon from "../../../../components/common/StyledIcons";
import Input from "../../../../components/common/Input";
import {faEnvelope} from "@fortawesome/fontawesome-free-solid"
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp,faFacebook} from "@fortawesome/free-brands-svg-icons"
import {useState} from "react"
import TextDecor from "../../../../components/common/TextDecor";

const ContactSection = ({id}) => {
    const [viaComunicacion, setViaComunicacion] = useState("Facebook")
    const [colorPalabra, setColorPalabra] = useState("#1977F3")
    return(
        <div className="contact-container" id={id}>
            <div className="contact-section">
                <div className="contact-box">
                    <div className="titles-contact-box">
                        <div className="titles-space-box">
                            <h2>Envíanos un mensaje</h2>
                            <p>Selecciona el ícono por donde quieres que nos pongamos en contacto contigo:</p>
                        </div>
                    </div>
                    <div className="icons-section">
                        <div className="icon-align">
                            <StyledIcon haveText={false}
                                        iconName={faFacebook}
                                        iconColor={"#1977F3"}
                                        className={"icon-s"}
                                        onClick={() => {
                                            setViaComunicacion("Facebook")
                                            setColorPalabra("#1977F3")
                                        }}
                            />
                            <StyledIcon haveText={false}
                                        iconName={faWhatsapp}
                                        iconColor={"#21CB43"}
                                        className={"icon-s"}
                                        onClick={() => {
                                            setViaComunicacion("Whatsapp")
                                            setColorPalabra("#21CB43")
                                        }}
                            />
                            <StyledIcon haveText={false}
                                        iconName={faEnvelope}
                                        iconColor={"#EB4336"}
                                        className={"icon-s"}
                                        onClick={() => {
                                            setViaComunicacion("Correo electronico")
                                            setColorPalabra("#EB4336")
                                        }}
                            />
                        </div>
                    </div>
                    <div className="text-icon-container">
                        <div className="text-icon-section">
                            <p style={{"marginRight": 10}}>Enviar mensaje por: </p>
                            <p style={{"color": colorPalabra}}>{viaComunicacion}</p>
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="input-section">
                            <div className="input-row">
                                <Input inputText="Nombre:"/>
                                <Input inputText="Apellido:"/>
                            </div>
                            <div className="input-row">
                                <Input inputText="Número:"/>
                                <Input inputText="Correo:"/>
                            </div>
                            <Input inputText="Mensaje:" message={true}/>
                        </div>
                    </div>
                    <div className="button-container">
                        <div className="button-section">
                            <button className="button-send-message"
                                    style={{"backgroundColor": colorPalabra}}
                            >Enviar mensaje</button>
                        </div>
                    </div>
                </div>
                <div className="title-contact-section">
                    <div style={{"width": 300}}>
                        <SectionTitle text="CON TAC TO"/>
                    </div>
                    <TextDecor classSelected="sub-title"/>
                    <h3 className="subtitle-contact-section">
                        Contactanos para poder ayudarte con lo que necesites. Sera un gusto poder atenderte</h3>
                    <div className="number-box">
                        <div className="number-text-box">
                            <StyledIcon haveText={false}
                                        iconName={faPhoneAlt}
                                        iconColor={"#000"}
                                        className={"icon-s"}
                            />
                            <h3 className="description-number-box">Tambien puedes llamarnos:</h3>
                        </div>
                        <h2>2367-5164</h2>
                    </div>
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1629782346">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"/>
                </svg>
            </div>
        </div>
    )
}

export default ContactSection;