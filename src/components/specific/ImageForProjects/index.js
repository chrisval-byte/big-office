import "./styles.css"

const ImageForProjects = ({section}) => {
    return(
        <div className={section === "fab" ? "fab-gallery" : "rep-gallery"}/>
    )
}

export default ImageForProjects