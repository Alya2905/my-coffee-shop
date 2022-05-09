import React from"react";
import { data } from './data2';
import './App.css';
import { useState } from 'react';

function Home() {
    
        const [person, setPerson] = useState(0);
        const {id, name, description, image} = data[person];

        const previousCoffee= () =>{
            setPerson((person=> {
              person--;
              if (person <0) {
                return data.length-1;
              }
              return person;
            }))
          }
        
            const nextCoffee = () =>{
              setPerson((person=> {
                person++;
                if (person >data.length-1) {
                  person=0;
                }
                return person;
              }))
            }

        return (<div className="cover">

        <h1>Самые свежие сладости к кофе ручной работы:</h1>
        <div key={id}>
        <div className="container">
          <img src={image} width="200px" alt="sweet"/>
        </div>
    
        <div className="container">
          <h1>{id} - {name}</h1>
        </div>
    
        <div className="container">
        <h1>{description}</h1>
        </div>

        <div className="btn container">
      <button onClick={previousCoffee}>Назад</button>
      <button onClick={nextCoffee}>Вперед</button>
        </div>


        </div>
</div>)

}
    
export default Home;