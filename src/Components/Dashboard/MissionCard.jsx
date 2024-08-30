import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { totalMissionCountAtom } from '../Atom/atoms';
import TooltipIcon from '../TooltipIcon/TooltipIcon'; // Assurez-vous d'importer TooltipIcon correctement
import '../TooltipIcon/tooltipIcon.css'; // Assurez-vous que les styles CSS sont importés

function MissionCard() {
  const [totalMissionCount] = useAtom(totalMissionCountAtom);

  return (
    <div className="card top-7 bg-base-100 w-80 max-w-[85%] max-h-36 shadow-out">
      <div className="card bg-gray-light">
        <div className="relative">
          <div className="flex absolute items-center h-12 py-2 px-2 text-white top-0 left-0 bg-gray-gradient rounded-md -translate-x-3 -translate-y-5 shadow-lightOut">
            <h4 className='mr-4'>Missions THP</h4>
            <div className='flex items-center'>
              {/* Remplacement de l'icône par le TooltipIcon */}
              <TooltipIcon 
                text={"Contenu spécifique pour Missions THP"} // Texte à afficher dans le tooltip
                direction="right" // Direction du tooltip
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="flex flex-col items-center p-2 mt-5 gap-1">
          <Link to="/missions" className='hover:underline'>
            <h5>Liste des missions</h5>
          </Link>
          <h5>{totalMissionCount}</h5>
        </div>
      </div>
    </div>
  );
}

export default MissionCard;
