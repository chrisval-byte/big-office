import "./style.css"

const Header = ({withBackground}) => {
    return (
        <div>
            {withBackground ?
                <div className="header-container-with-background">
                    <div className="header-section-with-background">
                        <h1>Big Office</h1>
                        <div>
                            <ul className="list-links-with-background">
                                <li><a href="#contact">Contacto</a></li>
                                <li><a>Ubicación</a></li>
                                <li><a>Nosotros</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                :
                <div className="header-container-without-background">
                    <div className="header-section-without-background">
                        <h1>Big Office</h1>
                        <div>
                            <ul className="list-links-without-background">
                                <li><a href="#contact">Contacto</a></li>
                                <li><a>Ubicación</a></li>
                                <li><a>Nosotros</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Header