import React from "react";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Table from "./Table";

function Directory() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [myClass, setMyClass] = useState("été 2019")

  const columns = [
    { key: 'eleve', label: 'Eleve' },
    { key: 'role', label: 'Role' },
    { key: 'entreprise', label: 'Entreprise' },
    { key: 'promo', label: 'Promo' },
    { key: 'github', label: 'Github' },
    { key: 'linkedin', label: 'Linkedin' },
  ];
  const data = [
    { eleve:"Lili Daniels", role:"Manager", entreprise:"The hacking project", promo:"hiver 2024", github:"<a href='https://github.com/lilidaniels' class='hover:underline'>lilidaniels</a>", linkedin:"<a href='https://linkedin.com/in/lilidaniels' class='hover:underline'>lilidaniels</a>" },
    { eleve:"James", role:"Developer", entreprise:"Tech Corp", promo:"été 2023", github:"<a href='https://github.com/james' class='hover:underline'>james</a>", linkedin:"<a href='https://linkedin.com/in/james' class='hover:underline'>james</a>" },
    { eleve:"Seth McDaniel", role:"Designer", entreprise:"Facebook", promo:"printemps 2024", github:"<a href='https://github.com/sethmc' class='hover:underline'>setmc</a>", linkedin:"<a href='https://linkedin.com/in/SethMcDaniel' class='hover:underline'>Seth McDaniel</a>" },
    { eleve:"Edward King", role:"Product owner", entreprise:"Doctolib", promo:"été 2019", github:"<a href='https://github.com/eking' class='hover:underline'>eKing</a>", linkedin:"<a href='https://linkedin.com/in/EdwardKing' class='hover:underline'>Edward King</a>" },
  ];

  const toggleFilter = () => {
    setIsFiltered(!isFiltered);
  };

  const filteredData = isFiltered ? data.filter(item => item.promo === myClass) : data;

  return (
    <>
      <h1>Annuaire</h1>
      <div className="flex justify-between">
        <SearchBar/>
        <button className="border-2 px-2" onClick={toggleFilter}>
          {isFiltered ? "Afficher tout" : "Ma promo"}
        </button>
      </div>
      <Table columns={columns} data={filteredData}/>
    </>
  )
}

export default Directory;