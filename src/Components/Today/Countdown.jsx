import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Countdown = ({ mode, onCountdownEnd }) => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calculateTimeUntil = (targetHour) => {
      const now = new Date();
      const targetTime = new Date();
      targetTime.setHours(targetHour, 0, 0, 0);

      if (now.getHours() >= 24 && mode === 'untilMidnight') {
        setTimeLeft(null);
        return;
      }

      if (now.getHours() < targetHour) {
        const remainingTime = targetTime - now;
        setTimeLeft(remainingTime);
      } else if (now.getHours() >= targetHour && now.getHours() < 12) {
        setTimeLeft(null);
      } else {
        setTimeLeft(null);
      }
    };

    const updateCountdown = () => {
      if (mode === 'untilMidnight') {
        calculateTimeUntil(24); // Calculer jusqu'à minuit
      } else if (mode === 'untilNoon') {
        calculateTimeUntil(12); // Calculer jusqu'à midi
      }
    };

    updateCountdown();

    const intervalId = setInterval(() => {
      const now = new Date();
      if (mode === 'untilMidnight') {
        if (now.getHours() >= 24) {
          clearInterval(intervalId);
          setTimeLeft(null);
          onCountdownEnd(); // Appel du rappel
        } else {
          calculateTimeUntil(24);
        }
      } else if (mode === 'untilNoon') {
        if (now.getHours() >= 12) {
          clearInterval(intervalId);
          setTimeLeft(null);
          onCountdownEnd(); // Appel du rappel
        } else {
          calculateTimeUntil(12);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [mode, onCountdownEnd]);

  function formatTime(ms) {
    if (ms <= 0) return '00h 00m 00s';
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  }

  if (timeLeft === null) {
    return null; // Ne rien afficher si aucune période active
  }

  return (
<div className="flex flex-col items-center w-full sm:w-2/3 md:w-5/6 lg:w-2/3 px-4">
  <h1
    className="text-lg sm:text-xl md:text-1xl lg:text-2xl font-bold"
    style={{ fontFamily: 'chakra petch' }}
  >
    {mode === 'untilMidnight' ? 'Temps restant :' : "Temps restant jusqu'à midi"}
  </h1>
  <p
    className="text-base sm:text-lg md:text-xl lg:text-2xl"
    style={{ color: 'red', fontFamily: 'chakra petch' }}
  >
    {formatTime(timeLeft)}
  </p>
</div>

  );
};

Countdown.propTypes = { 
  mode: PropTypes.oneOf(['untilMidnight', 'untilNoon']).isRequired,
  onCountdownEnd: PropTypes.func.isRequired,
};

export default Countdown;
