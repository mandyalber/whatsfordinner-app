import React, { useState } from 'react';
import config from '../../config'
import TokenService from '../TokenService';

export default function SaveRecipe(props) {
    const [msg, setMsg] = useState('');

    function handleSaveClick() {

        const recipe = {
            recipeId: props.id,
            title: props.title,
            sourceUrl: props.sourceUrl,
            image: props.image,
            summary: props.summary
        }

        fetch(`${config.API_ENDPOINT}/saved-recipes`, {
            method: "POST",
            headers: {
                "Authorization": `bearer ${TokenService.getAuthToken()}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recipe),
        })
            .then(response => {
                if (response.status <= 200 || response.status > 300) {
                    return response.json().then(error => {
                        throw error
                    })
                }
                return response.json()
            })
            .then(responseJson => {
                setMsg(responseJson.message)            
            })
            .catch((error) => setMsg(error.error))
    }

    return (
        <div>
            <button onClick={handleSaveClick}>Save</button>
            <div role='alert'>
                {msg && <p className='red'>{msg}</p>}
            </div>
        </div>
    )
}
