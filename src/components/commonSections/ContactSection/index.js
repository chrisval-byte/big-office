import "./styles.css"
import Header from "../../common/Header";
import TextDecor from "../../common/TextDecor";
import Form from "../../specific/Form";
import CallBox from "../../specific/CallBox";
import {useEffect, useState} from "react";
import Footer from "../../common/Footer";

const ContactSection = () => {
    const [showTextDecoration, setShowTextDecoration] = useState(true)

    useEffect(() => {
        const size = window.screen.width
        const changeShowTextDecoration = () => size < 767 ? setShowTextDecoration(false) :
            setShowTextDecoration(true)

        changeShowTextDecoration()
    }, [])

    return(
        <div>
            <Header withBackground={true}/>
            <div className="contact-container">
                <div className="contact-section">
                    <div className="contact-form">
                        <Form/>
                    </div>
                    <div className="contact-title">
                        {showTextDecoration ?
                            <div>
                                <h1>Contacto</h1>
                                <TextDecor classSelected="subtitle"/>
                                <p>Contactanos para poder ayudarte con lo que necesites.
                                    Sera un gusto poder atenderte</p>
                                <br/>
                            </div>
                            : <div/>
                        }
                        <div className={"phone-box"}>
                            <p>Tambien puedes llamarnos:</p>
                            <CallBox/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactSection