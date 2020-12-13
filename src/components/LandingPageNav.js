import React from 'react'
import LoginForm from './LoginForm'

export default function LandingPageNav(props) {
    return (
        <nav className="landing-page-nav">
            <LoginForm/>
            <ul>
                <li className="log-in"><a href="/user-dashboard">Log In</a></li>
                <li><a href="/create-account">Create an Account</a></li>
            </ul>
        </nav>
    )
}