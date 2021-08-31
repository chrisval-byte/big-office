import "./styles.css"
import TextDecor from "../../../../components/common/TextDecor";

const ProjectsSection = () => {
    return(
        <div className="projects-container">
            <div className="projects-section">
                <div className="projects-title">
                    <h1 className="title-project">Proyectos</h1>
                    <TextDecor classSelected="subtitle"/>
                    <p className="desc-project">Sabemos que hasta no ver no
                        creer, por eso, te dejamos algunos de los
                        proyectos donde hemos trabajado.</p>
                </div>
                <div className="carousel-section">
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection