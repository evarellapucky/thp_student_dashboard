import React, { useState } from 'react';
import DayCard from './DayCard';
import WeekPicker from './WeekPicker';
import moment from 'moment';

// Fonction utilitaire pour obtenir les dates de début et de fin de semaine
const getWeekRange = (date) => {
  const startOfWeek = moment(date).startOf('isoWeek').isoWeekday(1); // Lundi
  const endOfWeek = moment(date).startOf('isoWeek').isoWeekday(5); // Vendredi
  return {
    dateFrom: startOfWeek.toDate(),
    dateTo: endOfWeek.toDate()
  };
};

const Week = () => {
  const today = new Date();
  // Initialiser l'état avec les dates de début et de fin de la semaine actuelle
  const initialRange = getWeekRange(today);

  // État pour stocker la plage de la semaine
  const [weekRange, setWeekRange] = useState(initialRange);

  // Fonction pour mettre à jour la plage de dates de la semaine
  const handleWeekChange = (range) => {
    setWeekRange(range);
  };

  // Fonction pour générer les jours dans la plage de dates
  const generateDaysInRange = (startDate, endDate) => {
    const days = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return days;
  };

  // Générer les jours dans la plage de la semaine
  const daysInWeek = generateDaysInRange(weekRange.dateFrom, weekRange.dateTo);

  return (
    <div className='flex flex-col flex-1 gap-6'>
      <div className='flex flex-row justify-between mt-10'>
        <h2 className='text-2xl text-black font-bold'>
           Title {/*(nom de la semaine du module : exemple => Semaine 1 - Semaine d'introduction au code) */}
        </h2>
        <WeekPicker onWeekChange={handleWeekChange} />
      </div>
      <div className='flex flex-wrap justify-center gap-10 mt-5'>
        {daysInWeek.map((date, index) => (
          <DayCard key={index} date={date} />
          ))
        }
      </div>
    </div>
  );
};

export default Week;
