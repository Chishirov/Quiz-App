import React, { useState } from "react";
import questions from "./questions.json";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Sie haben  {score} von {questions.length} punkten 
          <button style={{marginLeft: "20px"}} onClick={handleRestartQuiz}>Restart</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Frage {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}
