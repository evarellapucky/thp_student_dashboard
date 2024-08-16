import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
import Dropdown from './Dropdown';
import CheckboxGroup from './Checkbox';

const DailyModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [rating, setRating] = useState(0);
    const [difficulty, setDifficulty] = useState('');  // État pour stocker la difficulté sélectionnée
    const [helpers, setHelpers] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/Data.json')
            .then(response => {
                if (response.data && response.data.users) {
                    const formattedUsers = response.data.users.map(user => ({
                        value: user,
                        label: `${user.prenom} ${user.nom}`
                    }));
                    setUsers(formattedUsers);
                }
            })
            .catch(error => console.error("Erreur lors du chargement des utilisateurs:", error));
    }, []);

    const handleOpenModal = () => {
        setModalContent(
            <div>
                <h1 className='text-2xl font-bold'>Bonjour Mousaillon !</h1>
                <div className='flex flex-row justify-between'>
                    <Dropdown 
                        options={users}
                        label="Sélectionnez un Camarade" 
                        onSelect={(option) => setHelpers([...helpers, option])} 
                    />
                    <Dropdown 
                        options={users} 
                        label="Sélectionnez un autre Camarade" 
                        onSelect={(option) => setHelpers([...helpers, option])} 
                    />
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-lg font-bold'>Notez votre expérience :</h2>
                    <div className="rating gap-1 mb-4">
                        {Array.from({ length: 5 }, (_, index) => (
                            <label key={index} className="cursor-pointer text-2xl">
                                <input 
                                    type="radio" 
                                    name="rating" 
                                    value={index + 1}
                                    checked={rating === index + 1}
                                    onChange={() => setRating(index + 1)} 
                                    className="hidden" 
                                />
                                {index === 0 ? '😡' : 
                                 index === 1 ? '😐' : 
                                 index === 2 ? '😊' : 
                                 index === 3 ? '😁' : 
                                 '😍'}
                            </label>
                        ))}
                    </div>
                </div>
                <CheckboxGroup 
                    options={[
                        { value: 'facile', label: 'Facile', checked: difficulty === 'facile' },
                        { value: 'moyenne', label: 'Moyenne', checked: difficulty === 'moyenne' },
                        { value: 'difficile', label: 'Difficile', checked: difficulty === 'difficile' }
                    ]}
                    label="Sélectionnez la difficulté" 
                    onChange={setDifficulty}  // Mettre à jour l'état de difficulté
                />
                {/* Afficher la sélection actuelle */}
                <div className="mt-4">
                    <h3 className='text-lg font-bold'>Sélection actuelle :</h3>
                    <p>Note : {rating > 0 ? rating : "Aucune sélection"}</p>
                    <p>Difficulté : {difficulty ? difficulty : "Aucune sélection"}</p>
                    <p>Camarades : {helpers.length > 0 ? helpers.join(', ') : "Aucune sélection"}</p>
                </div>
                <button 
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-green-500 text-white rounded mt-4"
                >
                    Soumettre
                </button>
            </div>
        );
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = () => {
        // Logique pour la soumission du formulaire
        console.log('Formulaire soumis avec les données :', {
            rating,
            difficulty,
            helpers
        });

        // Fermer le modal après soumission
        handleCloseModal();
    };

    return (
        <div>
            <h1>Daily Modal</h1>
            <button 
                onClick={handleOpenModal} 
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Ouvrir le Modal Manuellement
            </button>
            <Modal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                content={modalContent} 
                title="Évaluation de la journée"
                modalSize="h-[95vh] w-[95vw] max-w-full" 
            />
        </div>
    );
};

export default DailyModal;
