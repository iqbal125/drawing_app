import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders login screen after clicking on login button', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', { name: /Login/i }));
  expect(window.location.pathname).toBe('/login');
  screen.getByRole('heading', { name: /Please log in/i });
  screen.getByLabelText(/Email address/i);
  screen.getByLabelText(/Password/i);
  screen.getByRole('button', { name: /Submit/i });
});

test('renders register option', () => {
  render(<App />);
  screen.getByText(/Don't have an account?/i);
  screen.getByRole('button', { name: /Register/i });
});
