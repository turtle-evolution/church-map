import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should be contains Chào mừng', () => {
  render(<App />);
  const headerElement = screen.getByText(/Chào mừng/i);
  expect(headerElement).toBeInTheDocument();
});
