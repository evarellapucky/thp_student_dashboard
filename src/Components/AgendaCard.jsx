// AgendaCard.jsx
import { useNavigate } from "react-router-dom";
import penSvg from "../Assets/pen.svg";
import rocketSvg from "../Assets/rocket.svg";
import PropTypes from "prop-types";

const AgendaCard = ({ title, date, resources, toCorrect, toRender }) => {
  const navigate = useNavigate();

  const handleResourceClick = (resource) => {
    navigate("/resource", { state: { resource } });
  };

  return (
    <div className="relative card bg-base-100 shadow-out rounded-lg p-4 flex w-60 h-88 mt-6">
      {/* Conditionally render the icon */}
      {toCorrect && (
        <div className="absolute top-2 right-2 ">
          <img src={penSvg} alt="To Correct" className="w-6 h-6" />
        </div>
      )}
      {toRender && !toCorrect && (
        <div className="absolute top-2 right-2 ">
          <img
            src={rocketSvg}
            alt="To Render"
            className="w-6 h-6 text-red-600"
          />
        </div>
      )}
      <div className="absolute py-2 px-2 text-white top-0 left-0 bg-success rounded-md -translate-x-3 -translate-y-7 w-24 h-10 flex justify-center items-center">
        <h4>{title}</h4>
      </div>
      <p className="text-sm text-gray-darker my-4">{date}</p>
      <div className="flex flex-col gap-2 max-h-95 overflow-y-auto min-h-56 scrollbar-thin scrollbar-track-transparent">
        {resources.length > 0 ? (
          resources.map((resource, index) => (
            <button
              key={index}
              onClick={() => handleResourceClick(resource)}
              className={`p-2 text-white text-md rounded-md hover:bg-gradient hover:text-secondary cursor-pointer ${
                resource.isProject ? "bg-red-500 hover:text-red-500" : "bg-blue-gradient"
              }`}
            >
              {resource.title}
            </button>
          ))
        ) : (
          <p>Aucune ressource disponible</p>
        )}
      </div>
    </div>
  );
};

AgendaCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string,
    })
  ).isRequired,
  toCorrect: PropTypes.bool,
  toRender: PropTypes.bool,
  isProject: PropTypes.bool,
};

export default AgendaCard;
