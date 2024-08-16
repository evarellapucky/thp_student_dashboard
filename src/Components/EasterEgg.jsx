import { useState } from 'react';
import Modal from './Modal'; // Assurez-vous que le composant Modal est correctement importé

const EasterEgg = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = () => {
    setModalContent(<p>Contenu spécifique pour EasterEgg</p>);
    setIsModalOpen(true);
  };


  return (
    <div>
      <button onClick={handleOpenModal} className="p-2 text-white rounded">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-6 h-6">
          <defs>
          <linearGradient id="multicolor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ff0000', stopOpacity: 1 }} />
              <stop offset="10%" style={{ stopColor: '#ff4500', stopOpacity: 1 }} />
              <stop offset="20%" style={{ stopColor: '#ff6347', stopOpacity: 1 }} />
              <stop offset="30%" style={{ stopColor: '#ff7f50', stopOpacity: 1 }} />
              <stop offset="40%" style={{ stopColor: '#ffa07a', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#ffff00', stopOpacity: 1 }} />
              <stop offset="60%" style={{ stopColor: '#00ff00', stopOpacity: 1 }} />
              <stop offset="70%" style={{ stopColor: '#0000ff', stopOpacity: 1 }} />
              <stop offset="80%" style={{ stopColor: '#4b0082', stopOpacity: 1 }} />
              <stop offset="90%" style={{ stopColor: '#8b00ff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ff00ff', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path fill="url(#multicolor-gradient)" d="M192 496C86 496 0 394 0 288C0 176 64 16 192 16s192 160 192 272c0 106-86 208-192 208zM154.8 134c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C69.7 226.1 64 259.7 64 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2z"/>
        </svg>
      </button>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} content={modalContent} />} {/* Passer le contenu ici */}
    </div>
  );
};

export default EasterEgg;