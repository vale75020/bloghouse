import React from "react";



const Article = (props) => {

    return (

        <div className="cont">
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.titre}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.author}</h6>
                    <p className="card-text">{props.text}</p>

                </div>
            </div>

        </div>
    )
}

export default Article;