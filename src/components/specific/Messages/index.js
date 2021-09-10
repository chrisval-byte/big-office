import "./styles.css"
import {Link} from "react-router-dom";

const Messages = ({clientName, clientMsg, iconSelected}) => {
    return(
        <div className="mesg-box">
            <div className="info-mesg">
                <h2>{clientName}</h2>
                <p>{clientMsg}</p>
            </div>
            <div className="footer-mesg">
                <p>Via contacto: {iconSelected}</p>
                <div className="footer-buttons">
                    <Link className="button-msg"
                          to={"/whatsapp"}
                          style={{color: "black", backgroundColor: "#fed403"}}>Contestar</Link>
                    <Link className="button-msg"
                          to={"/delete"}
                          style={{color: "white", backgroundColor: "#F34C4C"}}>Eliminar</Link>
                </div>
            </div>
        </div>
    )
}

export default Messages