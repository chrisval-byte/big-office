import "./styles.css"
import SectionTitles from "../../../../components/common/SectionTitles"
import TextDecor from "../../../../components/common/TextDecor";
import Pictures from "../../../../components/common/Pictures";

const AboutSection = () => {
    return(
        <div className="about-container">
            <div className="about-section">
                <div className="desc-box">
                    <SectionTitles text="Nosotros"/>
                    <TextDecor classSelected={3}/>
                    <p className="business-desc">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It
                        has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;