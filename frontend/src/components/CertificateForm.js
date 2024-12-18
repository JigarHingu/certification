import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";
import SideBar from "./Sidebar";
import NavBar from "./Navbar";

const CertificateForm = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const addCertificate = async () => {
    try {
      await api.post("/categories", { name });
      setName("");
      alert("Certificate added successfully!");
      navigate("/create-questions");
      
    } catch (error) {
      console.error("Error adding Certificate:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar/>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <NavBar/>

        {/* Form Section */}
        <div className="p-6 flex items-center justify-center h-full">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">
              Add New Certificate
            </h2>
            <input
              type="text"
              placeholder="Certificate Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              onClick={addCertificate}
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
            >
              Add Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateForm;
