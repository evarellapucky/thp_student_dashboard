import { useState, useEffect } from 'react';
import axios from 'axios';
import Countdown from "../Components/Countdown";
import InputField from "../Components/InputField";
import CollapseBarWithFavorite from '../Components/CollapseBarWithFavorite';
import useFavorites from '../Components/useFavorites';

const Today = () => {
  const [resources, setResources] = useState([]);
  const [dayState, setDayState] = useState('correction');
  const [isCountdownActive, setIsCountdownActive] = useState(true);
  const [showCorrections, setShowCorrections] = useState(true);
  const { favorites, toggleFavorite } = useFavorites();
  const [fileName, setFileName] = useState('');
  const [fileLink, setFileLink] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectLink, setProjectLink] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/evarellapucky/Favorites/main/favorites.json"
        );

        const newResources = [];
        Object.values(response.data).forEach(category => {
          category.forEach(week => {
            week.days.forEach(day => {
              if (day.resources) {
                newResources.push(...day.resources);
              }
            });
          });
        });

        setResources(newResources);
        console.log('Fetched resources:', newResources);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []);

  const countdownMode = dayState === 'withSubmission'
    ? 'untilMidnight'
    : dayState === 'correction'
    ? 'untilNoon'
    : null;

  const handleCountdownEnd = () => {
    setIsCountdownActive(false);
    if (dayState === 'correction') {
      setShowCorrections(false); // Masquer la section de correction après le compte à rebours
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Mettre à jour les états d'affichage avec les valeurs saisies
    setProjectTitle(fileName);
    setProjectLink(fileLink);

    setFileName('');
    setFileLink('');
  };

  return (
    <>
{/* // Afficher la section projet à rendre uniquement si le compte à rebours est actif et la valeur de dayState est 'withSubmission' */}
      {dayState === 'withSubmission' && (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-center">Projet à rendre</h1>
          {countdownMode && isCountdownActive && (
            <div className="w-full flex justify-center mt-4">
              <Countdown mode={countdownMode} onCountdownEnd={handleCountdownEnd} />
            </div>
          )}
          <div className="flex flex-col md:flex-row justify-start items-center mt-6 space-y-6 md:space-y-0 md:space-x-12 p-6 w-full max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between w-full">
              <div className="rounded-lg p-4 flex flex-col space-y-2 w-full md:w-1/2">
                <InputField
                  type="text"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  placeholder="Nom du fichier"
                />
                <InputField
                  type="text"
                  value={fileLink}
                  onChange={(e) => setFileLink(e.target.value)}
                  placeholder="Lien du Repo"
                />
              </div>
              <div className="flex items-center justify-center md:justify-start mt-2 md:mt-0 md:ml-6 w-full md:w-auto">
                <button
                  onClick={handleSubmit}
                  className="btn bg-green-500 btn-circle shadow-lg hover:bg-white hover:border-green-500 border border-transparent group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6 group-hover:stroke-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col md:flex-row md:justify-around w-full md:w-1/2 mt-4 md:flex-col md:mt-0 md:ml-6">
                <h4 className="text-lg sm:text-md"><span className='font-bold'>Nom du fichier : </span>{projectTitle}</h4>
                <h4 className="text-lg sm:text-md"><span className='font-bold'>Lien du fichier : </span>{projectLink}</h4>
              </div>
            </div>
          </div>
        </div>
      )}

{/* // Afficher la section de correction seulement si la valeur de dayState est 'correction  */}
      {dayState === 'correction' && showCorrections && (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-bold mt-8 mb-6 text-center">Corrections</h1>
          {countdownMode && isCountdownActive && (
            <div className="mt-4">
              <Countdown mode={countdownMode} onCountdownEnd={handleCountdownEnd} />
            </div>
          )}
          <div className="flex flex-col items-center mt-6 space-y-6 w-full max-w-6xl">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Corriger</h2>
                {Array.from({ length: 2 }, (_, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 mb-6"
                  >
                    <span className="text-center sm:text-left">
                      Utilisateur {index + 1}
                    </span>
                    <button className="btn bg-blue-500 w-full sm:w-auto">
                      GitHub
                    </button>
                    <button className="btn bg-red-500 w-full sm:w-auto">
                      Corriger
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Être corrigé</h2>
                {Array.from({ length: 2 }, (_, index) => (
                  <div
                    key={index + 2}
                    className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 mb-6"
                  >
                    <span className="text-center sm:text-left">
                      Utilisateur {index + 3}
                    </span>
                    <button className="btn bg-blue-500 w-full sm:w-auto">
                      GitHub
                    </button>
                    <button className="btn bg-red-500 w-full sm:w-auto">
                      Évaluer
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center p-4">
        <div className="w-full max-w-6xl">
            <h1 className='text-5xl text-center'>BLABLA du jour</h1>
            <p className='text-center text-lg semibold m-6'>Le blabla du jour est le blabla qui va suivre le blabla du jour. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum cupiditate eveniet repellendus tempora similique, dolores magni ducimus beatae deserunt at odio hic quam tenetur itaque quisquam. Cumque quo hic itaque.</p>
          {resources
            .filter(resource => resource.id.startsWith('intro-1-1-'))
            .map((resource, index) => (
              <CollapseBarWithFavorite 
                key={index}
                title={resource.title}
                content={resource.content}
                borderColor="border-blue-500" 
                isFavorite={favorites.includes(resource.id)}
                toggleFavorite={() => toggleFavorite(resource.id)}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Today;
