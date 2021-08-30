import "./styles.css"
import {Link} from "react-router-dom";
import Header from "../../components/common/Header";
import MobiliarioImage from "../../assets/images/mobiliario.jpeg"
import ReparacionImage from "../../assets/images/reparacion.jpeg"

const DecisionScreen = () => {
    return(
        <div className="decision-container">
            <div className="decision-section">
                <Header/>
                <div className="title-decision-section" style={{
                    "backgroundImage": `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
                    url(${MobiliarioImage})`
                }}>
                    <h1>Fabricación de mobiliario</h1>
                    <Link className="boton-ir" to="/home">Ver más</Link>
                </div>
                <div className="title-decision-section" style={{
                    "backgroundImage": `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
                    url(${ReparacionImage})`
                }}>
                    <h1>Reparación de mobiliario</h1>
                    <Link className="boton-ir">Ver más</Link>
                </div>
            </div>
        </div>
    )
}

export default DecisionScreen;