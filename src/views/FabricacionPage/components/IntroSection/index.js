import "./styles.css"
import TextDecor from "../../../../components/common/TextDecor";
import CotizarButton from "../../../../components/common/CotizarButton";
import CardsImages from "../../../../components/specific/CardsImages";
import {useEffect, useState} from "react";

const IntroSection = () => {
    const [showImages, setShowImages] = useState(true)
    const [sizeButton, setSizeButton] = useState("")
    const [showDecor, setShowDecor] = useState(true)

    useEffect(() => {
        const screenSize = window.screen.width

        const changeSizeButton = () => screenSize > 1400 ? setSizeButton("l") :
                screenSize > 992 && screenSize < 1399 ? setSizeButton("md") :
                    screenSize < 991 && screenSize > 440  ? setSizeButton("s"): setSizeButton("p")

        const changeNumberOfImages = () => screenSize < 330 ? setShowImages(false) :
            setShowImages(true)

        const changeShowDecorationOrNot = () => screenSize < 991 && screenSize > 440 ? setShowDecor(false) :
                setShowDecor(true)

        changeSizeButton()
        changeNumberOfImages()
        changeShowDecorationOrNot()
    }, [])

    return(
        <div className="intro-fab-container">
            <div className="intro-fab-section">
                <div className="title-fab">
                    <h1>Imaginamos, diseñamos y creamos.</h1>
                    {showDecor ?  <TextDecor classSelected="subtitle"/> : <div/>}
                    <p>Esto eso, lo hacemos.
                        <strong>Y nadie lo hace como nosotros.</strong>
                    </p>
                    <CotizarButton size={sizeButton}/>
                </div>
                {showImages ?
                    <div className="images-fab">
                        <CardsImages/>
                    </div>
                    :
                    <div/>
                }
            </div>
        </div>
    )
}

export default IntroSection