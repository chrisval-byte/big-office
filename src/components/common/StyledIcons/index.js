import "./styles.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const StyledIcon = ({haveText, text, onClick, className, iconColor,flexDirection, iconName}) => {
    return(
        <div className="styled-icon"
             style={flexDirection === "column" ? {"flexDirection": flexDirection} : {
                 "flexDirection": flexDirection,
                 "marginLeft": 20
             }}
             onClick={onClick}>
            <FontAwesomeIcon className={className}
                             style={{"color": iconColor}}
                             icon={iconName}/>
            {haveText ? <p className="icon-text">{text}</p> : <br/>}
        </div>
    )
}

export default StyledIcon;