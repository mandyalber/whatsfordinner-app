import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import config from '../config'
//import TokenService from '../../services/token-service'
//import AuthApiService from '../../services/auth-api-service'

export default function LoginForm(props) {


  const [error, setError] = useState({ error: null });

  const AuthApiService = {
    postLogin({ email, password }) {
      return fetch(`${config.API_ENDPOINT}/auth/login`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
  }
  const TokenService = {
    saveAuthToken(token) {
      window.sessionStorage.setItem(config.TOKEN_KEY, token)
    },
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },/*
  makeBasicAuthToken(email, password) {
    return window.btoa(`${email}:${password}`)
  },*/
  }

  function handleSubmitJwtAuth(e) {
    e.preventDefault()
    setError({ error: null })
    const { email, password } = e.target

    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    })
      .then(res => {
        email.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        
      })
      .then(<Redirect to='/user-dashboard'/>)
      .catch(res => {
        setError({ error: res.error })
        console.log(res)
      })
  }

  return (
    <form className='login-form' onSubmit={handleSubmitJwtAuth}>
      <div role='alert'>
        {error.error && <p className='red'>{error.error}</p>}
      </div>
      <label htmlFor='login-form_email'>Email: </label>
      <input required name='email' id='LoginForm__user_name' />
      <label htmlFor='login-form__password'>Password: </label>
      <input required name='password' type='password' id='login-form__password' />
      <button type='submit'>Login</button>
    </form>
  )
}
