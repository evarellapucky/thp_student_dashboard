import { useEffect, useState } from 'react';
import CollapseBar from '../Components/CollapseBar';
import AgendaList from '../Components/AgendaList';

function Agenda() {
  const [modules, setModules] = useState(null);

  useEffect(() => {
    // Fetch the modules data from the remote JSON file
    fetch('https://raw.githubusercontent.com/YannRZG/Missions-THP/main/Resources.json')
      .then((response) => response.json())
      .then((data) => {
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
      <h1 className='text-4xl font-bold ml-6 mb-6'>Agenda</h1>
      {Object.entries(modules).map(([moduleName, weeks]) => (
        <div key={moduleName}>
          <h1 className='text-2xl font-bold text-center m-6'>{moduleName}</h1>
          {weeks.map((weekData, index) => (
            <CollapseBar 
              key={index}
              title={weekData.week}
              content={<AgendaList days={weekData.days} moduleName={moduleName} weekIndex={index} />} 
              borderColor="border-blue-500"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Agenda;
