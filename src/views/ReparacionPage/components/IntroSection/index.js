import "./styles.css"
import ImageContainers from "../../../../components/common/ImageContainers";
import TextDecor from "../../../../components/common/TextDecor";
import CotizarButton from "../../../../components/common/CotizarButton";

const IntroSection = () => {
    return(
        <div className="rep-container">
            <div className="rep-section">
                <div className="intro-rep-section">
                    <div className="images-intro">
                        <ImageContainers title="Oficina"/>
                        <ImageContainers title="Hogar"/>
                        <ImageContainers title="Comercio"/>
                    </div>
                    <h1 className="title-rep">Necesitas renovar tu mobiliario</h1>
                    <TextDecor classSelected="first-title"/>
                    <h4 className="subtitle-rep">Nosotros lo arreglamos y lo dejamos como nuevo.</h4>
                    <CotizarButton size="md"/>
                </div>
            </div>
        </div>
    )
}

export default IntroSection