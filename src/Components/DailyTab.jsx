import axios from 'axios';
import { useEffect, useState } from 'react';

const DailyTab = ({ onSelect }) => {
  const [selectedTab, setSelectedTab] = useState('handshakes');
  const [handshakesData, setHandshakesData] = useState(null);

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/Data.json")
      .then(response => {
        if (response.data && response.data.handshakes) {
          setHandshakesData(response.data.handshakes);
        }
      })
      .catch(error => console.error("Erreur lors du chargement des données:", error));
  }, []);

  const handleClick = (tab) => {
    setSelectedTab(tab);
    onSelect(tab);
  };

  return (
    <div className="flex flex-row space-x-48">
      <div 
        className={`rounded-box bg-base-100 border border-base-300 h-52 w-80 cursor-pointer ${selectedTab === 'handshakes' ? 'shadow-inner' : 'shadow-out'} `}
        onClick={() => handleClick('handshakes')}
      >
        <div className='flex flex-col justify-center items-center h-full space-y-8'>
          <h1 className="text-xl font-bold">Coups de Mains</h1>
          <div className='flex flex-row space-x-4'>
            <img src="/src/Public/Images/Handshake.png" className='w-12 h-12' alt="Handshake" />
          <p className='text-3xl font-bold'>{handshakesData ? handshakesData.length : 0}</p>
          </div>
        </div>
      </div>
      <div 
        className={`rounded-box bg-base-100 border border-base-300 h-52 w-80 cursor-pointer ${selectedTab === 'difficults' ? 'shadow-inner' : 'shadow-out'} `}
        onClick={() => handleClick('difficults')}
      >
<div className='flex flex-col justify-center items-center h-full space-y-8'>
          <h1 className="text-xl font-bold">Difficultées rencontrées</h1>
          <div className='flex flex-row space-x-4'>
            <img src="/src/Public/Images/compteur.avif" className='w-20 h-12' alt="compteur" />
          <p className='text-3xl font-bold'>{handshakesData ? handshakesData.length : 0}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DailyTab;