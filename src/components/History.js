import React from "react";

const History = ({ attempts }) => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        🕒 Quiz Attempt History
      </h2>

      {attempts.length === 0 ? (
        <p className="text-gray-600 text-center">No quiz attempts found.</p>
      ) : (
        <ul className="space-y-4">
          {attempts.map((attempt, index) => (
            <li
              key={index}
              className="p-4 bg-gray-100 rounded-lg flex justify-between items-center shadow-md hover:shadow-lg transition"
            >
              <div>
                <p className="text-gray-700 font-medium">
                  📅 <span className="font-semibold">{attempt.date}</span>
                </p>
                <p className="text-gray-600 text-sm">
                  Score:{" "}
                  <span className="text-blue-600 font-bold">
                    {attempt.score} / 10
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
