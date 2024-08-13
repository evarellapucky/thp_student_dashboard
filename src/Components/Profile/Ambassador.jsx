import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import TooltipIcon from "../TooltipIcon/TooltipIcon";

function Ambassador() {
  const [godchildren, setGodchildren] = useState([]);

  const tutorialText = `
  Pourquoi parrainer ?

  On te verse 5% du montant de la formation choisie par le parrainé 
  ex: Jean-Paul parraine Elodie, qui choisit la formation Dev++ à 3000 euros, c'est donc 150 € dans la poche de J-P.
  ⚠️ Le programme n'est pas rétroactif : cela ne concerne que les nouvelles inscriptions.
  `

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
      <div className="flex justify-between">
        <div className='flex flex-row gap-3 items-center'>    
          <h1 className='font-bold text-black text-3xl ml-5'>Ambassadeur</h1>
          <TooltipIcon text={tutorialText} />
        </div>
        <div className="border-2 rounded-lg flex justify-between p-3">
          <p>Mon lien d'affiliation :</p>
          <p className="mx-5 max-w-60 overflow-x-auto">https://www.thehackingproject.org/samanthaBelzebuth</p>
        </div>
      </div>
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