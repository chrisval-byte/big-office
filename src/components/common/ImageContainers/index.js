import "./styles.css"

const ImageContainers = ({title}) => {
    return(
        <div className="image-container">
            <h3>{title}</h3>
            <div className="image-box"/>
        </div>
    )
}

export default ImageContainers