import React from "react";

import './card.css'

const Card = ({image, text}) => {
    return (
        <div className="card">
            <img 
              src={image}
              className="card-img"
              alt="icon"
            />
            <p className="card-text">{text}</p>
        </div>
    );
}

export default Card;
