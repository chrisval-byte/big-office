import "./styles.css"
import ImageContainers from "../../../../components/common/ImageContainers";
import TextDecor from "../../../../components/common/TextDecor";
import CotizarButton from "../../../../components/common/CotizarButton";
import {useEffect, useState} from "react";

const IntroSection = () => {
    const [showImages, setShowImages] = useState(true)
    const [sizeButton, setSizeButton] = useState("")
    const [showDecor, setShowDecor] = useState(true)
    const imagenComercio = "https://firebasestorage.googleapis.com/v0/b/big-office-86197.appspot.com/o/reparacion%2Freparacion-comercio-1400.jpg?alt=media&token=d439298d-4679-4fac-b8a3-36630a025adf"
    const imagenComercio2 = "https://firebasestorage.googleapis.com/v0/b/big-office-86197.appspot.com/o/reparacion%2Freparacion-comercio-1200.jpg?alt=media&token=0e07c78e-6d9b-43b0-9492-bb1234b4c757"
    const imagenComercio3 = "https://firebasestorage.googleapis.com/v0/b/big-office-86197.appspot.com/o/reparacion%2Freparacion-comercio-992.jpg?alt=media&token=262fa6f2-7278-4eab-b147-359c8298dcf6"
    const imagenComercio4 = "https://firebasestorage.googleapis.com/v0/b/big-office-86197.appspot.com/o/reparacion%2Freparacion-comercio-768.jpg?alt=media&token=28c74d61-11ab-49dc-aa5b-0a658619c592"
    const imagenComercio5 = "https://firebasestorage.googleapis.com/v0/b/big-office-86197.appspot.com/o/reparacion%2Freparacion-comercio-576.jpg?alt=media&token=2edb8a62-c2ba-4224-b9bb-e9a83d02774c"
    const imagenComercio6 = "https://firebasestorage.googleapis.com/v0/b/big-office-86197.appspot.com/o/reparacion%2Freparacion-comercio-330.jpg?alt=media&token=30aba85a-f715-4672-b199-efdcb931f1e8"

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
                            <ImageContainers
                                title="Comercio"
                                imageUrl1={imagenComercio}
                                imageUrl2={imagenComercio2}
                                imageUrl3={imagenComercio3}
                                imageUrl4={imagenComercio4}
                                imageUrl5={imagenComercio5}
                                imageUrl6={imagenComercio6}
                            />
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