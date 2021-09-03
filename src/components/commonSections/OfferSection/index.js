import "./styles.css"
import TextDecor from "../../common/TextDecor";
import StyledIcon from "../../common/StyledIcons";
import {faMedal, faCoins, faHandshake, faUserCheck} from "@fortawesome/free-solid-svg-icons";

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
                                iconName={faMedal}/>
                    <StyledIcon className="icon-l"
                                haveText={true}
                                text="Confianza"
                                iconColor="#fed403"
                                flexDirection="column"
                                iconName={faUserCheck}/>
                    <StyledIcon className="icon-l"
                                haveText={true}
                                text="Precios justos"
                                iconColor="#fed403"
                                flexDirection="column"
                                iconName={faCoins}/>
                    <StyledIcon className="icon-l"
                                haveText={true}
                                text="Buena relación"
                                iconColor="#fed403"
                                flexDirection="column"
                                iconName={faHandshake}/>
                </div>
            </div>
        </div>
    )
}

export default OfferSection