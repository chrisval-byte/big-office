import "./styles.css"
import {useState} from "react";
import SectionTitle from "../../../../components/common/SectionTitles"
import Picture from "../../../../components/common/Pictures"
import SillasImage from "../../../../assets/images/sillas-image.png"
import MueblesImage from "../../../../assets/images/muebles-image.jpeg"
import ProyectosImage from "../../../../assets/images/proyectos-image.jpeg"

const ServicesSection = () => {
    const [showDesc, setShowDesc] = useState([false, false, false])
    return(
        <div className="service-container">
            <div className="service-section">
                <div className="title-section">
                    <SectionTitle text="Servicios"/>
                    <h3 className="subtitle">Estas son las áreas en las que nos especializamos:</h3>
                </div>
                <div className="picture-container">
                    <Picture className="picture-class"
                             textSubtitle="Sillas"
                             image={SillasImage}
                             text={showDesc[0]}/>
                    <Picture className="picture-class"
                             textSubtitle="Muebles"
                             image={MueblesImage}
                             text={showDesc[1]}/>
                    <Picture className="picture-class"
                             textSubtitle="Proyectos"
                             image={ProyectosImage}
                             text={showDesc[2]}/>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;