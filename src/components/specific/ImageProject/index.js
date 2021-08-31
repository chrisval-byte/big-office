import "./styles.css"

const ImageProject = ({image, title, subtitle}) => {
    return(
        <div className="view-image">
            <div className="image-view-space"/>
            <div className="description-and-buttons">
                <div className="image-description">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
                <div className="images-buttons">
                    <button>i</button>
                    <button>d</button>
                </div>
            </div>

        </div>
    )
}

export default ImageProject