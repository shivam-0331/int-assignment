import React from "react";

const SearchBar = ({
  value,
  handleChange,
  selecctedOption,
  handleDropDownChange,
  handleClick,
  handleClear,
}) => {
  return (
    <div className="search-container">
      <div className="left-section">
        <input type="text" value={value} onChange={handleChange} />
        <select
          id="options"
          value={selecctedOption}
          onChange={handleDropDownChange}
        >
          <option value="">Population</option>
          <option value="1M">1 M</option>
          <option value="5M">5 M</option>
          <option value="10M">10 M</option>
        </select>
        <span
          onClick={handleClear}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Clear
        </span>
      </div>
      <div className="right-section">
        <button
          onClick={handleClick}
          style={{ backgroundColor: "blue", color: "white", cursor: "pointer" }}
        >
          Show all Countries
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
