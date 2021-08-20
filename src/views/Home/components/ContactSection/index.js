import "./styles.css"
import SectionTitle from "../../../../components/common/SectionTitles"
import StyledIcon from "../../../../components/common/StyledIcons";
import TextArea from "../../../../components/common/TextAreas";
import {faEnvelope} from "@fortawesome/fontawesome-free-solid"
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp,faFacebook} from "@fortawesome/free-brands-svg-icons"
import {useState} from "react"

const ContactSection = () => {
    const [showMessages, setShowMessages] = useState([false, false, false])
    return(
        <div className="contact-container">
            <div className="title-section">
                <SectionTitle text="Cuentanos en que podemos ayudarte" withMargin={false}/>
            </div>
            <div className="info-section">
                <div className="icons-section">
                    <div className="messages-container">
                        <StyledIcon haveText={true}
                                    text="4517-0603"
                                    iconName={faWhatsapp}
                                    iconColor={"#21CB43"}
                                    className={"icon-s"}
                                    flexDirection="row"
                                    onClick={() => setShowMessages([true, false, false])}
                        />
                        <TextArea bgColor="#21CB43" text="Enviar mensaje" displayBox={showMessages[0]}/>
                    </div>
                    <div>
                        <StyledIcon haveText={true}
                                    text="Big Office"
                                    iconName={faFacebook}
                                    className={"icon-s"}
                                    iconColor={"#1977F3"}
                                    flexDirection="row"
                                    onClick={() => setShowMessages([false, true, false])}
                        />
                        <TextArea bgColor="#1977F3" text="Enviar mensaje" displayBox={showMessages[1]}/>
                    </div>
                    <div>
                        <StyledIcon haveText={true}
                                    text="bigofficeservicios@gmail.com"
                                    flexDirection="row"
                                    className={"icon-s"}
                                    iconColor={"#EB4336"}
                                    iconName={faEnvelope}
                                    onClick={() => setShowMessages([false, false, true])}
                        />
                        <TextArea bgColor="#EB4336" text="Enviar mensaje" displayBox={showMessages[2]}/>
                    </div>
                    <div>
                        <StyledIcon
                            haveText={true}
                            text="2367-5164"
                            iconName={faPhoneAlt}
                            className={"icon-s"}
                            flexDirection="row"
                            onClick={() => setShowMessages([false, false, false])}
                        />
                    </div>
                </div>
                <div className="map-section"/>
            </div>
        </div>
    )
}

export default ContactSection;