import React from 'react'
import { Redirect } from 'react-router-dom'
import config from '../config'

export default function ProtectedRoute (props){
    const Component = props.render
    const isAuthenticated = !!window.sessionStorage.getItem(config.TOKEN_KEY)

    return isAuthenticated ? <Component/> : <Redirect to='/'/>
}