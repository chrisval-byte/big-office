import "./styles.css"
import TextDecor from "../TextDecor";

const Pictures = ({textSubtitle, text, image, width, height, marginBottom}) => {
    return(
        <div className="picture-container">
            <div className="apply-border"
                 style={{
                     "backgroundImage": `url(${image})`,
                     "backgroundColor": "#FED403",
                     "width": width,
                     "height": height,
                     "marginBottom": marginBottom
                 }}/>
            <div style={{"display": "flex", "flexDirection": "column"}}>
                <div className="picture-title">
                    <h2>{textSubtitle}</h2>
                    <TextDecor classSelected="min-picture"/>
                </div>
                {text ?
                    <div>
                        <div className="description">
                            <p>En nuestros servicios para sillas incluimos lo siguiente:
                                <ul>
                                    <li style={{"marginLeft": 40}}>Reparación de tapiceria</li>
                                    <li style={{"marginLeft": 40}}>Reparación de rodos</li>
                                </ul>
                            </p>

                        </div>
                    </div>
                    : <br/>}
            </div>
        </div>
    )
}

export default Pictures