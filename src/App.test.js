import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Tests for Noughts and Crosses', () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup;
  });

  it('Renders Noughts and Crosses', () => {
    const title = screen.getByText(/Noughts and Crosses/i);
    expect(title).toBeInTheDocument();
  });

  it('fills a cell with an O when clicked', () => {
    const nought = screen.getByTestId('1');
    fireEvent.click(nought);
    expect(nought).toHaveTextContent(/O/i);
  });

  it('fills a cell with an X when clicked', () => {
    const nought = screen.getByTestId('1');
    const cell = screen.getByTestId('2');
    fireEvent.click(nought);
    fireEvent.click(cell);
    expect(cell).toHaveTextContent(/X/i);
  });
});
