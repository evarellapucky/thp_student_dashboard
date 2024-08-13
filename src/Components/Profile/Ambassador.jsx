import React from "react";

function Ambassador() {
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