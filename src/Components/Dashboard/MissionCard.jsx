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
    <div className="card top-7 bg-base-100 w-80 max-w-[85%] max-h-36 shadow-xl">
      <div className="card bg-base-100">
        <div className="relative">
          <div className="flex absolute items-center h-12 py-2 px-2 text-lg font-bold text-white top-0 left-0 bg-gray-800 rounded-md -translate-x-3 -translate-y-5">
            <h1 className='mr-4'>Missions THP</h1>
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
        <div className="flex flex-col items-center p-2 mt-5 gap-5">
          <Link to="/missions">
            <div className="font-semibold">Liste des missions</div>
          </Link>
          <div className='font-semibold'>{totalMissionCount}</div>
        </div>
      </div>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} content={modalContent} />} {/* Passer le contenu ici */}
    </div>
  );
}

export default MissionCard;