import React from "react";
import "../components/PricingCards.css";

const PricingCard = (props) => {
    return(
        <div className="Names">
            <h3>{props.name}</h3>
            <p>{props.subName}</p>
        </div>
    )
}

export default PricingCard;