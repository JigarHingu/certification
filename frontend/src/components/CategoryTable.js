// src/components/CategoryTable.js
import React from "react";

const CategoryTable = ({ categories }) => (
<table className="border-collapse border border-gray-400 w-full">
  <thead>
    <tr>
      <th className="border p-2">Category Name</th>
    </tr>
  </thead>
  <tbody>
    {categories.map((category) => (
      <tr key={category._id}>
        <td className="border p-2">{category.name}</td>
      </tr>
    ))}
  </tbody>
</table>

);

export default CategoryTable;
