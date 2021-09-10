import "./styles.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";

const StyledIcon = ({haveText, text, onClick, className, iconColor,flexDirection, iconName, marginLeft}) => {
    const [textSize, setIconSize] = useState("")

    useEffect(() => {
        const size = window.screen.width
        const changeTextSize = () => size <= 991 && size >= 576 ? setIconSize("icon-text-m") :
            size <= 575 && size >= 329 ? setIconSize("icon-text-s") :setIconSize("icon-text-l")

        changeTextSize()
    }, [])

    return(
        <div className="styled-icon"
             style={flexDirection === "column" ? {"flexDirection": flexDirection} : {
                 "flexDirection": flexDirection,
                 "marginLeft": marginLeft
             }}
             onClick={onClick}>
            <FontAwesomeIcon className={className}
                             style={{"color": iconColor}}
                             icon={iconName}/>
            {haveText ? <p className={textSize}>{text}</p> : <br/>}
        </div>
    )
}

export default StyledIcon;