import "./styles.css"
import Header from "../../components/common/Header";
import IntroBox from "../../components/common/IntroBox";

const DecisionScreen = () => {
    return(
        <div>
            <Header colorBlack={true}/>
            <div className="decision-container">
                <div className="decision-section">
                    <div className="intro-boxes">
                        <IntroBox text={"Fabricación mobiliario"} to={"/fabricaciones"}/>
                        <IntroBox text={"Reparación mobiliario"} marginTop={50} to={"/reparaciones"}/>
                        <IntroBox text={"Mantenimiento interiores y exteriores"} to={"/fabricaciones"}/>
                    </div>
                    <div className="intro-text">
                        <h1>F A B R I C A C I O N</h1>
                        <h3>de mobiliario.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DecisionScreen;