import "./styles.css"

const Input = ({inputText, message}) => {
    return(
        <input className={message ? "input-message":"input-box"} placeholder={inputText}/>
    )
}

export default Input