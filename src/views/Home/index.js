import "./styles.css"
import Header from "../../components/common/Header"
import ServicesSection from "./components/ServicesSection"
import ContactSection from "./components/ContactSection";
import TextDecoration from "../../components/common/TextDecor"
import OfferSection from "./components/OfferSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import Footer from "../../components/common/Footer";
import Image from "../../assets/images/silla-image-section.png"

const Home = () => {
    return (
        <div>
            <Header withBackground={true}/>
            <div className="intro-container">
                <div className="intro-section">
                    <div className="text-section">
                        <div className="text-container">
                            <h1>NECESITAS RENOVAR TU MOBILIARIO</h1>
                        </div>
                        <TextDecoration classSelected="first-title"/>
                        <div className="subtitle-container">
                            <h3>NOSOTROS LO ARREGLAMOS</h3>
                        </div>
                    </div>
                    <div className="image-section">
                        <img src={Image} className="image-style" alt="chair"/>
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1629395608">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                         preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                            250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                            3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"/>
                    </svg>
                </div>
            </div>
            <ServicesSection id="services"/>
            <OfferSection/>
            <ContactSection id="contact"/>
            <AboutSection id="about"/>
            <GallerySection/>
            <Footer/>
        </div>
    )
}

export default Home