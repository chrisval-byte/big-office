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
                         colorBlack?
                         {position: "absolute", color: "black"}:
                     {position: "absolute", color: "white"}}
            >
                <div className="header-section">
                    <div className="title-header">
                        <Link className="title-header-link"
                              style={withBackground && colorBlack ? {color: "white"}
                                  : withBackground && !colorBlack ? {color: "black"}
                                      : colorBlack? {color: "black"}: {color: "white"}}
                              to={"/"}>Big Office</Link>
                    </div>
                    <div className="links-header">
                        <ul className="link-list">
                            <li>
                                <Link to="/contacto"
                                      className={withBackground && colorBlack ? "link"
                                          : withBackground && !colorBlack ? "link-white" :
                                              colorBlack ? "link-absolute-color-black"
                                              : "link-white-color-black"}>Contacto</Link>
                            </li>
                            <li>
                                <Link to="/ubicacion"
                                      className={withBackground && colorBlack ? "link"
                                    : withBackground && !colorBlack ? "link-white" :
                                              colorBlack ? "link-absolute-color-black"
                                        : "link-white-color-black"}>Ubicación</Link>
                            </li>
                            <li>
                                <Link to="/nosotros"
                                      className={withBackground && colorBlack ? "link"
                                    : withBackground && !colorBlack ? "link-white" :
                                              colorBlack ? "link-absolute-color-black"
                                        : "link-white-color-black"}>Nosotros</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header