import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import assignees_icon from "../../Assets/assignees_icon.svg";
import comments_icon from "../../Assets/comments_icon.svg";

const truncateText = (text, maxWords) => {
  const wordsArray = text.split(" ");
  if (wordsArray.length <= maxWords) {
    return text;
  }
  return wordsArray.slice(0, maxWords).join(" ") + "...";
};

const MissionCard = ({
  number,
  update,
  title,
  assignees,
  assigneesCount,
  description,
  html_url,
  creator,
  state,
  labels,
  labelColors,
  commentsCount,
}) => {
  // Convertir les labels en un tableau et extraire les couleurs
  const labelArray = labels
    ? labels.split(", ").map((label) => label.trim().toLowerCase())
    : [];

  const trucatedDescription = truncateText(
    description || "No description",
    100
  );

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-5xl mx-auto p-4">
      <div className="flex h-full">
        {/* Section de gauche (1/3) */}
        <div className="p-6 bg-gray-light w-2/5">
          <p className="text-gray-darker text-sm mb-2"># {number}</p>
          <h4 className="font-bold text-gray-darker mb-2">
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h4>
          <p className="text-gray-darker text-sm mb-2">Last Updated: {update}</p>
          <p className="text-gray-darker text-sm mb-2">State: {state}</p>
          <p className="text-gray-darker text-sm mb-2 flex flew-row items-center gap-2">
            <img src={assignees_icon} alt="Assignees icon"/>
            <span>{assigneesCount}</span>
          </p>
          <p className="text-gray-darker text-sm mb-2 flex flex-row items-center gap-2">
            <img src={comments_icon} alt="Comments icon"/>
            <span>{commentsCount}</span>
          </p>
          <div className="text-gray-darker text-sm">
            <p>Labels:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {labelArray.length > 0 ? (
                labelArray.map((label) => (
                  <span
                    key={label}
                    className="inline-block px-3 py-1 rounded-full text-white"
                    style={{
                      backgroundColor: `#${labelColors[label] || "e0e0e0"}`,
                    }} // Utiliser la couleur du label
                  >
                    {label.charAt(0).toUpperCase() + label.slice(1)}
                  </span>
                ))
              ) : (
                <span>None</span>
              )}
            </div>
          </div>
        </div>
        {/* Section de droite (2/3) */}
        <div className="flex flex-col p-6 w-3/5">
          <p className="text-gray-darker text-sm mb-2 flex justify-end">
            Assignees: {assignees || "None"}
          </p>
          <p className="block text-gray-darker">Description:</p>
          {/* <div className='truncate'> */}
          <ReactMarkdown>{trucatedDescription}</ReactMarkdown>
          {/* </div> */}
          <p className="text-gray-darker text-sm mb-2 mt-auto flex justify-end items-end">
            Created by: {creator}
          </p>
        </div>
      </div>
    </div>
  );
};

MissionCard.propTypes = {
  number: PropTypes.number.isRequired,
  update: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  assignees: PropTypes.string,
  assigneesCount: PropTypes.number.isRequired,
  description: PropTypes.string,
  html_url: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  labels: PropTypes.string, 
  labelColors: PropTypes.objectOf(PropTypes.string).isRequired, // Objet de couleurs des labels
  commentsCount: PropTypes.number.isRequired,
};


export default MissionCard;
