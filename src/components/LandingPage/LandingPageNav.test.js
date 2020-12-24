import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import LandingPage from './LandingPage'

//smoke test
test('renders LandingPage without crashing', () => {
  render(<BrowserRouter><LandingPage /></BrowserRouter>)
})