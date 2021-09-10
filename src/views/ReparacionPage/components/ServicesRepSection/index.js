import "./styles.css"
import TextDecor from "../../../../components/common/TextDecor";
import CotizarButton from "../../../../components/common/CotizarButton";
import ServiceImages from "../../../../components/specific/ServiceImages";
import {useEffect, useState} from "react";

const ServicesRepSection = () => {
    const [sizeButton, setSizeButton] = useState("")
    const [pullApart, setPullApart] = useState(false)

    useEffect(() => {
        const size = window.screen.width
        const changeSizeButton = () => size > 1400 ? setSizeButton("l") :
            size > 992 && size < 1399 ? setSizeButton("md") :
                size < 991 && size > 440  ? setSizeButton("s"): setSizeButton("p")

        const changeServiceImages = () => size >= 2000 ? setPullApart(true) : setPullApart(false)

        changeSizeButton()
        changeServiceImages()
    }, [])

    return(
        <div className="services-rep-container">
            <div className="services-rep-section">
                <div className="title-services">
                    <h1>Nuestros servicios</h1>
                    <TextDecor classSelected="subtitle"/>
                    <p>Tenemos nuestros servicios a tu alcance, hacemos lo imposible para satisfacer
                        tus necesidades y creenos, lo haremos. </p>
                    <CotizarButton size={sizeButton}/>
                </div>
                <div className="services-desc">
                    <ServiceImages
                        pull_apart={pullApart}
                        title="Mobiliario" desc={
                        "Descrip"
                    }/>
                    <ServiceImages
                        title="Sillas"
                        pull_apart={pullApart}
                        desc={
                        "Desc"
                    }/>
                </div>
            </div>
        </div>
    )
}

export default ServicesRepSection