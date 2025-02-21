import React from "react";

const Scoreboard = ({ score, total }) => {
  return (
    <div className="text-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Quiz Completed!</h2>
      <p className="text-lg">
        Your Score: {score} / {total}
      </p>
    </div>
  );
};

export default Scoreboard;
