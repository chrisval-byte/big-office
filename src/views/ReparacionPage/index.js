import "./styles.css"
import IntroSection from "./components/IntroRepSection";
import ProjectsRepSection from "./components/ProjectsRepSection";
import Header from "../../components/common/Header";
import ServicesRepSection from "./components/ServicesRepSection";
import OfferSection from "../../components/commonSections/OfferSection";
import Footer from "../../components/common/Footer";

const ReparacionPage = () => {
    return(
        <div>
            <Header withBackground={true} colorBlack={true}/>
            <IntroSection/>
            <ProjectsRepSection/>
            <ServicesRepSection/>
            <OfferSection/>
            <Footer/>
        </div>
    )
}

export default ReparacionPage