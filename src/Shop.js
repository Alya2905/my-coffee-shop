import React from"react";
import { data } from './data3';
import './App.css';
import { useState } from 'react';
import Button from "./Button";
import Coffee from "./Coffee";


function Shop() {

    const [coffee, setCoffee] = useState(data);
    
    const chosenCoffee =(region) => {
        const newCoffee=data.filter(element => element.region===region);
        setCoffee(newCoffee);
    }

    return (<div>
        <Button filterCoffee={ chosenCoffee }/>
        <Coffee itemsForSale={coffee}/>
    </div>
    )  
}

export default Shop;

