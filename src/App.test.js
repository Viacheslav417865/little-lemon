import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders CallToAction section', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const heading = screen.getByText(/please kindly see little lemon/i);
  expect(heading).toBeInTheDocument();
});
