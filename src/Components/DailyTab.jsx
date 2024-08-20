import axios from 'axios';
import { useEffect, useState } from 'react';
import GaugeChart from 'react-gauge-chart';

const DailyTab = ({ onSelect }) => {
  const [selectedTab, setSelectedTab] = useState('handshakes');
  const [handshakesData, setHandshakesData] = useState(null);
  const [, setDifficultData] = useState(null);
  const [averageRate, setAverageRate] = useState(null); // Initialisez à null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [handshakesResponse, difficultResponse] = await axios.all([
          axios.get("https://raw.githubusercontent.com/YannRZG/Missions-THP/main/handshakes.json"),
          axios.get("https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/difficult.json")
        ]);

        if (handshakesResponse.data && handshakesResponse.data.handshakes) {
          setHandshakesData(handshakesResponse.data.handshakes);
        }

        if (difficultResponse.data && difficultResponse.data.Difficults) {
          const difficults = difficultResponse.data.Difficults;
          setDifficultData(difficults);

          const totalRate = difficults.reduce((acc, item) => acc + parseFloat(item.rate), 0);
          const average = totalRate / difficults.length;
          setAverageRate(average);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (tab) => {
    setSelectedTab(tab);
    onSelect(tab);
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex flex-row space-x-48">
        <div 
          className={`rounded-box bg-base-100 border border-base-300 h-52 w-80 cursor-pointer ${selectedTab === 'handshakes' ? 'shadow-inner' : 'shadow-out'} `}
          onClick={() => handleClick('handshakes')}
        >
          <div className='flex flex-col justify-center items-center h-full space-y-8'>
            <h1 className="text-xl font-bold">Coups de Mains</h1>
            <div className='flex flex-row space-x-4'>
              <img src="/src/Public/Images/Handshake.png" className='w-14 h-14' alt="Handshake" />
              <p className='text-3xl font-bold'>{handshakesData ? handshakesData.length : 0}</p>
            </div>
          </div>
        </div>
        <div 
          className={`rounded-box bg-base-100 border border-base-300 h-52 w-80 cursor-pointer ${selectedTab === 'difficults' ? 'shadow-inner' : 'shadow-out'} `}
          onClick={() => handleClick('difficults')}
        >
          <div className='flex flex-col justify-center items-center h-full space-y-8'>
            <h1 className="text-xl font-bold">Difficultés rencontrées</h1>
            <div className='flex flex-col items-center space-y-4'>
              {/* La jauge sera affichée en permanence ici */}
              <div className="w-40 h-20 flex flex-col items-center justify-center">
                <GaugeChart 
                  id="gauge-chart2" 
                  nrOfLevels={10} 
                  percent={averageRate !== null ? averageRate / 5 : 0}  // Assurez-vous que le pourcentage est entre 0 et 1
                  colors={['#FF5F6D', '#F4F403', '#02b025']} 
                  arcWidth={0.3}
                  hideText 
                />
                <p className="text-2xl font-bold mt-2">{averageRate !== null ? averageRate.toFixed(2) : '0.00'}</p> {/* Affiche la valeur moyenne sous la jauge */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyTab;
