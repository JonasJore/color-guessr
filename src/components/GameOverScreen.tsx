type GameOverScreenPropType = { quizScore: number };
function GameOverScreen({ quizScore }: GameOverScreenPropType): JSX.Element {
  return (
    <div className="App">
        <header className="App-header">
          <h1>GAME OVER 🥳</h1> 
          <h1>You got {quizScore} colors right</h1>
        </header>
    </div>
  )
}

export default GameOverScreen;