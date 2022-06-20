import { render, screen } from '@testing-library/react';
import App from './App';

test('should be contains Bản đồ', () => {
  render(<App />);
  const headerElement = screen.getByText(/Bản đồ/i);
  expect(headerElement).toBeInTheDocument();
});
