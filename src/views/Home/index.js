import "./styles.css"
import Header from "../../components/common/Header"
import Image from "../../assets/images/silla-image-section.png"

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="intro-section">
                <div className="text-section">
                    <div className="text-container">s
                        <h1>NECESITAS RENOVAR TU MOBILIARIO</h1>
                    </div>
                    <div className="yellow-box"/>
                    <div className="subtitle-container">
                        <h3>NOSOTROS LO ARREGLAMOS</h3>
                    </div>
                </div>
                <div className="image-section">
                    <img src={Image} className="image-style" alt="chair-image"/>
                </div>
            </div>

        </div>
    )
}

export default Home