import { useState } from "react"; 
import { Link } from "react-router-dom";
import Modal from '../Modal';
import lightbulb_icon from '../../Assets/lightbulb_icon.svg';

function ProjectCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = () => {
    setModalContent(<p>Contenu spécifique pour Projets THP</p>);
    setIsModalOpen(true);
  };

  return (
    <div className="card top-7 bg-gray-light w-80 max-w-[85%] max-h-36 shadow-xl">
      <div className="card bg-gray-light">
        <div className="relative">
          <div className="flex absolute items-center h-12 py-2 px-2 text-lg font-bold text-white top-0 left-0 bg-gray-gradient rounded-md -translate-x-3 -translate-y-5">
            <h1 className="mr-4">Projets THP</h1>
            <div className='flex items-center'>
              <img src={lightbulb_icon} onClick={handleOpenModal} alt="Icône ampoule" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="flex flex-col items-center p-2 mt-5 gap-5">
          <Link to="/projets">
            <div className="font-semibold">Projets Finaux</div>
          </Link>
        </div>

        <div className="card-actions justify-end"></div>
      </div>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} content={modalContent} />}
    </div>
  );
}

export default ProjectCard;