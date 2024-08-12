const MissionCard = ({ id, date, title, assignees, assigneesCount, description, html_url, creator, state, labels, labelColors }) => {
  // Convertir les labels en un tableau et extraire les couleurs
  const labelArray = labels ? labels.split(', ').map(label => label.trim().toLowerCase()) : [];
  
  return (
    <a href={html_url} target="_blank" rel="noopener noreferrer" className="block max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="flex">
          {/* Section de gauche (1/3) */}
          <div className="w-1/3 p-6 bg-gray-100">
            <p className="text-gray-600 text-sm mb-2">Id: {id}</p>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Title: {title}</h2>
            <p className="text-gray-600 text-sm mb-2">Date: {date}</p>
            <p className="text-gray-600 text-sm mb-2">State: {state}</p>
            <p className="text-gray-600 text-sm mb-2">Assignees: {assignees || "None"}</p>
            <p className="text-gray-600 text-sm mb-2">Number of Assignees: {assigneesCount}</p>
            <div className="text-gray-600 text-sm">
              <p>Labels:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {labelArray.length > 0 ? (
                  labelArray.map(label => (
                    <span
                      key={label}
                      className="inline-block px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: `#${labelColors[label] || 'e0e0e0'}` }} // Utiliser la couleur du label
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
          <div className="flex flex-col w-2/3 p-6">
            <p className="text-gray-600">Description: {description || "No description"}</p>
            <p className="text-gray-600 text-sm mb-2 mt-auto flex justify-end items-end">Created by: {creator}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default MissionCard;