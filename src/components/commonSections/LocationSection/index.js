import "./styles.css"
import Header from "../../common/Header";
import MapContainer from "../../common/GoogleMaps";
import TextDecor from "../../common/TextDecor";

const LocationSection = () => {
    return(
        <div>
            <Header colorBlack={true}/>
            <div className="location-container">
                <div className="location-section">
                    <div className="titles-location">
                        <div>
                            <h1>Encuentranos</h1>
                            <TextDecor classSelected={"subtitle"}/>
                        </div>
                        <p>Necesitas llevar algun objeto a reparacion? No te preocupes, puedes llevarlo a nuestro
                            local y te apoyaremos en lo que necesites.</p>
                    </div>
                    <div className="map">
                        <MapContainer/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationSection
