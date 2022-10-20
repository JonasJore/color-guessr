import { render, screen } from '@testing-library/react';
import App from './App';

describe("Tests for the App component", () => {
  test("Score counter starts at zero", () => {
    render(<App />);
    const gamePointCounter = screen.getByText(/Score: 0/i);
    expect(gamePointCounter).toBeInTheDocument();
  });

  test("Game objective is showing", () => {
    render(<App />);
    const gameObjective = screen.getByText(/GUESS THE COLOR/i);
    expect(gameObjective).toBeInTheDocument();
  });

  test("Game always shows 3 possible answer alternatives", () => {
    const dom = render(<App />);
    const answerAlternatives = dom.container.querySelector('.Alternatives-row')?.childElementCount;
    expect(answerAlternatives).toBe(3);
  })
});
