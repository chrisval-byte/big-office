import "./styles.css"
import StyledIcon from "../../../../components/common/StyledIcons";
import {faCoins} from "@fortawesome/fontawesome-free-solid"
import {faTools, faHandshake} from "@fortawesome/free-solid-svg-icons"

const OfferSection = () => {
    return(
        <div className="offer-container">
            <div className="offer-section">
                <div className="offer-title">
                    <h1 className="text-box">¿Por qué somos la mejor opción para realizar tu trabajo?</h1>
                </div>
                <div className="offer-icons">
                    <StyledIcon haveText={true}
                                text="Excelente servicio"
                                iconName={faTools}
                                iconColor="#FED403"
                                flexDirection="column"
                                className="icon-l"/>
                    <StyledIcon haveText={true}
                                text="Precios justos"
                                iconColor="#FED403"
                                iconName={faCoins}
                                flexDirection="column"
                                className="icon-l"/>
                    <StyledIcon haveText={true}
                                text="Buenas relaciones"
                                iconColor="#FED403"
                                iconName={faHandshake}
                                flexDirection="column"
                                className="icon-l"/>
                    <StyledIcon haveText={true}
                                text="Buenas relaciones"
                                iconColor="#FED403"
                                iconName={faHandshake}
                                flexDirection="column"
                                className="icon-l"/>
                </div>
            </div>
        </div>
    )
}

export default OfferSection;