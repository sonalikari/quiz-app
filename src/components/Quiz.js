import React, { useState, useEffect } from "react";
import Question from "./Question";

const Quiz = ({ questions, onQuizEnd }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion(); 
    }
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      if (
        selectedAnswer.toString().toLowerCase() ===
        questions[currentIndex].answer.toString().toLowerCase()
      ) {
        setScore(score + 1);
      }
    }

    setSelectedAnswer(null);
    setTimer(30);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onQuizEnd(
        score + (selectedAnswer === questions[currentIndex].answer ? 1 : 0)
      );
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">
        Question {currentIndex + 1} / {questions.length}
      </h2>
      <div className="mb-4">
        <span className="text-red-500 font-bold">Time Left: {timer}s</span>
      </div>
      <Question
        question={questions[currentIndex]}
        onAnswer={handleAnswerSelection}
        selectedAnswer={selectedAnswer}
      />
      <button
        onClick={handleNextQuestion}
        className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {currentIndex + 1 === questions.length
          ? "Finish Quiz"
          : "Next Question"}
      </button>
    </div>
  );
};

export default Quiz;
