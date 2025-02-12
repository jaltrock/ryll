import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Button } from "../../components/Button";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [cache, setCache] = useState(() => {
    // Load saved searches from localStorage (or default to empty object)
    return JSON.parse(localStorage.getItem("searchCache")) || {};
  });
  const [showPrompt, setShowPrompt] = useState(false);
  const [newEntry, setNewEntry] = useState("");

  // Function to save cache to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("searchCache", JSON.stringify(cache));
  }, [cache]);

  const handleSearch = () => {
    if (!query.trim()) return; //Prevent empty searches

    //Check if query already exists in cache
    if (cache[query]) {
      setResults(cache[query]);
      setShowPrompt(false);
    } else {
      //Update state & cache
      setResults([]);
      setShowPrompt(true);
    }
  };

  const handleAddEntry = () => {
    if (!newEntry.trim()) return;
    const newResult = [`New entry: "${newEntry}"`];
    setResults(newResult);
    setCache((prevCache) => {
      const updatedCache = { ...prevCache, [query]: newResult };
      localStorage.setItem("searchCache", JSON.stringify(updatedCache));
      return updatedCache;
    });
    setShowPrompt(false);
    setNewEntry("");
  };

  return (
    <div className="container">
      <h1 className="search-label">Search</h1>
      <h2 className="search-instructions">
        Enter a name or address to continue.
      </h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a search term..."
        className="search-field"
      />
      <Button text="Search" onClick={handleSearch} />
      {showPrompt && (
        <div className="prompt">
          <p>No results found. Would you like to add a new entry?</p>
          <input
            type="text"
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            placeholder="Enter new info..."
            className="newEntryField"
          />
          <Button text="Add Entry" onClick={handleAddEntry} />
        </div>
      )}
      <ul className="search-results">
        {results.map((result, index) => (
          <li key={index} className="search-result-li">
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
