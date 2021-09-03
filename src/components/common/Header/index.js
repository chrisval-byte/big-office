import "./style.css"
import {Link} from "react-router-dom";

const Header = ({withBackground, colorBlack}) => {
    return (
        <div>
            <div className="header-container"
                 style={withBackground && colorBlack?
                     {position: "relative", backgroundColor: "black", color: "white"}
                     :
                     withBackground && !colorBlack ?
                         {position: "relative", color: "black", backgroundColor: "#FAFAFA"}
                         :
                     {position: "absolute", color: "white"}}
            >
                <div className="header-section">
                    <div className="title-header">
                        <h1>Big Office</h1>
                    </div>
                    <div className="links-header">
                        <ul className="link-list">
                            <li><Link to="/contacto" className={colorBlack ? "link" : "link-white"}>Contacto</Link></li>
                            <li><Link to="/ubicacion" className={colorBlack ? "link" : "link-white"}>Ubicación</Link></li>
                            <li><Link to="/nosotros" className={colorBlack ? "link" : "link-white"}>Nosotros</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header