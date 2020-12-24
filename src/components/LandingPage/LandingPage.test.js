import React from 'react';
import { render } from '@testing-library/react';
import LandingPageNav from './LandingPageNav';
import { BrowserRouter } from 'react-router-dom';

//smoke test
test('renders LandingPageNav without crashing', () => {
  render(<BrowserRouter><LandingPageNav /></BrowserRouter>);
});