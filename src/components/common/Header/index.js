import "./style.css"

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-section">
                <h1>Big Office</h1>
                <div>
                    <ul className="list-links">
                        <li><a href="#about">Nosotros</a></li>
                        <li><a href="#services">Servicios</a></li>
                        <li><a href="#contact">Contacto</a></li>
                        <li><a>Ubicación</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header