import React from "react";

import "./HomePage.css";
import { Button } from "../../components/Button";

const HomePage = () => {
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const searchResults = [
      //API call
    ];
    setResults(searchResults);
  };

  return (
    <div>
      <h1 className="llsearch">Search by Name</h1>
      {/* Search Button */}
      <Button text="Search" onClick={handleSearch} />
      {/* Display Search Results */}
      <ul className="name-search-results">
        {results.length > 0 ? (
          results.map((result, index) => (
            <li key={index} className="name-search-results-list">
              {result}
            </li>
          ))
        ) : (
          <p>No results found</p>
        )}
      </ul>
    </div>
  );
};

export default HomePage;
