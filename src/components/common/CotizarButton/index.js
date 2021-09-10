import "./styles.css"
import {Link} from "react-router-dom";

const CotizarButton = ({size}) => {
    return(
        <Link to={"/contacto"}
              className={size === "l" ? "cotizar-btn" :
                  size === "md" ? "cotizar-btn-md" :
                      size === "s" ? "cotizar-btn-s"
              : "cotizar-btn-phone"}>Cotizar</Link>
    )
}

export default CotizarButton