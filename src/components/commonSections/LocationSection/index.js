import "./styles.css"
import Header from "../../common/Header";
import MapContainer from "../../common/GoogleMaps";
import Footer from "../../common/Footer";

const LocationSection = () => {
    return(
        <div>
            <Header colorBlack={true}/>
            <div className={"map"}>
                <div className={"map-title"}>
                    <h2>Nos puedes encontrar en nuestro local:</h2>
                </div>
                <MapContainer/>
            </div>
            <Footer/>
        </div>
    )
}

export default LocationSection
