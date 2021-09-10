import "./styles.css"
import TextDecor from "../../common/TextDecor";
import StyledIcon from "../../common/StyledIcons";
import {faMedal, faCoins, faHandshake, faUserCheck} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";

const OfferSection = () => {
    const [iconSize, setIconSize] = useState("l")
    const [showDecoration, setShowDecoration] = useState(true)

    useEffect(() => {
        const size = window.screen.width
        const changeIconSize = () => size <= 991 && size >= 576 ? setIconSize("icon-m") :
            size <= 575 && size >= 0 ? setIconSize("icon-s") : setIconSize("icon-l")

        const changeShowDecor = () =>  size <= 575 ? setShowDecoration(false) : setShowDecoration(true)

        changeIconSize()
        changeShowDecor()
    }, [])

    return(
        <div className="offer-container">
            <div className="offer-section">
                <div className="offer-title">
                    <h1>¿Por qué nosotros?</h1>
                    {showDecoration ? <TextDecor classSelected="subtitle-vertical"/> : <div/>}
                    <p>Por que somos capaces de hacer un buen trabajo incluyendo lo
                        que cualquier persona quiere:</p>
                </div>
                <div className="icons-offer-section">
                    <StyledIcon className={iconSize}
                                haveText={true}
                                text="Excelente calidad"
                                iconColor="#fed403"
                                flexDirection="column"
                                iconName={faMedal}/>
                    <StyledIcon className={iconSize}
                                haveText={true}
                                text="Confianza"
                                iconColor="#fed403"
                                flexDirection="column"
                                iconName={faUserCheck}/>
                    <StyledIcon className={iconSize}
                                haveText={true}
                                text="Precios justos"
                                iconColor="#fed403"
                                flexDirection="column"
                                iconName={faCoins}/>
                    <StyledIcon className={iconSize}
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