// src/components/QuestionTable.js
import React from "react";

const QuestionTable = ({ questions }) => (
  <table className="border-collapse border border-gray-400 w-full">
    <thead>
      <tr>
        <th className="border p-2">Question</th>
        <th className="border p-2">Category</th>
      </tr>
    </thead>
    <tbody>
      {questions.map((question) => (
        <tr key={question._id}>
          <td className="border p-2">{question.question}</td>
          <td className="border p-2">{question.certificate.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default QuestionTable;
