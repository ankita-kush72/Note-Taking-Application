import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ setSearchQuery }) => {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder=  "Search notes..."
        onChange={handleSearchChange}
        
      />
    </div>
  );
};

export default SearchBar;

