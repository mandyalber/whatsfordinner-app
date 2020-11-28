import React from 'react'

export default function LandingPageNav(props) {
    return (
        <div className="landing-page-nav">
            <form action="/user-dashboard">
                <fieldset>
                    <legend>Login:</legend>
                    <label for="username">Username: </label>
                    <input id="username" type="text" />
                    <label for="password">Password: </label>
                    <input type="text" name="" id="password" />
                    <button>Submit</button>
                </fieldset>
            </form>
            <p><a href="/create-account">Create an Account</a></p>
        </div>
    )
}