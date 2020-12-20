import React, { useState } from 'react'
import config from '../../config'

export default function CreateAccount(props) {
    const [created, setCreated] = useState(false)
    const [error, setError] = useState({ error: null })

    function handleSubmit(e) {
        e.preventDefault()
        const { display_name, email, password } = e.target
        const user = {
            email: email.value,
            password: password.value,
            display_name: display_name.value,
        }

        fetch(`${config.API_ENDPOINT}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            )
            .then(user => {
                display_name.value = ''
                email.value = ''
                password.value = ''
                setCreated(true)
            })
            .catch(res => {
                setError({ error: res.error })
            })
    }

    return (
        <main className="create-account-form">
            <h2>Create Your Account</h2>
            {!created ?
            <form  onSubmit={handleSubmit} >
                <fieldset>
                    <legend>Enter your info</legend>
                    <label htmlFor="display_name">Display Name: </label>
                    <input id="display_name" name="display_name" type="text" required />
                    <label htmlFor="email">Email: </label>
                    <input id="email" name="email" type="email" required/>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" required/>
                    <button type="submit">Submit</button>
                    <div role='alert'>
                        {error.error && <p className='red'>{error.error}</p>}
                    </div>
                </fieldset>
            </form> :
            <div>
             <p>Successfully created a new account!</p>
             <p><a href="/">Log In</a> now and start searching for some recipes.</p>
             </div>
        }
        </main>
    )
}