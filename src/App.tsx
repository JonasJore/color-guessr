import { useEffect, useState } from 'react';
import './App.css';
import GameOverScreen from './components/GameOverScreen';
import { setBackground, generateColorHex } from './setBackground';

function App(): JSX.Element {
  const [score, setScore] = useState(0);
  const [color, setColor] = useState(generateColorHex());
  const [questionNumber, setQuestionNumber] = useState(1);

  useEffect(() => {
    setBackground(color)
  }, [color]);

  const mockAnswer1: string = generateColorHex();
  const mockAnswer2: string = generateColorHex();

  if (questionNumber !== 10) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Score: {score}</h1>
          <p>GUESS THE COLOR 🎨</p>
          <div className="Alternatives-row">
            {
              [mockAnswer1, mockAnswer2, color]
                .map((item, index) => <button id="Alternatives-button" className="Alternatives-button" key={index} onClick={() => {
                  if (item === color) {
                    setScore(score + 1);
                  }
                  setColor(generateColorHex())
                  setBackground(color)
                  setQuestionNumber(questionNumber + 1)
                }}>
                  <h2>{item}</h2>
                </button>)
                .sort((a, b) => 0.5 - Math.random())
            }
          </div>
          <h1>{questionNumber}/10</h1>
        </header>
      </div>)
  } else {
    return (
      <GameOverScreen quizScore={score} onReset={() => {
        setScore(0);
        setQuestionNumber(1);
      }
      } />
    );
  }
}

export default App;
