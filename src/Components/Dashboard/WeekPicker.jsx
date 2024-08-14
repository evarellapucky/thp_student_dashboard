import React, { useState } from 'react';
import DatePicker from 'rsuite/DatePicker';
import moment from 'moment';
import 'rsuite/dist/rsuite.min.css';

const WeekPicker = ({ onWeekChange }) => {
  // Obtenir la date du jour et initialiser avec les dates de début et de fin de semaine (lundi à vendredi)
  const today = new Date();

  const getWeekRange = (date) => {
    const startOfWeek = moment(date).startOf('isoWeek').isoWeekday(1); // Lundi
    const endOfWeek = moment(date).startOf('isoWeek').isoWeekday(5); // Vendredi
    return {
      dateFrom: startOfWeek.toDate(),
      dateTo: endOfWeek.toDate()
    };
  };

  // Initialisation de l'état objWeek avec la date actuelle, ainsi que les dates de début et de fin de la semaine
  const [objWeek, setObjWeek] = useState({
    date: today,
    ...getWeekRange(today)
  });

  const onChange = (date) => {
    const weekRange = getWeekRange(date);

    setObjWeek({
      date,
      ...weekRange
    });
    // Si la fonction onWeekChange est passée en prop, on l'appelle avec la nouvelle plage de dates
    if (onWeekChange) {
      onWeekChange(weekRange);
    }
  };

  const formatDateFrench = (date) => {
    if (!date) return '';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2); // Prend les 2 derniers chiffres de l'année
    return `${day}/${month}/${year}`;
  };

  const renderValue = (date) => {
    const { dateFrom, dateTo } = objWeek;

    return `${formatDateFrench(dateFrom)} - ${formatDateFrench(dateTo)}`;
  };

  return (
    <div className='WeekPicker mr-12 flex items-center gap-3'>
      <h2 className='text-2xl text-black font-bold'>Semaine :</h2>
      <DatePicker
        placeholder='Week picker'
        isoWeek
        value={objWeek.date}
        onChange={onChange}
        renderValue={renderValue}
      />
    </div>
  );
};

export default WeekPicker;
