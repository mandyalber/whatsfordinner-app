import React from 'react'
import LoginForm from '../LoginForm/LoginForm' 

export default function LandingPage(props) {
    return (
        <main className="landing-page">
            <h2>Welcome to What's For Dinner!</h2>
            <p>Here you can browse search for recipes, save as many as you like, then generate a whole weeks worth of dinners at once! No more asking yourself daily, "what should we have for dinner?"</p>
            <p>Log in or create an account now, and start cooking!</p>
            <div className="login-mainpage">
                <LoginForm {...props}/>
            </div>
        </main >
    )
}