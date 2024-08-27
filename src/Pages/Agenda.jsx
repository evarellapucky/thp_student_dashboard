import { useEffect, useState } from 'react';
import CollapseBar from '../Components/CollapseBar';
import AgendaList from '../Components/AgendaList';

function Agenda() {
  const [modules, setModules] = useState(null);

  useEffect(() => {
    // Fetch the modules data from the remote JSON file
    // fetch('https://raw.githubusercontent.com/YannRZG/Missions-THP/main/Resources.json')
    fetch('https://raw.githubusercontent.com/evarellapucky/Favorites/main/favorites.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Set the modules data to state
        setModules(data);
      })
      .catch((error) => {
        console.error('Error fetching the data:', error);
      });
  }, []);

  if (!modules) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='p-6'>
      <h1 className='text-4xl font-bold'>Agenda</h1>
      <p className='text-lg mt-4'>Voici le condensé du parcours sélectionné avec l'enchainement des cours disponibles !</p>
      </div>
      {Object.entries(modules).map(([moduleName, weeks]) => (
        <div key={moduleName}>
          <h1 className='text-2xl font-bold text-center m-6'>{moduleName} <span className='text-sm'>01/01/2024 au 31/03/2024</span> </h1>
          {weeks.map((weekData, index) => (
            <CollapseBar 
              key={index}
              title={weekData.week}
              content={
              <div>
                <p className="mb-4">{weekData.descritption}</p>
                <AgendaList days={weekData.days} moduleName={moduleName} weekIndex={index} />
              </div>} 
              borderColor="border-secondary"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Agenda;
