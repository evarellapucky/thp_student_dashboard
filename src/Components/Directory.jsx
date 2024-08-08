import React from "react";
import SearchBar from "./SearchBar";
import { useState } from "react";

function Directory() {

  return (
    <>
      <h1>Annuaire</h1>
      <div className="flex justify-between">
        <SearchBar/>
        <button className="border-2 px-2">Ma promo</button>
      </div>
    </>
  )
}

export default Directory;