import "./styles.css"
import Header from "../../components/common/Header";
import IntroBox from "../../components/common/IntroBox";
import {useEffect, useState} from "react";

const DecisionScreen = () => {
    const [margin, setMargin] = useState(false)
    const [actualWord, setActualWord] = useState("F A B R I C A C I Ó N")
    const [cont, setCont] = useState(1)
    const words = ["F A B R I C A C I Ó N", "R E P A R A C I Ó N"]
    let time = 0

    useEffect(() => {
        const size = window.screen.width
        size > 991 ? setMargin(true) : setMargin(false)
    }, [])

    setInterval(() => {
        setActualWord(words[cont])
        cont === 1 ? setCont(0) : setCont(1)
    }, time === 0 ? 5000 : 10000)

    return(
        <div>
            <Header colorBlack={true}/>
            <div className="decision-container">
                <div className="decision-section">
                    <div className="intro-boxes">
                        <IntroBox text={"Fabricación mobiliario"} to={"/fabricaciones"}/>
                        <IntroBox text={"Reparación mobiliario"} marginTop={margin ? 50 : 0} to={"/reparaciones"}/>
                        <IntroBox text={"Mantenimiento interiores y exteriores"} to={"/fabricaciones"}/>
                    </div>
                    <div className="intro-text">
                        <h1>{actualWord}<span>&#160;</span></h1>
                        <h3>de mobiliario.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DecisionScreen;