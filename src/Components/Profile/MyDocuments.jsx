import React from "react";
function MyDocuments() {

  return(
    <>
      <h1>Mes documents</h1>
      <div className="flex">
        <div className="flex flex-col items-center gap-5 w-full">
          <a className="flex justify-between gap-5 w-full sm:max-w-xl border-2 p-3" href="https://github.com/tommy-pellerin/json_refont_thp/raw/main/youhavebeenhacked.pdf" download="Attestation_d_inscription_en_formation.pdf">
            <p>Attestation d'inscription en formation</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a>

          <a className="flex justify-between gap-5 w-full sm:max-w-xl border-2 p-3" href="https://github.com/tommy-pellerin/json_refont_thp/raw/main/youhavebeenhacked.pdf" download="Attestation_d_entree_en_formation.pdf">
            <p>Attestation d'entrée en formation</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a>

          <a className="flex justify-between gap-5 w-full sm:max-w-xl border-2 p-3" href="https://github.com/tommy-pellerin/json_refont_thp/raw/main/youhavebeenhacked.pdf" download="Attestation_de_fin_de_formation.pdf">
            <p>Attestation de fin de formation</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a>

          <a className="flex justify-between gap-5 w-full sm:max-w-xl border-2 p-3" href="https://github.com/tommy-pellerin/json_refont_thp/raw/main/youhavebeenhacked.pdf" download="Convention_de_stage.pdf">
            <p>Convention de stage</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a>
        </div>

      </div>
    </>
  )
}

export default MyDocuments;