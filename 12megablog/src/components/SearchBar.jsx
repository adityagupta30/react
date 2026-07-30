import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="max-w-xl mx-auto mb-10">
      <input
        type="text"
        placeholder="🔍 Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;