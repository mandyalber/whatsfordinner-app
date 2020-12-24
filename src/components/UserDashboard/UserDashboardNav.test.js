import React from 'react';
import { render } from '@testing-library/react'
import UserDashboardNav from './UserDashboardNav'
import { BrowserRouter } from 'react-router-dom'

//smoke test
test('renders UserDashboardNav without crashing', () => {
  render(<BrowserRouter><UserDashboardNav /></BrowserRouter>)
})