import "./styles.css"
import Header from "../../common/Header";
import TextDecor from "../../common/TextDecor";
import Form from "../../specific/Form";
import CallBox from "../../specific/CallBox";

const ContactSection = () => {
    return(
        <div>
            <Header withBackground={true}/>
            <div className="contact-container">
                <div className="contact-section">
                    <div className="contact-form">
                        <Form/>
                    </div>
                    <div className="contact-title">
                        <h1>Contacto</h1>
                        <TextDecor classSelected="subtitle"/>
                        <p>Contactanos para poder ayudarte con lo que necesites.
                            Sera un gusto poder atenderte</p>
                        <br/>
                        <p>Tambien puedes llamarnos:</p>
                        <CallBox/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection