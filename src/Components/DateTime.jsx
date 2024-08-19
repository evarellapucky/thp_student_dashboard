import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-row justify-center items-center text-center mt-6 mb-6 text-gray-800 rounded-lg">
      <div className='mr-2 bg-gray-100 p-2 rounded-lg'>
      <p className="text-1xl font-normal">
        {format(currentDateTime, 'dd MMMM yyyy', { locale: fr })}
      </p>
      </div>
      <div className='ml-2 bg-gray-100 p-2 rounded-lg'>
      <p className="text-1xl font-normal text-blue-500">
        {format(currentDateTime, 'HH:mm:ss')}
      </p>
      </div>
    </div>
  );
};

export default DateTime;