import "./styles.css"

const CotizarButton = ({size}) => {
    return(
        <button className="cotizar-btn" style={
            size === "l" ? {"width": 150, "height": 50} :
            size === "md" ? {"width": 130, "height": 40}:
                {"width": 125, "height": 40}}
        >Cotizar</button>
    )
}

export default CotizarButton