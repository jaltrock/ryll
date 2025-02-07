import React from "react";
import { useState } from "react";
import "./HomePage.css";
import { Button } from "../../components/Button";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [cache, setCache] = useState({});

  const handleSearch = async () => {
    if (!query.trim()) return; //Prevent empty searches

    //Check if results exist in cache
    if (cache[query]) {
      setResults(cache[query]);
    } else {
      //Simulate saving user-entered data
      const newResult = [`Result for "${query}"`];

      //Update state & cache
      setResults(newResult);
      setCache((prevCache) => ({
        ...prevCache,
        [query]: newResult,
      }));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a search term..."
        className="border p-2 mr-2"
      />

      <Button text="Search" onClick={handleSearch} />

      <ul className="mt-4">
        {results.map((result, index) => (
          <li key={index} className="border p-2 my-1">
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
