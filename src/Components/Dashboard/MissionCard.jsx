import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import Modal from '../Modal';

function MissionCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null); // État pour le contenu du modal

  const handleOpenModal = () => {
    setModalContent(<p>Contenu spécifique pour Missions THP</p>); // Définir le contenu
    setIsModalOpen(true);
  };

  return (
    <div className="card top-7 bg-base-100 grow min-w-80 max-w-96 shadow-xl">
      <div className="card bg-base-100">
        <div className="relative">
          <div className="flex absolute items-center h-12 py-2 px-2 text-lg font-bold text-white top-0 left-0 bg-gray-800 rounded-md -translate-x-3 -translate-y-5">
            <h1 className='mr-4'>Missions THP</h1>
            <div className='flex items-center'>
            <svg 
              onClick={handleOpenModal}
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1} 
              stroke="currentColor" 
              className="size-4 cursor-pointer"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="flex flex-col items-center p-2 mt-5 gap-5">
          <Link to="/missions">
            <div className="font-semibold">Liste des missions</div>
          </Link>
          <div className='font-semibold'>258</div>
        </div>
      </div>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} content={modalContent} />} {/* Passer le contenu ici */}
    </div>
  );
}

export default MissionCard;