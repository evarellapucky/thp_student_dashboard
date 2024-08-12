import React from "react";

function MyJourney() {
  return (
    <>
      <h1>Mon parcours</h1>
      <div className="flex gap-5">
        <div>

          <ul className="steps steps-vertical">
            <li data-content="✓" className="step step-primary my-1">
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

            <li data-content="✓" className="step step-primary my-1">
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

            <li data-content="..." className="step step-primary my-1">
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

            <li data-content="✕" className="step my-1">
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