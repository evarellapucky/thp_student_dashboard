import { Link } from 'react-router-dom';
import TooltipIcon from '../TooltipIcon/TooltipIcon'; // Importation du composant TooltipIcon
import '../TooltipIcon/tooltipIcon.css'; // Assurez-vous que le CSS est importé pour le Tooltip

function ProjectCard() {
  return (
    <div className="card top-7 bg-base-100 w-80 max-w-[85%] max-h-36 shadow-out">
      <div className="card bg-gray-light">
        <div className="relative">
          <div className="flex absolute items-center h-12 py-2 px-2 text-white top-0 left-0 bg-gray-gradient rounded-md -translate-x-3 -translate-y-5 shadow-lightOut">
            <h4 className="mr-4">Projets THP</h4>
            <div className='flex items-center'>
              {/* Utilisation du TooltipIcon à la place de l'icône d'ampoule */}
              <TooltipIcon 
                text={"Contenu spécifique pour Projets THP"} // Texte à afficher dans le tooltip
                direction="right" // Direction du tooltip (par défaut "right")
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="flex flex-col items-center p-2 mt-5 gap-5">
          <Link to="/projets" className="hover:underline">
            <h5>Projets Finaux</h5>
          </Link>
        </div>

        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}

export default ProjectCard;
