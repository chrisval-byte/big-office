import "./styles.css"
import StyledIcon from "../StyledIcons";
import {faArrowRight} from "@fortawesome/fontawesome-free-solid"
import {Link} from "react-router-dom"

const IntroBox = ({marginTop, text, to}) => {
    return(
        <div className="intro-box-container" style={{marginTop: marginTop}}>
            <div className="intro-box-shadow"/>
            <Link
                to={to}
                className="intro-box">
                <h2>{text} <StyledIcon iconColor={"#000"} iconName={faArrowRight} marginLeft={20}/></h2>
            </Link>
        </div>
    )
}

export default IntroBox