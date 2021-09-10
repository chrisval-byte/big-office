import "./styles.css"
import TextDecor from "../../../../components/common/TextDecor";
import ImageForProjects from "../../../../components/specific/ImageForProjects";
import {useEffect, useState} from "react";

const ProjectsRepSection = () => {
    const [dropImages, setDropImages] = useState(false)
    const [changeToPhone, setChangeToPhone] = useState(false)

    useEffect(() => {
        const size = window.screen.width
        const changeDropImages = () =>  size < 768 ? setDropImages(true) : setDropImages(false)
        const changeToPhoneSize = () => size < 575 ? setChangeToPhone(true) : setChangeToPhone(false)
        changeDropImages()
        changeToPhoneSize()
    }, [])

    return(
        <div className="projects-rep-container">
            <div className="projects-rep-section">
                <div className="projects-rep-title">
                    <h1>Proyectos</h1>
                    <TextDecor classSelected="subtitle"/>
                    <p>Sabemos que hasta no ver no
                        creer, por eso, te dejamos algunos de los
                        proyectos donde hemos trabajado.</p>
                </div>
                <div className="rep-images-gallery">
                    <div className="rep-images-row">
                        <ImageForProjects drop={dropImages}/>
                        <ImageForProjects drop={changeToPhone}/>
                        <ImageForProjects/>
                        <ImageForProjects/>
                    </div>
                    <div className="rep-images-row">
                        <ImageForProjects drop={dropImages}/>
                        <ImageForProjects drop={changeToPhone}/>
                        <ImageForProjects/>
                        <ImageForProjects/>
                    </div>
                    <div className="rep-images-row">
                        <ImageForProjects drop={dropImages}/>
                        <ImageForProjects drop={changeToPhone}/>
                        <ImageForProjects/>
                        <ImageForProjects/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsRepSection