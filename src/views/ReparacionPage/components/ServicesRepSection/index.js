import "./styles.css"
import TextDecor from "../../../../components/common/TextDecor";
import CotizarButton from "../../../../components/common/CotizarButton";
import ServiceImages from "../../../../components/specific/ServiceImages";

const ServicesRepSection = () => {
    return(
        <div className="services-rep-container">
            <div className="services-rep-section">
                <div className="title-services">
                    <h1>Nuestros servicios</h1>
                    <TextDecor classSelected="subtitle"/>
                    <p>Tenemos nuestros servicios a tu alcance, hacemos lo imposible para satisfacer
                        tus necesidades y creenos, lo haremos. </p>
                    <CotizarButton/>
                </div>
                <div className="services-desc">
                    <ServiceImages title="Mobiliario" desc={
                        "Descrip"
                    }/>
                    <ServiceImages title="Sillas" desc={
                        "Desc"
                    }/>
                </div>
            </div>
        </div>
    )
}

export default ServicesRepSection