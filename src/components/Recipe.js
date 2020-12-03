import React from 'react';

export default function Recipe({ imageURL, name, ingredients, steps, originalURL}) {
    //console.log(props.name)
    return (
        <div>
            {(!imageURL) ? <img src="https://www.weightwatchers.ca/images/4105/dynamic/foodandrecipes/2015/02/us_img_recipe_default_600x600.jpg" alt="recipe-img" /> : <img src={imageURL} alt="recipe-img" />}
            <h3>{name} </h3>
            <ul>Ingredients Needed:
                {/*ingredients.map((ingredient, i) =>
                <li key={i}>{ingredient.quantity} {ingredient.name}</li>
                )*/}
            </ul>
            <p>{/*steps.map(step => step + " ")*/}</p>
            <p>See more at <a href={originalURL}>Food.com</a></p>
        </div>
    )
}