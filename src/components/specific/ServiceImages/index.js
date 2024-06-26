import "./styles.css"
import TextDecor from "../../common/TextDecor";

const ServiceImages = ({title, desc, pull_apart}) => {
    return(
        <div className="service-image-container" style={pull_apart ? {marginRight: 170} : {}}>
            <div className="service-image"/>
            <div className="image-service-desc">
                <h2>{title}</h2>
                <TextDecor classSelected="subtitle"/>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ServiceImages