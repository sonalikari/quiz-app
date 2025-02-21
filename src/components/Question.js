import React from "react";

const Question = ({ question, onAnswer, selectedAnswer }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">{question.question}</h2>
      <div className="flex flex-col space-y-2">
        {question.type === "MCQ" ? (
          question.options.map((option, index) => (
            <button
              key={index}
              className={`px-4 py-2 border rounded-lg ${
                selectedAnswer === option
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => onAnswer(option)}
            >
              {option}
            </button>
          ))
        ) : (
          <input
            type="number"
            placeholder="Enter your answer"
            className="px-4 py-2 border rounded-lg w-full"
            value={selectedAnswer || ""}
            onChange={(e) => onAnswer(e.target.value)}
          />
        )}
      </div>
    </div>
  );
};

export default Question;
