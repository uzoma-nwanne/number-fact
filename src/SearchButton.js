import react from "react";
import './SearchButton.css';

const SearchButton = ({search}) => {
  return (
    <div className="pa2">
     <button  
     type="button" onClick={search}> Search Number! </button>
    </div>
  );
};

export default SearchButton;
