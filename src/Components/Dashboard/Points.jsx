import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import mes_points_icon from "../../Assets/mes_points_icon.svg";

function Points({ points, rank }) {
  return (
    <div className="card bg-base-100 w-5/6 max-w-80 xl:w-full h-44 shadow-out">
      <div className="relative">
        <div className="absolute py-2 px-2 text-sm text-white top-0 left-0 bg-warning rounded-md -translate-x-3 -translate-y-5 shadow-lightOut">
          <img src={mes_points_icon} alt="Icône points" />
        </div>
      </div>
      <Link to="/shop">
        <div className="card-body">
          <h4 className="card-title">Mes points</h4>
          <div className="flex flex-col items-center p-2 mt-2 gap-3 sm:gap-5">
            <h3 className="font-semibold custom-pulse">{points}</h3>
            <h5 className="font-semibold">Rank : {rank}</h5>
          </div>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
    </div>
  );
}

Points.propTypes = {
  points: PropTypes.number.isRequired,
  rank: PropTypes.string.isRequired,
};

export default Points;
