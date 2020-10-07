import React from 'react';
import Logo from '../assets/calories.svg'
import styled, {css} from 'styled-components';

const Div = styled.div`
    box-sizing: border-box;
    padding-top: 180px;
    position: relative;

    box-shadow: 0px 5px 10px #000;
    background-color: white;

    margin-top: 20px;
    width: 655px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    height: 200px;
    width: 60%;
    position: absolute;
    top: 0;
    align-self: center;
    `;

const H1 = styled.h1`
    text-align: center;
`

const CardCal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
`
const ImgLogo = styled.img`
    width: 30px;
    height: 30px;
`

const Recipe = ({title, calories, ingredients, image}) => {

    let nCalories = parseInt(calories);

    return(

        <Div>
            <Img src={image} alt={title} />
            <div>
                <H1>{title}</H1>
                <CardCal>
                    <ImgLogo src={Logo} />
                    <p> Calories: {nCalories}</p>
                </CardCal>
            </div>
            <ul>
                {ingredients.map ((ingredient) => {
                    return <li>{ingredient}</li>
                })}
            </ul>
        </Div>
    )
}

export default Recipe;