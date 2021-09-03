import "./styles.css"

const Form = () => {
    return(
        <form className="form">
            <h1>Envianos un mensaje</h1>
            <p>Selecciona el icono por donde quieres que nos pongamos en contacto contigo:</p>
            <div className="form-icons">

            </div>
            <p>Enviar mensaje por Facebook</p>
            <div className="inputs-container">
                <div className="input-container">
                    <input placeholder="Nombre:"/>
                    <input placeholder="Apellidos:"/>
                </div>
                <div className="input-container">
                    <input placeholder="Teléfono:"/>
                    <input placeholder="Correo:"/>
                </div>
                <textarea className="area" maxLength={300}/>
                <button className="send-button">Enviar mensaje</button>
            </div>
        </form>
    )
}

export default Form