import {useState, useEffect } from 'react';
import AgendaCard from '../AgendaCard';
import WeekPicker from './WeekPicker';
import moment from 'moment';
import 'moment/locale/fr'; // Importer le locale français

// Configurer moment pour utiliser le locale français
moment.locale('fr');

// Fonction utilitaire pour obtenir les dates de début et de fin de semaine
const getWeekRange = (date) => {
  const startOfWeek = moment(date).startOf('isoWeek').isoWeekday(1); // Lundi
  const endOfWeek = moment(date).startOf('isoWeek').isoWeekday(5); // Vendredi
  return {
    dateFrom: startOfWeek.toDate(),
    dateTo: endOfWeek.toDate(),
  };
};

const Week = () => {
  const today = new Date();
  const initialRange = getWeekRange(today);
  const [weekRange, setWeekRange] = useState(initialRange);
  const [data, setData] = useState({}); // État pour stocker toutes les données des modules
  const [selectedWeekData, setSelectedWeekData] = useState(null); // État pour stocker les données de la semaine sélectionnée

  // Charger les données JSON depuis l'URL
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/YannRZG/Missions-THP/main/Resources.json');
        const result = await response.json();
        setData(result); // Stocker toutes les données des modules dans l'état
        setSelectedWeekData(result['Introduction'][0]); // Définir par défaut les données de la première semaine du module "Introduction"
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
      }
    };

    fetchData();
  }, []);

  // Mettre à jour les données de la semaine sélectionnée à chaque changement de plage de dates
  useEffect(() => {
    if (data['Introduction']) {
      // Trouver les données de la semaine correspondante
      const selectedWeek = data['Introduction'].find((weekData) => {
        const weekStart = moment(weekRange.dateFrom).startOf('isoWeek');
        const weekEnd = moment(weekRange.dateTo).endOf('isoWeek');

        // Vérifier si une date dans la semaine donnée est comprise dans la plage de dates sélectionnée
        return weekData.days.some((dayData) => {
          const dayDate = moment(dayData.date, 'DD-MM-YYYY');
          return dayDate.isBetween(weekStart, weekEnd, null, '[]');
        });
      });

      setSelectedWeekData(selectedWeek || null);
    }
  }, [weekRange, data]);

  return (
    <div className='flex flex-col flex-1 gap-6'>
      <div className='flex flex-col justify-between lg:flex-row mt-8'>
        <h2 className='text-center'>Introduction</h2> {/* Affiche le nom du module par défaut */}
        <WeekPicker onWeekChange={(range) => setWeekRange(range)} />
      </div>

      {/* Affichage des cartes AgendaCard pour la semaine courante */}
      <div className='flex flex-wrap justify-evenly gap-10 mt-5'>
        {selectedWeekData ? (
          selectedWeekData.days.map((dayData, dayIndex) => (
            <AgendaCard
              key={dayIndex}
              title={dayData.day}
              date={moment(dayData.date, 'DD-MM-YYYY').format('DD MMMM YYYY')} // Formatage en français
              resources={dayData.resources}
              toCorrect={dayData.ToCorrect}
              toRender={dayData.ToRender}
              isProject={dayData.isProject}
            />
          ))
        ) : (
          <p>Aucune donnée disponible pour cette semaine.</p>
        )}
      </div>
    </div>
  );
};

export default Week;
