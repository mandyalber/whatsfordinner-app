import React from 'react'
import { Redirect } from 'react-router-dom'
import TokenService from './TokenService'

export default function ProtectedRoute (props){
    const Component = props.render
    const isAuthenticated = TokenService.hasAuthToken

    return isAuthenticated ? <Component/> : <Redirect to='/'/>
}