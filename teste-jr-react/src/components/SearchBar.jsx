import React from 'react';

const SearchBar = ({ onSearchChange, onClear }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search users..."
        onChange={onSearchChange}
      />
      <button onClick={onClear}>
        Clear
      </button>
    </div>
  );
};

export default SearchBar;