import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import { useAtom } from 'jotai';
import { totalMissionCountAtom } from '../Atom/atoms';
import lightbulb_icon from '../../Assets/lightbulb_icon.svg';

function MissionCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null); // État pour le contenu du modal
  const [totalMissionCount] = useAtom(totalMissionCountAtom);

  const handleOpenModal = () => {
    setModalContent(<p>Contenu spécifique pour Missions THP</p>); // Définir le contenu
    setIsModalOpen(true);
  };

  return (
    <div className="card top-7 bg-gray-light w-80 max-w-[85%] max-h-36 shadow-out">
      <div className="card bg-gray-light">
        <div className="relative">
          <div className="flex absolute items-center h-12 py-2 px-2 text-white top-0 left-0 bg-gray-gradient rounded-md -translate-x-3 -translate-y-5 shadow-lightOut">
            <h4 className='mr-4'>Missions THP</h4>
            <div className='flex items-center'>
            <img 
                src={lightbulb_icon} 
                onClick={handleOpenModal} 
                alt="Icône ampoule" 
                className="cursor-pointer"
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
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} content={modalContent} />} {/* Passer le contenu ici */}
    </div>
  );
}

export default MissionCard;