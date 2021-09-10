import "./styles.css"
import ImageContainers from "../../../../components/common/ImageContainers";
import TextDecor from "../../../../components/common/TextDecor";
import CotizarButton from "../../../../components/common/CotizarButton";
import {useEffect, useState} from "react";

const IntroSection = () => {
    const [showImages, setShowImages] = useState(true)
    const [sizeButton, setSizeButton] = useState("")
    const [showDecor, setShowDecor] = useState(true)

    useEffect(() => {
        const size = window.screen.width

        const changeButtonSize = () => size > 1400 ? setSizeButton("l") :
            size > 992 && size < 1399 ? setSizeButton("md") :
                size < 991 && size > 440  ? setSizeButton("s"): setSizeButton("p")

        const showImagesInPage = () => size < 330 ? setShowImages(false) : setShowImages(true)

        const showDecorationText = () =>  size < 768 && size > 440 ? setShowDecor(false) :
            setShowDecor(true)

        changeButtonSize()
        showImagesInPage()
        showDecorationText()
    }, [])

    return(
        <div className="rep-container">
            <div className="rep-section">
                <div className="intro-rep-section">
                    {showImages ?
                        <div className="images-intro">
                            <ImageContainers title="Oficina"/>
                            <ImageContainers title="Hogar"/>
                            <ImageContainers title="Comercio"/>
                        </div>
                        :
                        <div/>
                    }
                    <h1 className="title-rep">Necesitas renovar tu mobiliario</h1>
                    {showDecor ? <TextDecor classSelected="first-title"/> : <div/>}
                    <h4 className="subtitle-rep">Nosotros lo arreglamos y lo dejamos como nuevo.</h4>
                    <CotizarButton size={sizeButton}/>
                </div>
            </div>
        </div>
    )
}

export default IntroSection