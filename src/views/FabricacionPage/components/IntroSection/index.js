import "./styles.css"
import TextDecor from "../../../../components/common/TextDecor";
import CotizarButton from "../../../../components/common/CotizarButton";
import CardsImages from "../../../../components/specific/CardsImages";

const IntroSection = () => {
    return(
        <div className="intro-fab-container">
            <div className="intro-fab-section">
                <div className="title-fab">
                    <h1>Imaginamos, diseñamos y creamos.</h1>
                    <TextDecor classSelected="subtitle"/>
                    <p>Esto eso, lo hacemos.
                        <strong>Y nadie lo hace como nosotros.</strong>
                    </p>
                    <CotizarButton size="md"/>
                </div>
                <div className="images-fab">
                    <CardsImages/>
                </div>
            </div>
        </div>
    )
}

export default IntroSection