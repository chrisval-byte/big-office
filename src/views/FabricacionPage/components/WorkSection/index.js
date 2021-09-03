import "./styles.css"
import TextDecor from "../../../../components/common/TextDecor";
import CotizarButton from "../../../../components/common/CotizarButton";

const TrabajoSection = () => {
    return(
        <div className="work-container">
            <div className="work-section">
                <div className="process-section">
                    <div className="process-box"/>
                    <div className="process-box"/>
                    <div className="process-box"/>
                </div>
                <div className="work-titles-box">
                    <h1 className="work-title">Nuestra forma de trabajar</h1>
                    <TextDecor classSelected="subtitle"/>
                    <p className="work-desc">Trabajamos de esta manera para facilitarte el trabajo y
                        poder entregarte un producto de mejor calidad.</p>
                    <CotizarButton/>
                </div>
            </div>
        </div>
    )
}

export default TrabajoSection