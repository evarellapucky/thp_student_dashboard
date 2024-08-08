import React from "react";
import { Link } from "react-router-dom";

function DayCard() {
  return (
    <>
    <div className="card left-3 bg-base-100 max-w-72 shadow-xl relative">
      <div className="flex justify-center items-center">
        <div className="absolute py-2 px-2 text-sm text-white top-0 left-0 bg-success rounded-md -translate-x-3 -translate-y-7 w-32">
          <div className="text-lg font-bold text-center">Jour</div>
        </div>
      </div>
      <div className="card-body items-center max-w-72 max-h-96 overflow-y-auto overflow-x-hidden">
        <Link to="/resource">
          <div className="btn btn-info w-48">
          Git et Github : comment sauvegarder son travail façon pro 
          </div>
        </Link>
        <Link to="/resource">
          <div className="rounded-lg border bg-sky-600 text-black font-semibold w-48">
          Ce que le web nous propose : quels outils nous recommandons pour gagner du temps de productivité
          </div>
        </Link>
        <Link to="/resource">
          <div className="btn btn-info w-48">
          Git et Github : comment sauvegarder son travail façon pro 
          </div>
        </Link>
        <Link to="/resource">
          <div className="btn btn-info w-48">
          Git et Github : comment sauvegarder son travail façon pro 
          </div>
        </Link>
        <Link to="/resource">
          <div className="btn btn-info w-48">
          Git et Github : comment sauvegarder son travail façon pro 
          </div>
        </Link>
        <Link to="/resource">
          <div className="btn btn-info w-48">
          Git et Github : comment sauvegarder son travail façon pro 
          </div>
        </Link>
        <Link to="/resource">
          <div className="btn btn-info w-48">
          Git et Github : comment sauvegarder son travail façon pro 
          </div>
        </Link>
        <Link to="/resource">
          <div className="btn btn-info w-48">
          Git et Github : comment sauvegarder son travail façon pro 
          </div>
        </Link>
      </div>
    </div>
</>
  );
}

export default DayCard;
