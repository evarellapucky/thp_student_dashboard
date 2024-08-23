import React from "react";
import { useState, useEffect } from "react";
import DirectoryTable from "../DirectoryTable";
import axios from "axios";
import DefaultButton from "../DefaultButton";

function Directory() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [myYear, setMyYear] = useState("2024")
  const [mySeason, setMySeason] = useState("hiver")
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [searchColumn, setSearchColumn] = useState("nom")

  useEffect(() => {
      const fetchUsers = async () => {
          try {
              const response = await axios.get(
                  // "https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/Users.json"
                  "https://raw.githubusercontent.com/tommy-pellerin/json_refont_thp/main/Users.json"
              );
              // console.log(response.data.users);
              // Je ne prends que les colonne que je souhaite
              const selectedData = response.data.users.map(user => ({
                nom: user.nom,
                prenom: user.prenom,
                github: user.github,
                linkedin: user.linkedin,
                journey: user.journey,
                season: user.season,
                year: user.year,
                job: user.job,
                company: user.company
              }));
              setData(selectedData);
          } catch (error) {
              console.error("Erreur lors de la récupération des users :", error);
          }
      };

      fetchUsers();

  }, []);

  //fonction pour afficher les liste filtrée sur ma promo ou non
  const toggleFilter = () => {
    setIsFiltered(!isFiltered);
  };
  //je filtre sur ma promo
  const filteredData = isFiltered ? data.filter(item => item.season === mySeason && item.year === myYear) : data;

  //recherche
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  //change de colonne de recherche
  const handleColumnChange = (event) => {
    setSearchColumn(event.target.value.toLowerCase());
  };
  //filtrer par mot clé
  const searchedData = searchTerm
    ? filteredData.filter(item =>
        item[searchColumn] && item[searchColumn].toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredData;

  return (
    <>
      <h1>Annuaire</h1>
      
      <div className="flex flex-wrap justify-between gap-2">
        <div className="flex flex-col md:flex-row gap-1">
          <select className="select select-bordered w-full max-w-xs" onChange={handleColumnChange}>
            <option selected value="nom">Recherche par nom</option>
            <option value="prenom">Recherche par prénom</option>
          </select>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder={`Rechercher par ${searchColumn}`}
              className="grow"
            />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
          </label>
        </div>

        <DefaultButton color="info" onClick={toggleFilter}>{isFiltered ? "Afficher tout" : "Ma promo"}</DefaultButton>
      </div>
      <DirectoryTable data={searchedData}/>
    </>
  )
}

export default Directory;