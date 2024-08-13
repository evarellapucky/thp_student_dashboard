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
                  "https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/Users.json"
              );
              // console.log(response.data.users);
              // Je ne prends que les colonne que je souhaite
              const selectedData = response.data.users.map(user => ({
                nom: user.nom,
                prenom: user.prenom,
                github: user.github,
                linkedin: user.linkedin,
                journay: user.journay,
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

  // const data = [
  //   { eleve:"Lili Daniels", role:"Manager", entreprise:"The hacking project", promo:"hiver 2024", github:"<a href='https://github.com/lilidaniels' class='hover:underline'>lilidaniels</a>", linkedin:"<a href='https://linkedin.com/in/lilidaniels' class='hover:underline'>lilidaniels</a>" },
  //   { eleve:"James", role:"Developer", entreprise:"Tech Corp", promo:"été 2023", github:"<a href='https://github.com/james' class='hover:underline'>james</a>", linkedin:"<a href='https://linkedin.com/in/james' class='hover:underline'>james</a>" },
  //   { eleve:"Seth McDaniel", role:"Designer", entreprise:"Facebook", promo:"printemps 2024", github:"<a href='https://github.com/sethmc' class='hover:underline'>setmc</a>", linkedin:"<a href='https://linkedin.com/in/SethMcDaniel' class='hover:underline'>Seth McDaniel</a>" },
  //   { eleve:"Edward King", role:"Product owner", entreprise:"Doctolib", promo:"été 2019", github:"<a href='https://github.com/eking' class='hover:underline'>eKing</a>", linkedin:"<a href='https://linkedin.com/in/EdwardKing' class='hover:underline'>Edward King</a>" },
  // ];

  //je filtre sur ma promo
  const toggleFilter = () => {
    setIsFiltered(!isFiltered);
  };

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