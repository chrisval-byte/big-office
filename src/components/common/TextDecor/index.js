import "./styles.css"

const TextDecor = ({classSelected}) => {
    const styleSelected = classSelected === 1 ? "yellow-box-xl" :
        classSelected === 2 ? "yellow-box-l"
            :"yellow-box-m";
    return(
        <div className={styleSelected}/>
    )
}

export default TextDecor