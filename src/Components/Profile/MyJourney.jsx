import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function MyJourney() {
  const [myId, setMyId] = useState("16");
  const [myjourney, setMyjourney] = useState("");
  const [introStatus, setIntroStatus] = useState("X");
  const [fullstackStatus, setFullstackStatus] = useState("X");
  const [devStatus, setDevStatus] = useState("X");
  const [devplusplusStatus, setDevplusplusStatus] = useState("X");
  const [introClass, setIntroClass] = useState("");
  const [fullstackClass, setFullstackClass] = useState("");
  const [devClass, setDevClass] = useState("");
  const [devplusplusClass, setDevplusplusClass] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
        try {
            const response = await axios.get(
                // "https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/Users.json"
                "https://raw.githubusercontent.com/tommy-pellerin/json_refont_thp/main/Users.json"
            );
            // On ne peut pas utiliser une URL dynamique car on utilise un JSON statique sur Github. On doit d'abord récupérer le fichier JSON complet, puis filtrer les données pour obtenir l'utilisateur spécifique
            const selectedUser = response.data.users.find(user => user.id === myId);
            console.log(selectedUser.journey);
            setMyjourney(selectedUser.journey);
        } catch (error) {
            console.error("Erreur lors de la récupération des users :", error);
        }
    };

    fetchUser();

  }, [myId]);

  const whichJourneyAmI = (journey) => {
    switch(journey) {
      case "INTRO":
        setIntroStatus("...")
        setFullstackStatus("✕")
        setDevStatus("✕")
        setDevplusplusStatus("✕")
        setIntroClass("step-primary")
        setFullstackClass("")
        setDevClass("")
        setDevplusplusClass("")
        break
      case "FULLSTACK":
        setIntroStatus("✓")
        setFullstackStatus("...")
        setDevStatus("✕")
        setDevplusplusStatus("✕")
        setIntroClass("step-primary")
        setFullstackClass("step-primary")
        setDevClass("")
        setDevplusplusClass("")
        break
      case "DEV":
        setIntroStatus("✓")
        setFullstackStatus("✓")
        setDevStatus("...")
        setDevplusplusStatus("✕")
        setIntroClass("step-primary")
        setFullstackClass("step-primary")
        setDevClass("step-primary")
        setDevplusplusClass("")
        break
      case "DEV++":
        setIntroStatus("✓")
        setFullstackStatus("✓")
        setDevStatus("...")
        setDevplusplusStatus("...")
        setIntroClass("step-primary")
        setFullstackClass("step-primary")
        setDevClass("step-primary")
        setDevplusplusClass("step-primary")
        break
      default:
        setIntroStatus("✕")
        setFullstackStatus("✕")
        setDevStatus("✕")
        setDevplusplusStatus("✕")
        setIntroClass("")
        setFullstackClass("")
        setDevClass("")
        setDevplusplusClass("")
        break
    }
  }

  useEffect(() => {
    whichJourneyAmI(myjourney);
  }, [myjourney]);

  return (
    <>
      <h1>Mon parcours</h1>
      <div className="flex gap-5">
        <div>

          <ul className="steps steps-vertical">
            <li data-content={`${introStatus}`} className={`step ${introClass} my-1`}>
              <div className="border-2 p-3">
                <h4 className="text-left">INTRODUCTION</h4>
                <div className="text-left">
                  <p>3 semaines intenses</p>
                  <p>Semaine d'introduction, 3 semaines</p> 
                  <ul className="list-disc ml-4 ps-5">
                    <li>Apprendre</li>
                    <li>à</li>
                    <li>coder</li>
                  </ul>
                  <p>Apprenez à coder</p>
                </div>            
              </div>
            </li>

            <li data-content={`${fullstackStatus}`} className={`step ${fullstackClass} my-1`}>
              <div className="border-2 p-3">
                <h4 className="text-left">FULLSTACK</h4>
                <div className="flex">
                  <div className="text-left">
                    <p>12 semaines intenses</p>
                    <p>En 12 semaines de formation intensive, vous pourrez :</p> 
                    <ul className="list-disc ml-4 ps-5">
                      <li><strong>Créer</strong> votre projet entrepreneurial</li>
                      <li><strong>Initier</strong> votre nouvelle carrière dans le digital</li>
                      <li><strong>Augmenter</strong> votre employabilité</li>
                    </ul>
                    <p>Apprenez à coder et construisez votre expertise</p>
                  </div>
                  <div className="flex items-end">
                    <button className="border-2">Poursuivre</button>
                  </div>
                </div>
              </div>
            </li>

            <li data-content={`${devStatus}`} className={`step ${devClass} my-1`}>
              <div className="border-2 p-3">
                <h4 className="text-left">DEVELOPPEUR</h4>
                <div className="flex">
                  <div className="text-left">
                    <p>12 semaines intenses</p>
                    <p>En 24 semaines de formation intensive, vous pourrez :</p> 
                    <ul className="list-disc ml-4 ps-5">
                      <li><strong>Initier</strong> votre nouvelle carrière dans le digital</li>
                      <li><strong>Devenir</strong> dév web</li>
                      <li><strong>Obtenir</strong> un CDI de Dév</li>
                    </ul>
                    <p>Devenez dév web et construisez votre expertise</p>
                  </div>
                  <div className="flex items-end">
                    <button className="border-2">Poursuivre</button>
                  </div>
                </div>
              </div>
            </li>

            <li data-content={`${devplusplusStatus}`} className={`step ${devplusplusClass} my-1`}>
              <div className="border-2 p-3">
                <h4 className="text-left">DELOPPEUR++</h4>
                <div className="flex">
                  <div className="text-left">
                    <p>12 semaines intenses et 8 semaines d'insertion pro</p>
                    <p>En 32 semaines de formation intensive, vous pourrez :</p> 
                    <ul className="list-disc ml-4 ps-5">
                      <li><strong>Initier</strong> votre nouvelle carrière dans le digital</li>
                      <li><strong>Devenir</strong> dév web, freelance on CDI</li>
                      <li><strong>Obtenir</strong> titre RNCP niveau 5</li>
                    </ul>
                    <p>Devenez dév web inséré sur le marché du travail</p>
                  </div>
                  <div className="flex items-end">
                    <button className="border-2">Poursuivre</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>Débloque des cours DAO en terminant les modules THP</p>
          <div className="border-2 rounded-full w-24 h-24 flex items-center justify-center m-5">DAO</div>          
        </div>
      </div>

    </>
  )
}

export default MyJourney;