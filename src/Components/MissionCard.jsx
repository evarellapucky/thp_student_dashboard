import React from 'react';

const MissionCard = ({ id, date, title, assignees, assigneesCount, description, html_url, creator, state, labels }) => {
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
            <p className="text-gray-600 text-sm">Labels: {labels || "None"}</p>
          </div>
          {/* Section de droite (2/3) */}
          <div className="flex flex-col w-2/3 p-6">
            <p className="text-gray-600">Description: {description}</p>
            <p className="text-gray-600 text-sm mb-2 mt-auto flex justify-end items-end">Created by: {creator}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default MissionCard;