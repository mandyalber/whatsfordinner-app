import React from 'react'
import { render } from '@testing-library/react'
import CreateAccountNav from './CreateAccountNav'
import { BrowserRouter } from 'react-router-dom'

//smoke test
test('renders CreateAccountNav without crashing', () => {
  render(<BrowserRouter><CreateAccountNav /></BrowserRouter>)
})