import "./styles.css"
import StyledIcon from "../../../../components/common/StyledIcons";
import {faCoins} from "@fortawesome/fontawesome-free-solid"
import {faTools, faHandshake} from "@fortawesome/free-solid-svg-icons"

const OfferSection = () => {
    return(
        <div className="offer-container">
            <div className="offer-section">
                <div className="offer-title">
                    <div className="blue-box">
                        <h1 className="text-box">Lo que ofrece-mos</h1>
                        <p className="text-description">Por qué somos lo que estas buscando para tu trabajo</p>
                    </div>
                </div>
                <div className="offer-icons">
                    <div className="offer-icons-row">
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
                    </div>
                    <div className="offer-icons-row">
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
                    </div>
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1629429941">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"/>
                </svg>
            </div>
        </div>
    )
}

export default OfferSection;