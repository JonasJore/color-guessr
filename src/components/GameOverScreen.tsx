type GameOverScreenPropType = {
  quizScore: number;
  onReset: () => void;
};

function GameOverScreen({ quizScore, onReset }: GameOverScreenPropType): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GAME OVER 🥳</h1>
        <h1>You got {quizScore} colors right</h1>
        <button onClick={onReset}>PLAY AGAIN</button>
      </header>
    </div>
  )
}

export default GameOverScreen;