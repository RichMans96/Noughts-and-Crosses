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

  it('Player 1 score increments by 1 if they win', () => {
    const playerScore = screen.getByText(/Player 1/i);
    const nought1 = screen.getByTestId('1');
    const nought2 = screen.getByTestId('4');
    const nought3 = screen.getByTestId('7');
    const crosses1 = screen.getByTestId('2');
    const crosses2 = screen.getByTestId('3');
    const crosses3 = screen.getByTestId('8');
    fireEvent.click(nought1);
    fireEvent.click(crosses1);
    fireEvent.click(nought2);
    fireEvent.click(crosses2);
    fireEvent.click(nought3);
    fireEvent.click(crosses3);
    // the way the game works currently is that the grid needs to be clicked for the game to register a win
    fireEvent.click(crosses3);
    expect(playerScore).toHaveTextContent(/Player 1: 1/i);
  });

  it('Player 2 score increments by 1 if they win', () => {
    const playerScore = screen.getByText(/Player 2/i);
    const nought1 = screen.getByTestId('2');
    const nought2 = screen.getByTestId('3');
    const nought3 = screen.getByTestId('8');
    const crosses1 = screen.getByTestId('1');
    const crosses2 = screen.getByTestId('4');
    const crosses3 = screen.getByTestId('7');
    fireEvent.click(nought1);
    fireEvent.click(crosses1);
    fireEvent.click(nought2);
    fireEvent.click(crosses2);
    fireEvent.click(nought3);
    fireEvent.click(crosses3);
    // the way the game works currently is that the grid needs to be clicked for the game to register a win
    fireEvent.click(crosses3);
    expect(playerScore).toHaveTextContent(/Player 2: 1/i);
  });

  it('Resets the board when reset is clicked', () => {
    const nought = screen.getByTestId('1');
    const cell = screen.getByTestId('2');
    const reset = screen.getByText(/Reset/i);
    fireEvent.click(nought);
    fireEvent.click(cell);
    fireEvent.click(reset);
    expect(cell).toHaveTextContent('');
  });
});
