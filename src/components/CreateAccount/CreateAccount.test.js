import React from 'react'
import { render } from '@testing-library/react'
import CreateAccount from './CreateAccount'

//smoke test
test('renders CreateAccount without crashing', () => {
  render(<CreateAccount />)
})