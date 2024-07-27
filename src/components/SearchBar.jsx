import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search notes..."
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;

