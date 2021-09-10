import "./styles.css"

const ImageForProjects = ({section, drop}) => {
    return(
        drop ? <div
            style={{display: "none"}}
                className={section === "fab" ? "fab-gallery" : "rep-gallery"}/> :
        <div className={section === "fab" ? "fab-gallery" : "rep-gallery"}/>
    )
}

export default ImageForProjects