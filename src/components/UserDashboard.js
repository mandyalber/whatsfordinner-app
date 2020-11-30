import React from 'react'
import Recipe from './Recipe'
import store from '../store'

export default function RecipeSearchNav(props) {
    return (
        <div className="user-dashboard">
            <h2>Welcome [User]!</h2>
            <p>Here is where we will display your recipes for the week once you click the button! It willl look something like this:</p>


            <ul>
                <li>Monday:<br/><br/><Recipe
                    name={store[0].name}
                    ingredients={store[0].ingredients}
                    steps={store[0].steps}
                    imageURL={store[0].imageURL}
                    originalURL={store[0].originalURL} />
                </li>
                <li>Tuesday:<br/><br/><Recipe
                    name={store[1].name}
                    ingredients={store[1].ingredients}
                    steps={store[1].steps}
                    imageURL={store[1].imageURL}
                    originalURL={store[1].originalURL} />
                </li>
                <li>Wednesday:<br/><br/><Recipe
                    name={store[2].name}
                    ingredients={store[2].ingredients}
                    steps={store[2].steps}
                    imageURL={store[2].imageURL}
                    originalURL={store[2].originalURL} />
                </li>
                <li>Thursday:<br/><br/><Recipe
                    name={store[3].name}
                    ingredients={store[3].ingredients}
                    steps={store[3].steps}
                    imageURL={store[3].imageURL}
                    originalURL={store[3].originalURL} />
                </li>
                <li>Friday:<br/><br/><Recipe
                    name={store[4].name}
                    ingredients={store[4].ingredients}
                    steps={store[4].steps}
                    imageURL={store[4].imageURL}
                    originalURL={store[4].originalURL} />
                </li>
                <li>Saturday:<br/><br/><Recipe
                    name={store[5].name}
                    ingredients={store[5].ingredients}
                    steps={store[5].steps}
                    imageURL={store[5].imageURL}
                    originalURL={store[5].originalURL} />
                </li>
                <li>Sunday:<br/><br/><Recipe
                    name={store[6].name}
                    ingredients={store[6].ingredients}
                    steps={store[6].steps}
                    imageURL={store[6].imageURL}
                    originalURL={store[6].originalURL} />
                </li>
            </ul>
        </div >
    )
}