import React from 'react'
import LoginForm from './LoginForm'
import TokenService from './TokenService'


export default function LandingPageNav(props) {
    return (
        <nav className="landing-page-nav">
            {TokenService.hasAuthToken
                ? <li><a href="/" onClick={TokenService.clearAuthToken}>Sign Out</a></li>
                : <LoginForm {...props}/>}
            <ul>
                <li className="log-in"><a href="/user-dashboard">Log In</a></li>
                <li><a href="/create-account">Create an Account</a></li>
            </ul>
        </nav>
    )
}