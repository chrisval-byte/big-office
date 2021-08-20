import "./styles.css"

const TextArea = ({bgColor, text, displayBox}) => {
    return(
        displayBox ?
        <div>
            <textarea maxLength={300} className="message-box"/>
            <button
                className="send-button"
                style={{"backgroundColor": bgColor}}
            >{text}</button>
        </div> :
            <br/>
    )
}

export default TextArea;