import React, { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import SideBar from "./Sidebar"; // Sidebar import

const QuestionForm = () => {
  const [categories, setCategories] = useState([]);
  const [question, setQuestion] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await api.get("/categories");
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  const addQuestion = async () => {
    try {
      await api.post("/questions", { certificate: selectedCertificate, question });
      setQuestion("");
      alert("Question added successfully!");
    } catch (error) {
      console.error("Error adding question:", error);
      alert("Error adding question. Please try again.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Add Question</h1>
        </nav>

        {/* Form Section */}
        <div className="p-6 flex items-center justify-center h-full">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">Add New Question</h2>

            {/* Certificate Selector */}
            <select
              onChange={(e) => setSelectedCertificate(e.target.value)}
              value={selectedCertificate}
              className="w-full border p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Select Certificate</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>

            {/* Question Input */}
            <input
              type="text"
              placeholder="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full border p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            {/* Add Question Button */}
            <button
              onClick={addQuestion}
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
            >
              Add Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
