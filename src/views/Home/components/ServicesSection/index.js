import "./styles.css"
import SectionTitle from "../../../../components/common/SectionTitles"
import TextDecor from "../../../../components/common/TextDecor";
import Pictures from "../../../../components/common/Pictures";

const ServicesSection = ({id}) => {
    return(
        <div className="service-container" id={id}>
            <div className="service-section">
                <div className="titles-service-section">
                    <div className="title-service-section">
                        <SectionTitle text="SER VI CIOS"/>
                        <TextDecor classSelected="sub-title"/>
                    </div>
                    <h3 className="subtitle-service-section">
                        Estas son las áreas en las que nos especializamos</h3>
                    <button className="btn-cotizar">Cotizar</button>
                </div>
                <div className="pictures-container">
                    <Pictures textSubtitle="Sillas"
                              width={366} height={445}
                              marginBottom={20}
                              text={true}
                    />
                    <Pictures textSubtitle="Muebles"
                              width={366}
                              height={445}
                              text={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;