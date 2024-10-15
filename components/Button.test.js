import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

test('renders button component', () => {
  render(<Button />);
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).toBeInTheDocument();
});