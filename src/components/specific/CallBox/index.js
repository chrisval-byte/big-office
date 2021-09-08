import "./styles.css"
import StyledIcon from "../../common/StyledIcons";
import {faPhoneSquareAlt} from "@fortawesome/free-solid-svg-icons";

const CallBox = () => {
    return(
        <div className="callbox-container">
            <div className="callbox-section">
                <StyledIcon iconName={faPhoneSquareAlt} iconColor={"black"} className={"icon-s"}/>
                <h2>2367-5164</h2>
            </div>
        </div>
    )
}

export default CallBox