import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6">
      <div className="bg-white p-10 rounded-lg shadow-xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          🎯 Welcome to the Quiz App
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Test your knowledge and improve your skills!
        </p>

        <div className="flex flex-col space-y-4">
          <button
            onClick={() => navigate("/quiz")}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            🚀 Start Quiz
          </button>
          <button
            onClick={() => navigate("/history")}
            className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-900 transition duration-300 transform hover:scale-105"
          >
            📜 View History
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
