import "./styles.css"
import IntroSection from "./components/IntroSection";
import Header from "../../components/common/Header";
import ProjectsSection from "./components/ProyectosSection"
import TrabajoSection from "./components/TrabajoSection";
import OfferSection from "../../components/commonSections/OfferSection";

const ReparacionPage = () => {
    return(
        <div>
            <Header withBackground={true}/>
            <IntroSection/>
            <ProjectsSection/>
            <TrabajoSection/>
            <OfferSection/>
        </div>
    )
}

export default ReparacionPage