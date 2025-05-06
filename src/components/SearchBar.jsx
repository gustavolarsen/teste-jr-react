import React from "react";

const SearchBar = ({ onSearch, onClear }) => {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="search">
      <h2>Search</h2>
      <input
        type="text"
        placeholder="Search users..."
        onChange={handleInputChange}
      />
      <button onClick={onClear}>Clear</button>
    </div>
  );
};

export default SearchBar;
