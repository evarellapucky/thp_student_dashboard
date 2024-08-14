import React from "react";
import SearchBar from "../SearchBar";
import { useState, useEffect } from "react";
import DirectoryTable from "../DirectoryTable";
import axios from "axios";

function Directory() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [myYear, setMyYear] = useState("2024")
  const [mySeason, setMySeason] = useState("hiver")
  const [data, setData] = useState([])

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

  return (
    <>
      <h1>Annuaire</h1>
      <div className="flex justify-between">
        <SearchBar/>
        <button className="border-2 px-2" onClick={toggleFilter}>
          {isFiltered ? "Afficher tout" : "Ma promo"}
        </button>
      </div>
      <DirectoryTable data={filteredData}/>
    </>
  )
}

export default Directory;