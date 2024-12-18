import React, { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import SideBar from "./Sidebar"; // Sidebar import
import NavBar from "./Navbar";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await api.get("/questions");
      setQuestions(response.data);
      console.log('Question List Data',response.data);
      
    };
    fetchQuestions();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <NavBar/>

        {/* Questions List Section */}
        <div className="p-6 flex items-center justify-center h-full">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">All Questions</h2>

            {/* Questions List */}
            <ul className="space-y-4">
              {questions.map((q) => (
                <li
                  key={q._id}
                  className="p-4 border rounded-lg hover:bg-gray-50 shadow-md transition duration-300"
                >
                  <div className="text-lg font-semibold">{q.question}</div>
                  <div className="text-sm text-gray-600">Certificate: {q.certificate.name}</div>
                </li>
              ))}
            </ul>

            {/* If no questions available */}
            {questions.length === 0 && (
              <div className="text-center text-gray-500 mt-4">No questions available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
