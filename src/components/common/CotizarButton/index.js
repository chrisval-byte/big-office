import "./styles.css"

const CotizarButton = ({size}) => {
    return(
        <button className="cotizar-btn" style={
            size === "l" ? {"width": 150, "height": 50, "fontSize": 20} :
            size === "md" ? {"width": 130, "height": 40, "fontSize": 20}:
                {"width": 125, "height": 40, "fontSize": 16}}
        >Cotizar</button>
    )
}

export default CotizarButton