import React, { useState } from "react";
import api from "../api/axiosConfig";

const SideBar = () => {

  return (
    <div className="w-1/5 bg-white border-r shadow-md p-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Admin Panel</h2>
        <ul className="space-y-4">
          <li className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
            <a href="/">Dashboard</a>
          </li>
          <li className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
            <a href="/all-questions">Questions List</a>
          </li>
          <li className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
            <a href="/create-certificate">Add Certificate</a>
          </li>
          <li className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
            <a href="/create-questions">Add Questions</a>
          </li>
        </ul>
      </div>
  );
};

export default SideBar;
