import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateAccountNav(props) {
    return (
        <nav>
            <ul className="create-account-nav">
                <li><Link to="/">Home</Link></li>
                <li><a href="/">Log In</a></li>
            </ul>
        </nav>
    )
}