import "./styles.css"
import Header from "../../components/common/Header";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import TrabajoSection from "./components/WorkSection";
import OfferSection from "../../components/commonSections/OfferSection";
import Footer from "../../components/common/Footer";

const FabricacionPage = () => {
    return(
        <div>
            <Header withBackground={true} colorBlack={true}/>
            <IntroSection/>
            <ProjectsSection/>
            <TrabajoSection/>
            <OfferSection/>
            <Footer/>
        </div>
    )
}

export default FabricacionPage