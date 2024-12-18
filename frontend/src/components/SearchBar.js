// src/components/SearchBar.js
import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="p-2">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by question or category..."
        className="border p-2 w-full"
      />
    </div>
  );
};

export default SearchBar;
