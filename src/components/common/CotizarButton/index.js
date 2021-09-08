import "./styles.css"
import {Link} from "react-router-dom";

const CotizarButton = ({size}) => {
    return(
        <Link to={"/contacto"} className="cotizar-btn" style={
            size === "l" ? {"width": 150, "height": 50, "fontSize": 20} :
            size === "md" ? {"width": 130, "height": 40, "fontSize": 20}:
                {"width": 125, "height": 40, "fontSize": 16}}
        >Cotizar</Link>
    )
}

export default CotizarButton