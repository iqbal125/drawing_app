import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders signup screen', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', { name: /Login/i }));
  userEvent.click(screen.getByRole('button', { name: /Register/i }));
  screen.getByRole('heading', { name: /Please sign up/i });
  screen.getByLabelText(/Email address/i);
  screen.getByLabelText(/Full name/i);
  screen.getByLabelText(/Password/i);
  screen.getByRole('button', { name: /Submit/i });
});

test('renders login option', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', { name: /Register/i }));
  screen.getByText(/Already have an account?/i);
  screen.getByRole('button', { name: /Login/i });
});
