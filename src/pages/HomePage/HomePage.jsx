import React from "react";
import { useState, useEffect } from "react";
import "./HomePage.css";
import { Button } from "../../components/Button";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [cache, setCache] = useState(() => {
    // Load saved searches from localStorage (or default to empty object)
    return JSON.parse(localStorage.getItem("searchCache")) || {};
  });
  // Function to save cache to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("searchCache", JSON.stringify(cache));
  }, [cache]);

  const handleSearch = () => {
    if (!query.trim()) return; //Prevent empty searches

    //Check if query already exist in cache
    if (cache[query]) {
      setResults(cache[query]);
    } else {
      //Simulate saving user-entered data
      const newResult = [`Result for "${query}"`];

      //Update state & cache
      setResults(newResult);
      setCache((prevCache) => {
        const updatedCache = { ...prevCache, [query]: newResult };
        localStorage.setItem("searchCache", JSON.stringify(updatedCache)); //Save to localStorage
        return updatedCache;
      });
    }
  };

  return (
    <div className="p-4">
      <h1 className="searchLabel">Search</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a search term..."
        className="searchField"
      />

      <Button text="Search" onClick={handleSearch} />

      <ul className="searchResults">
        {results.map((result, index) => (
          <li key={index} className="searchResultLi">
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
