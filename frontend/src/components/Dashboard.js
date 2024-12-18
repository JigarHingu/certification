import React, { useState, useEffect } from "react";
import axios from "../api/axiosConfig";
import SideBar from "./Sidebar";
import NavBar from "./Navbar";
import SearchBar from "./SearchBar";
import CategoryTable from "./CategoryTable";
import QuestionTable from "./QuestionTable";

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await axios.get("/categories"); // Fetch categories
        setCategories(categoryResponse.data);

        const questionResponse = await axios.get("/questions"); // Fetch questions
        setQuestions(questionResponse.data);
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      }
    };
    fetchData();
  }, []);

  const filteredQuestions = questions.filter(
    (q) =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.certificate?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <NavBar />

        {/* Dashboard Widgets */}
        <div className="p-6 flex flex-wrap gap-6">
          <div className="w-1/4 bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700">Total Categories</h3>
            <p className="text-2xl font-bold text-blue-600">{categories.length}</p>
          </div>

          <div className="w-1/4 bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700">Total Questions</h3>
            <p className="text-2xl font-bold text-green-600">{questions.length}</p>
          </div>

          <div className="w-1/4 bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700">Search Results</h3>
            <p className="text-2xl font-bold text-yellow-600">{filteredQuestions.length}</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-6">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>

        {/* Tables */}
        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Categories</h2>
          <CategoryTable categories={categories} />

          <h2 className="text-lg font-bold text-gray-800 mb-4 mt-8">Questions</h2>
          <QuestionTable questions={filteredQuestions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
