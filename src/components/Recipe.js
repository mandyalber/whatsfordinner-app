import React from 'react';

export default function Recipe(props) {
    return (
        <div>
            {(!props.imageURL) ? null : <img src={props.imageURL}/>}
            <h3>{props.name} </h3>          
            <ul>Ingredients Needed: 
                {props.ingredients.map(ingredient =>
                    <li>{ingredient.quantity} {ingredient.name} </li>
                )}
            </ul>
                <p>{props.steps.map(step => step + " ")}</p>
                <p>See more at <a href={props.originalURL}>Food.com</a></p>
        </div>
    )
}