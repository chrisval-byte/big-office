import "./style.css"

const sectionTitles = ({text, withMargin}) => {
    return(
        <div className={withMargin ?
            "title-container-margin" : "title-container-no-margin"}>
            <h2 className="section-title">{text}</h2>
        </div>
    )
}

export default sectionTitles;