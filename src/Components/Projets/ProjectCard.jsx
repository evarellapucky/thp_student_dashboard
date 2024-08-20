import ReactMarkdown from 'react-markdown'

const truncateText = (text, maxWords) => {
  const wordsArray = text.split(' ');
  if (wordsArray.length <= maxWords) {
    return text;
  }
  return wordsArray.slice(0, maxWords).join(' ') + '...';
}

const ProjectCard = ({ number, update, title, assignees, assigneesCount, description, html_url, creator, state, labels, labelColors, commentsCount }) => {
  // Convertir les labels en un tableau et extraire les couleurs
  const labelArray = labels ? labels.split(', ').map(label => label.trim().toLowerCase()) : [];

  const trucatedDescription = truncateText(description || "No description", 100);
  
  return (
    
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 block max-w-7xl mx-auto p-4">
        <div className="flex">
          {/* Section de gauche (1/3) */}
          <div className="w-1/3 p-6 bg-gray-100">
            <p className="text-gray-600 text-sm mb-2"># {number}</p>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              <a href={html_url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </h2>
            <p className="text-gray-600 text-sm mb-2">Last Updated: {update}</p>
            <p className="text-gray-600 text-sm mb-2">State: {state}</p>
            <p className="text-gray-600 text-sm mb-2 flex flew-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='w-6 h-6'>
            <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
              <span>{assigneesCount}</span>
              </p>
            <p className="text-gray-600 text-sm mb-2 flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-6 h-6'>
            <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>
              <span>{commentsCount}</span> 
            </p>
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
          <p className="text-gray-600 text-sm mb-2 flex justify-end">Assignees: {assignees || "None"}</p>
            <p className="text-gray-600">Description:</p>
               <ReactMarkdown>{trucatedDescription}</ReactMarkdown>
            <p className="text-gray-600 text-sm mb-2 mt-auto flex justify-end items-end">Created by: {creator}</p>
          </div>
        </div>
      </div>
  );
};

export default ProjectCard;