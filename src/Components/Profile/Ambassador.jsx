import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
function Ambassador() {
  const [godchildren, setGodchildren] = useState([]);

  useEffect(() => {
    
    const fetchGodchildren = async () => {
        try {
            const response = await axios.get(
              "https://raw.githubusercontent.com/tommy-pellerin/json_refont_thp/main/Godchildren.json"
            );
            console.log(response.data);
            setGodchildren(response.data.godchildren);
        } catch (error) {
            console.error("Erreur lors de la récupération des users :", error);
        }
    };

    fetchGodchildren();

}, []);

  return(
    <>
      <h1>Ambassadeur</h1>
      <div>
        <div className="flex justify-around my-5">
          <div className="border-2 flex gap-5 p-5">
            <p>Nombre de point THP gagnés :</p>
            <p>3500</p>
          </div>
          <div className="border-2 flex gap-5 p-5">
            <p>Montant de ma gagnotte :</p>
            <p>350€</p>
          </div>
          <div className="border-2 flex gap-5 p-5">
            <p>Nombre de filleuls :</p>          
            <p>4</p>
          </div>
        </div>
        <div>
          <h2>Liste de parrainage</h2>
        </div>
      </div>
    </>
  )
}

export default Ambassador;