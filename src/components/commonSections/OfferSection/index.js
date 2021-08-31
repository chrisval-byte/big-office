import "./styles.css"
import TextDecor from "../../common/TextDecor";
import StyledIcon from "../../common/StyledIcons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

const OfferSection = () => {
    return(
        <div className="offer-container">
            <div className="offer-section">
                <div className="offer-title">
                    <h1>¿Por qué nosotros?</h1>
                    <TextDecor classSelected="subtitle-vertical"/>
                    <p>Por que somos capaces de hacer un buen trabajo incluyendo lo
                        que cualquier persona quiere:</p>
                </div>
                <div className="icons-offer-section">
                    <StyledIcon className="icon-l"
                                haveText={true}
                                text="Excelente calidad"
                                iconColor="#fed403"
                                flexDirection="column"
                                iconName={faWhatsapp}/>
                    <StyledIcon className="icon-l"
                                haveText={true}
                                text="Confianza"
                                iconColor="#fed403"
                                flexDirection="column"
                                iconName={faWhatsapp}/>
                    <StyledIcon className="icon-l"
                                haveText={true}
                                text="Precios justos"
                                iconColor="#fed403"
                                flexDirection="column"
                                iconName={faWhatsapp}/>
                    <StyledIcon className="icon-l"
                                haveText={true}
                                text="Buena relación"
                                iconColor="#fed403"
                                flexDirection="column"
                                iconName={faWhatsapp}/>
                </div>
            </div>
        </div>
    )
}

export default OfferSection