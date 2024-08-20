// AgendaCard.jsx
import penSvg from '../Assets/pen.svg';
import rocketSvg from '../Assets/rocket.svg';

const AgendaCard = ({ title, date, resources, toCorrect, toRender }) => {
  return (
    <div className="relative card bg-base-100 shadow-md rounded-lg p-4 flex items-center">
      {/* Conditionally render the icon */}
      {toCorrect && (
        <div className="absolute top-2 right-2 z-10">
          <img src={penSvg} alt="To Correct" className="w-6 h-6 text-green-600" />
        </div>
      )}
      {toRender && !toCorrect && (
        <div className="absolute top-2 right-2 z-10">
          <img src={rocketSvg} alt="To Render" className="w-6 h-6 text-red-600" />
        </div>
      )}
        <div className="absolute py-2 px-2 text-sm text-white top-0 left-0 bg-success rounded-md -translate-x-3 -translate-y-7 w-18 h-8 flex justify-center items-center">
      <h3 className="text-xl font-semibold ">{title}</h3>
      </div>
      <p className="text-sm text-gray-500 mb-4">{date}</p>
      <div className="flex flex-col gap-2 max-h-56 overflow-y-auto min-h-56 ">
        {resources.length > 0 ? (
          resources.map((resource, index) => (
            <button
              key={index}
              onClick={() => window.location.href = resource.link}
              className="p-2 bg-blue-600 text-white rounded-md hover:bg-gray-800 cursor-pointer"
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

export default AgendaCard;
