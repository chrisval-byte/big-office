import "./styles.css"

const ImageContainers = ({title, imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5, imageUrl6}) => {

    return(
        <div className="image-container">
            <h3>{title}</h3>
            <div className="image-box">
                <img loading={"lazy"}
                     src={imageUrl1}
                     srcSet={imageUrl6 + "400w, " + imageUrl5 + " 576w"}
                     alt={"Foto"}
                     className={"image"}/>
            </div>
        </div>
    )
}

export default ImageContainers