import React, {useEffect, useState} from 'react';
import Header from '../components/Header'
import Drink from '../components/Drink'

function Drinks(){

    const [drink, setDrink] = useState([]);

    useEffect( () => {
        getDrinks();
      },[]);
      console.log(drink);
      const getDrinks = async () =>{
        const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
          );
        const data = await response.json();
          setDrink(data.drinks);
      }
    //   Ao menos já sei que vai dar certo
        let dataArray = drink[0];
    
        var i = 1;
        for(var prop in dataArray){
            
            if(prop === `strIngredient${i}`){
                console.log(`Property: ${prop} | Value: ${dataArray[prop]}` );
            }
            i++;
   
        }
      const car = {
          voa: true,
          move: true,
          color: 'blue'
      }

      console.log(car.hasOwnProperty('move'));
                                                                                                                                   
    return(
        <div>
            <Header />
            <div>
                {drink.map( drink => (
                    <Drink  title = {drink.strDrink}
                            image = {drink.strDrinkThumb}
                            instruction = {drink.strInstructions}
                    />
                ))}
            </div>
        </div>

    );
}

export default Drinks;