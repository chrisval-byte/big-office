import "./style.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="title-space">
                <h1 className="title">Big Office</h1>
            </div>
            <div className="link-space">
                <ul className="link-list">
                    <li><Link className="link" to="/about">Nosotros</Link></li>
                    <li><Link className="link" to="/services">Servicios</Link></li>
                    <li><Link className="link" to="/contact">Contacto</Link></li>
                    <li><Link className="link" to="/ubication">Ubicacion</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header