import React from "react";

function WeekDay() {
  return (
    <div className="card left-7 top-7 bg-base-100 w-96">
      <div className="card bg-base-100 w-96">
        <div className="relative">
          <div className="absolute py-2 px-2 text-sm top-0 left-0 bg-blue-400 rounded-md transform -translate-x-3 -translate-y-5 shadow-xl">
            <div className="text-white font-semibold">Lundi</div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title mb-2">Mon Parcours</h2>

      </div>
    </div>
  );
}

export default WeekDay;
