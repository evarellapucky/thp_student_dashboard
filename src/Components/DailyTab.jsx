import React, { useState } from 'react';

const DailyTab = ({ onSelect }) => {
  const [selectedTab, setSelectedTab] = useState('handshakes');

  const handleClick = (tab) => {
    setSelectedTab(tab);
    onSelect(tab); // Notifie le composant parent de la sélection
  };

  return (
    <div className="flex flex-row space-x-48">
      <div 
        className={`rounded-box bg-base-100 border border-base-300 h-52 w-80 cursor-pointer ${selectedTab === 'handshakes' ? 'shadow-inner' : 'shadow-out'} ${selectedTab === 'handshakes' ? 'border-red-200' : ''}`}
        onClick={() => handleClick('handshakes')}
      >
        
      </div>
      <div 
        className={`rounded-box bg-base-100 border border-base-300 h-52 w-80 cursor-pointer ${selectedTab === 'difficults' ? 'shadow-inner' : 'shadow-out'} ${selectedTab === 'difficults' ? 'border-red-200' : ''}`}
        onClick={() => handleClick('difficults')}
      >
        
      </div>
    </div>
  );
};

export default DailyTab;
