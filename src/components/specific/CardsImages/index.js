import "./styles.css"
import {useEffect, useState} from "react";

const CardsImages = () => {
    const [changeImages, setChangeImages] = useState(false)

    useEffect(() => {
        const size = window.screen.width
        const changeNumberOfCards = () => size < 575 ? setChangeImages(false) : setChangeImages(true)

        changeNumberOfCards()
    })

    return(
        changeImages ?
                <div className="container">
                    <div className="card">
                        <h3 className="title">Imagen 1</h3>
                    </div>
                    <div className="card">
                        <h3 className="title">Imagen 2</h3>
                    </div>
                    <div className="card">
                        <h3 className="title">Imagen 3</h3>
                    </div>
                </div>
                :
                <div className="container">
                    <div className="card">
                        <h3 className="title">Imagen 1</h3>
                    </div>
                    <div className="card">
                        <h3 className="title">Imagen 2</h3>
                    </div>
                </div>
    )
}

export default CardsImages