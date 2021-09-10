import "./styles.css"
import {Link} from "react-router-dom"
import StyledIcon from "../StyledIcons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="footer-section">
                <div className={"footer-enlaces"}>
                    <div className={"footer-enlaces-1"}>
                        <ul className={"footer-links-space"}>
                            <li><Link to={"/contacto"} className={"footer-links"}>Contacto</Link></li>
                            <li><Link to={"/nosotros"} className={"footer-links"}>Nosotros</Link></li>
                            <li><Link to={"/ubiacion"} className={"footer-links"}>Ubicacion</Link></li>
                        </ul>
                    </div>
                    <div className={"footer-enlaces-2"}>
                        <ul className={"footer-links-space"}>
                            <li><Link to={"/contacto"}
                                      className={"footer-links"}>Teléfono: 2367-5164</Link></li>
                            <li><Link to={"/nosotros"}
                                      className={"footer-links"}>Ubicación: Diagonal 6 16-79 zona 10</Link></li>
                            <li><a href={"https://www.google.com/"}>
                                <StyledIcon iconName={faFacebook} iconColor={"#fff"}/>
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className={"footer-titles"}>
                    <p>® Big Office Guatemala</p>
                </div>
            </div>
        </div>
    )
}

export default Footer