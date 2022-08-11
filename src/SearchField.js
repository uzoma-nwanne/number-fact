import react from "react";
import './SearchField.css';

const SearchField = ({searchfield, searchChange}) => {
  return (
    <div className="pa2">
      <input 
        className="pa3 ba b--green bg-lightest-blue input_number"
        type="Search"
        placeholder="Enter Number"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchField;
