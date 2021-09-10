import "./styles.css"
import TextDecor from "../../../../components/common/TextDecor";
import CotizarButton from "../../../../components/common/CotizarButton";
import {useEffect, useState} from "react";

const TrabajoSection = () => {
    const [sizeButton, setSizeButton] = useState("")

    useEffect(() => {
        const size = window.screen.width
        const changeSizeButton = () => size > 1400 ? setSizeButton("l") :
            size > 992 && size < 1399 ? setSizeButton("md") :
                size < 991 && size > 440  ? setSizeButton("s"): setSizeButton("p")

        changeSizeButton()
    }, [])

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
                    <CotizarButton size={sizeButton}/>
                </div>
            </div>
        </div>
    )
}

export default TrabajoSection