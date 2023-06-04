import React from "react";
import { v4 as uuidv4 } from 'uuid';
import './why.css'

import Save from '../../assets/images/save.png'
import Target from '../../assets/images/targeting.png'
import Card from "./card";
import Secure from "../../assets/images/secure.png"
import Plan from "../../assets/images/plan.png"

const Why = ({title}) => {
    const cards = [
        {
            text: "Get the edge on airfare prices with our accurate flight predictions.",
            image: Target
        },
        {
            text: "Travel smart of mind. Our website is secured and trusted by thousands of satisfied travelers world wide. ",
            image: Secure
        },
        {
            text: "Maximize your wanderlust and minimize your spending with our tavel smart tool.",
            image: Save
        },
        {
            text: "Planning made easy. Our use-friendly interface and flexible search options make it easy to find and book the best flights for your travel needs.",
            image: Plan
        }
    ]

    return (
        <section className="section">
            <p className="section-header">
                {title}
            </p>
            <div className="section-content">
               { cards.map((card) => (<Card key={uuidv4()} text={card.text} image={card.image}/>)) }
            </div>
        </section>
    );
}

export default Why;
