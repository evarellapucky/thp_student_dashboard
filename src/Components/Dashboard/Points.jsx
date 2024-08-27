import React from "react";
import { Link } from "react-router-dom";
import mes_points_icon from "../../Assets/mes_points_icon.svg";

function Points() {
  return (
<div className="card bg-gray-light w-5/6 sm:w-80 h-56 shadow-out">
  <Link to="/shop">
    <div className="relative">
      <div className="absolute py-2 px-2 text-sm text-white top-0 left-0 bg-warning rounded-md -translate-x-3 -translate-y-5 shadow-xl">
    <img src={mes_points_icon} alt="Icône points" />
      </div>
    </div>
    <div className="card-body">
      <h2 className="card-title text-lg sm:text-xl">Mes points</h2>
      <div className="flex flex-col items-center p-2 mt-2 gap-3 sm:gap-5">
      <div className="font-semibold text-2xl lg:text-2xl sm:text-base custom-pulse">23 575</div>
        <div className="font-semibold text-sm sm:text-base">Rank : 10e</div>
      </div>

      <div className="card-actions justify-end"></div>
    </div>
  </Link>
</div>

  );
}

export default Points;
