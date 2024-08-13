import React from "react";
import { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de recherche ou soumission
    console.log("Recherche soumise pour :", searchTerm);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex">
        <div className="flex border-2 w-72">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 m-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Rechercher un/une élève..."
            className="w-full"
          />
        </div>
        <button type="submit" className="border-2 mx-2 px-2">Rechercher</button>
      </form>
    </>
  )
}

export default SearchBar;