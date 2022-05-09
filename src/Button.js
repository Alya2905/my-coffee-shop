import React from "react";

function Button({filterCoffee}) {
    return(
        <div className="cont">
            <button className="change" onClick={()=> filterCoffee("Africa")}>Африка</button>
            <button className="change" onClick={()=> filterCoffee("America")}>Америка</button>
            <button className="change" onClick={()=> filterCoffee("Asia")}>Азия</button>
        </div>
    )
}

export default Button;