// AgendaList.jsx
import AgendaCard from './AgendaCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AgendaList = ({ moduleName, weekIndex }) => {
  const [agendaItems, setAgendaItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/YannRZG/Missions-THP/main/Resources.json"
        );

        const moduleData = response.data[moduleName];
        if (moduleData && moduleData[weekIndex]) {
          setAgendaItems(moduleData[weekIndex].days);
        }

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [moduleName, weekIndex]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>Une erreur est survenue: {error.message}</p>;
  }

  return (
    <div className="flex flex-row flex-wrap gap-4 justify-evenly mt-6">
      {agendaItems.map((item, index) => {
        const { day, ToRender, ToCorrect, resources } = item;
        
        return (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <AgendaCard 
              title={day} 
              date={`Semaine ${weekIndex + 1}`} 
              resources={resources}
              toCorrect={ToCorrect}
              toRender={ToRender}
            />
          </div>
        );
      })}
    </div>
  );
};

export default AgendaList;
