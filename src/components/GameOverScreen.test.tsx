import { render, screen } from '@testing-library/react';
import GameOverScreen from './GameOverScreen';

describe("Tests functionality around telling the user the game is over", () => {
  test("tells the user that game is over", () => {
    render(<GameOverScreen quizScore={10} onReset={() => {}} />);
    const gameOverText = screen.getByText(/Game over/i);
    expect(gameOverText).toBeInTheDocument();
  });
});