import React from "react";
import { Link } from "react-router-dom";

function ProjectCard() {
  return (
    <div className="card top-7 bg-base-100 w-96 shadow-xl">
      <div className="card bg-base-100 w-96">
        <div className="relative">
          <div className="absolute py-2 px-2 text-lg font-bold text-white top-0 left-0 bg-gray-800 rounded-md -translate-x-3 -translate-y-5 shadow-xl">
            <div>Projets THP</div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="flex flex-col items-center p-2 mt-5 gap-5">
          <Link to="/projets_fullstack">
            <div className="font-semibold">Projets Finaux Fullstack</div>
          </Link>
          <Link to="/projets_developpeurs">
            <div className="font-semibold">Projets Finaux Développeurs</div>
          </Link>

        </div>

        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}

export default ProjectCard;
