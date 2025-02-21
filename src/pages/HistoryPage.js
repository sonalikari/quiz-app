import React, { useEffect, useState } from "react";
import { getAttempts } from "../utils/db";
import History from "../components/History";

const HistoryPage = () => {
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await getAttempts();
      setAttempts(data.reverse()); 
    };
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <History attempts={attempts} />
      </div>
    </div>
  );
};

export default HistoryPage;
