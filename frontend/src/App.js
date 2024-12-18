import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CertificateForm from "./components/CertificateForm";
import QuestionForm from "./components/QuestionForm";
import QuestionList from "./components/QuestionList";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-certificate" element={<CertificateForm />} />
        <Route path="/create-questions" element={<QuestionForm />} />
        <Route path="/all-questions" element={<QuestionList />} />
      </Routes>
    </Router>
  );
}

export default App;
