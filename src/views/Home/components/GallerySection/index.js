import "./styles.css"
import SectionTitles from "../../../../components/common/SectionTitles"
import Pictures from "../../../../components/common/Pictures";
import Image1 from "../../../../assets/images/gallery1.jpeg"
import Image2 from "../../../../assets/images/gallery2.jpeg"
import Image3 from "../../../../assets/images/gallery3.jpeg"
import Image4 from "../../../../assets/images/gallery4.jpeg"
import Image5 from "../../../../assets/images/gallery5.jpeg"
import Image6 from "../../../../assets/images/gallery6.jpeg"
import Image7 from "../../../../assets/images/gallery7.jpeg"
import Image8 from "../../../../assets/images/gallery8.jpeg"
import Image9 from "../../../../assets/images/gallery9.jpeg"

const GallerySection = () => {
    return(
        <div className="gallery-container">
            <div className="gallery-sections">
                <div className="gallery-title">
                    <SectionTitles text="Un poco de nuestro trabajo"/>
                </div>
                <div className="gallery">
                    <div className="gallery-row">
                        <Pictures withOverlay={false} image={Image1} className="picture-class-gallery-m"/>
                        <Pictures withOverlay={false} image={Image2} className="picture-class-gallery-l"/>
                        <Pictures withOverlay={false} image={Image7} className="picture-class-gallery-m"/>
                    </div>
                    <div className="gallery-row">
                        <Pictures withOverlay={false} image={Image8} className="picture-class-gallery-l"/>
                        <Pictures withOverlay={false} image={Image3} className="picture-class-gallery-m"/>
                        <Pictures withOverlay={false} image={Image4} className="picture-class-gallery-m"/>
                    </div>
                    <div className="gallery-row">
                        <Pictures withOverlay={false} image={Image5} className="picture-class-gallery-m"/>
                        <Pictures withOverlay={false} image={Image6} className="picture-class-gallery-m"/>
                        <Pictures withOverlay={false} image={Image9} className="picture-class-gallery-l"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GallerySection