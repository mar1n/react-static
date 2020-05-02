import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders react static link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React Static/i);
  expect(linkElement).toBeInTheDocument();
});
