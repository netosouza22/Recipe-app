import React from 'react';

function Drink({title, image, instruction}){
    return(
        <div>
            <img src={image} alt={title}/>
            <h1>{title}</h1>
            <p>{instruction}</p>
        </div>
    )
}

export default Drink;