import React from 'react';
import { render } from '@testing-library/react';
import LandingPageNav from './LandingPageNav';

//smoke test
test('renders LandingPageNav without crashing', () => {
  render(<LandingPageNav />);
});