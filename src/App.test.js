import { render, screen } from '@testing-library/react';
import App from './App.js';

xtest('renders DFA Github link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Chung News/i);
  expect(linkElement).toBeInTheDocument();
});

