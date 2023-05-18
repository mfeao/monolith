import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders React App text', () => {
  render(<App />);
  const element = screen.getByText(/Monolith/i);
  expect(element).toBeInTheDocument();
});
