import "./styles.css"
import IntroSection from "./components/IntroRepSection";
import ProjectsRepSection from "./components/ProjectsRepSection";
import Header from "../../components/common/Header";
import ServicesRepSection from "./components/ServicesRepSection";
import OfferSection from "../../components/commonSections/OfferSection";

const ReparacionPage = () => {
    return(
        <div>
            <Header withBackground={true} colorBlack={true}/>
            <IntroSection/>
            <ProjectsRepSection/>
            <ServicesRepSection/>
            <OfferSection/>
        </div>
    )
}

export default ReparacionPage