import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from './LandingPage';

//smoke test
test('renders LandingPage without crashing', () => {
  render(<LandingPage />);
});