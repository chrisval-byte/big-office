import "./style.css"

const Header = () => {
    return (
        <div className="flex-header">
            <div className="title-space">
                <h1>Big Office</h1>
            </div>
            <div>
                <ul className="list-links">
                    <li><p>Nosotros</p></li>
                    <li><p>Servicios</p></li>
                    <li><p>Contacto</p></li>
                    <li><p>Ubicación</p></li>
                </ul>
            </div>
        </div>
    )
}

export default Header