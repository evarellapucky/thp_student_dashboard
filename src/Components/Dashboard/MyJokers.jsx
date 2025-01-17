import PropTypes from "prop-types"; // Importation de PropTypes pour la validation des types
import Joker from "./Joker";
import JokerImage from "../../Assets/LostJoker.png";
import my_jokers_icon from "../../Assets/my_jokers_icon.svg";

const MyJokers = ({ count, total }) => {
  const jokersToDisplay = Array.from({ length: count });

  return (
    <div className="card bg-base-100 w-5/6 max-w-80 xl:w-full h-44 shadow-out">
      <div className="relative">
        <div className="absolute py-2 px-2 text-sm text-white top-0 left-0 bg-error rounded-md -translate-x-3 -translate-y-5 shadow-lightOut">
          <img src={my_jokers_icon} alt="Icône jokers" />
        </div>
      </div>

      <div className="card-body">
        <h4 className="card-title">Mes jokers</h4>
        <div className="flex items-center justify-center"></div>
        <div className="flex flex-row justify-center gap-2">
          {jokersToDisplay.map((_, index) => (
            <div
              key={index}
              className="joker-container hover:scale-110 hover:rotate-3 transition-transform duration-300 ease-in-out"
            >
              <Joker />
            </div>
          ))}
          {Array.from({ length: total - count }).map((_, index) => (
            <div
              key={index}
            >
              <img
                src={JokerImage}
                className="mt-3 h-16"
                alt="joker perdu"
              />
            </div>
          ))}
        </div>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

MyJokers.propTypes = {
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default MyJokers;
