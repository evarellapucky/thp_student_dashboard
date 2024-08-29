// src/Components/Correction.jsx
import DefaultButton from "../DefaultButton";
import Countdown from "./Countdown";
import PropTypes from 'prop-types';

const Correction = ({ countdownMode, isCountdownActive, onCountdownEnd, showCorrections }) => {
  if (!showCorrections) return null;

  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-8 mb-6 text-center">
        Corrections
      </h1>
      <div className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mt-6 space-y-6 w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <div className="flex flex-col items-center p-4 bg-gray-light rounded-lg shadow-lightOut">
              <h4 className="font-semibold mb-4">Corriger</h4>
              {Array.from({ length: 2 }, (_, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 mb-6 w-full"
                >
                  <span className="text-center sm:text-left w-full sm:w-auto">
                    Utilisateur {index + 1}
                  </span>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 w-full sm:w-auto">
                    <DefaultButton name="GitHub" color="btn-secondary"/> 
                    <DefaultButton name="Corriger" color="btn-error"/>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-light rounded-lg shadow-md">
              <h4 className="font-semibold mb-4">Être corrigé</h4>
              {Array.from({ length: 2 }, (_, index) => (
                <div
                  key={index + 2}
                  className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 mb-6 w-full"
                >
                  <span className="text-center sm:text-left w-full sm:w-auto">
                    Utilisateur {index + 3}
                  </span>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 w-full sm:w-auto">
                  <DefaultButton name="GitHub" color="btn-secondary"/> 
                  <DefaultButton name="Évaluer" color="btn-error"/>

                  </div>
                </div>
              ))}
            </div>
            {countdownMode && isCountdownActive && (
              <div className="flex flex-col items-end mt-4 lg:mt-0 w-full lg:w-auto">
                <Countdown
                  mode={countdownMode}
                  onCountdownEnd={onCountdownEnd}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Correction.propTypes = {
  countdownMode: PropTypes.string,
  isCountdownActive: PropTypes.bool,
  onCountdownEnd: PropTypes.func,
  showCorrections: PropTypes.bool,
};

export default Correction;
