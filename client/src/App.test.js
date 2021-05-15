import { render, screen } from '@testing-library/react';
import App from './App';

test('contains header with title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Xploro Test/i);
  expect(linkElement).toBeInTheDocument();
});
