import React from "react";
import { useState } from "react";


function Coffee({itemsForSale}) {
    const [showMore, setShowMore] = useState(false);
    const showTextClick = (element) => {
        element.showMore = !element.showMore
        setShowMore(!showMore)
    }
    
    return(
    <div className="coffeContainer">
        {itemsForSale.map((element => {
            const{ id, name, country, description, image, facts, showMore } = element;
            return(
                <div className="card" key={id}>
                    <img src={image} width="300px" height="400px" alt="img"/>
                    <div className="name-coffee">
                        <h3>{name}</h3>
                        <h3>{country}</h3>
                        <p>{showMore ? description : description.substring(0,170) + "...." }
                        <button className="btn" onClick={() => showTextClick(element)}>{showMore ? "Показать меньше" : "Показать больше"}</button>
                        </p> 
                        <h4>{facts}</h4>
                    </div>
                </div>
            )
        }))}
    </div>)
}

export default Coffee;