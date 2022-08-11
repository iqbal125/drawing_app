import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders main screen by default', () => {
  render(<App />);
  screen.getByText(/Welcome back/i);
});

test('cannot create drawing without logging in', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', { name: /Create/i }));
  expect(window.location.pathname).toBe('/login');
});

