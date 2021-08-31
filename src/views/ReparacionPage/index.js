import "./styles.css"
import IntroSection from "./components/IntroSection";
import Header from "../../components/common/Header";
import ProjectsSection from "./components/ProyectosSection"

const ReparacionPage = () => {
    return(
        <div>
            <Header withBackground={true}/>
            <IntroSection/>
            <ProjectsSection/>
        </div>
    )
}

export default ReparacionPage