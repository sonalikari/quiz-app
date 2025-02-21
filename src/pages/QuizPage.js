import React, { useState } from "react";
import { questions } from "../utils/questions";
import Quiz from "../components/Quiz";
import { saveAttempt } from "../utils/db";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const navigate = useNavigate();

  const handleQuizEnd = async (score) => {
    setFinalScore(score);
    setQuizCompleted(true);

    // Save attempt to IndexedDB
    const attempt = { date: new Date().toLocaleString(), score };
    await saveAttempt(attempt);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      {!quizCompleted ? (
        <Quiz questions={questions} onQuizEnd={handleQuizEnd} />
      ) : (
        <div className="max-w-lg p-6 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="mt-4 text-lg">
            Your Score: {finalScore} / {questions.length}
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Go to Home
          </button>
          <button
            onClick={() => navigate("/history")}
            className="mt-4 ml-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            View History
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
