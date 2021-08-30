import "./styles.css"
import SectionTitles from "../../../../components/common/SectionTitles"
import TextDecor from "../../../../components/common/TextDecor";
import Imagen from "../../../../assets/images/imagen-car1.jpeg"

const AboutSection = ({id}) => {
    return(
        <div className="slider">
            <figure>
                <div className="imagen" style={{"backgroundColor": "#004"}}/>
                <div className="imagen" style={{"backgroundColor": "#eee"}}/>
                <div className="imagen" style={{"backgroundColor": "#aaa"}}/>
                <div className="imagen" style={{"backgroundColor": "#ffe"}}/>
            </figure>
        </div>
    )
}

export default AboutSection;