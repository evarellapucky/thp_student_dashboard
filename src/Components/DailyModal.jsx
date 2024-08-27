import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Modal from './Modal';
import Dropdown from './Dropdown';
import CheckboxGroup from './Checkbox';
import pirateImage from '/src/Assets/pirate48.png'; // Assurez-vous que le chemin est correct

const DailyModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [difficulty, setDifficulty] = useState('');
    const [helpers, setHelpers] = useState([
        { value: '', label: '', comment: '' }, 
        { value: '', label: '', comment: '' }
    ]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/Users.json')
            .then(response => {
                if (response.data && response.data.users) {
                    const formattedUsers = response.data.users
                        .filter(user => user.id) // Filtre pour ignorer les utilisateurs sans ID
                        .map(user => ({
                            value: user.id,
                            label: `${user.prenom} ${user.nom}`
                        }));
                    setUsers(formattedUsers);
                }
            })
            .catch(error => console.error("Erreur lors du chargement des utilisateurs:", error));
    }, []);

    const handleOpenModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const handleSubmit = useCallback(() => {
        console.log('Formulaire soumis avec les données :', {
            rating,
            difficulty,
            helpers,
        });
        handleCloseModal();
    }, [rating, difficulty, helpers, handleCloseModal]);

    const updateHelper = (index, option) => {
        const newHelpers = [...helpers];
        newHelpers[index] = { ...newHelpers[index], ...option };
        setHelpers(newHelpers);
    };

    const updateComment = (index, comment) => {
        const newHelpers = [...helpers];
        newHelpers[index].comment = comment;
        setHelpers(newHelpers);
    };

    return (
        <div>
            <h2 className="mb-4">Daily Modal</h2>
            <button 
                onClick={handleOpenModal} 
                className="px-6 py-3 bg-blue-500 text-white rounded"
            >
                Ouvrir le Modal Manuellement
            </button>
            <Modal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                modalSize="h-[90vh] w-[90vw] max-w-full"
                content={
                    <div className="flex flex-col gap-6 justify-between">
                        <div className='flex flex-col gap-2 items-center'>
                            <div className='flex flex-row gap-2 items-center'>
                                <h1>Bonjour Mousaillon !</h1>
                                <img src={pirateImage} alt="Pirate" />
                            </div>
                            <p className='text-lg'>Comment s'est passée ta journée d'hier ?</p>
                            <p className='text-lg'>Tu peux remercier les autres Camarades pour leur aide. (2 max)</p>
                        </div>
                        <div className='flex flex-row justify-around gap-4 mt-6'>
                            {helpers.map((helper, index) => (
                                <div key={index} className='flex flex-col gap-2 ml-4'>
                                    <Dropdown 
                                        options={users}
                                        label="Sélectionnez un Camarade" 
                                        onSelect={(option) => updateHelper(index, option)} 
                                    />
                                    <textarea
                                        placeholder={`Commentaire pour le camarade ${index + 1}`}
                                        value={helper.comment}
                                        onChange={(e) => updateComment(index, e.target.value)}
                                        className="p-2 border rounded"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-row justify-around'>
                        <CheckboxGroup 
                                options={[
                                    { value: 'facile', label: 'Facile', checked: difficulty === 'facile' },
                                    { value: 'moyenne', label: 'Moyenne', checked: difficulty === 'moyenne' },
                                    { value: 'difficile', label: 'Difficile', checked: difficulty === 'difficile' },
                                    { value: 'extreme', label: 'Extreme', checked: difficulty === 'extreme' },
                                    { value: 'impossible', label: 'Impossible', checked: difficulty === 'impossible' }
                                ]}
                                label="Sélectionnez la difficulté" 
                                onChange={setDifficulty} 
                                className="shadow-out rounded-lg" 
                            />
                            <div className='flex flex-col justify-center max-h-[150px]'>
                                <h2 className='text-lg text-center font-bold'>Notez votre expérience :</h2>
                                <div className="rating gap-2 mb-6 flex justify-center">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <label 
                                            key={index} 
                                            className="cursor-pointer text-5xl transform transition-transform duration-200 hover:scale-125 m-2"
                                        >
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
                        </div>
                        <div className="flex flex-row justify-evenly shadow-out rounded-lg p-4">
                            <h3 className='text-lg font-bold'>Sélection actuelle :</h3>
                            <p>Note : {rating > 0 ? rating : "Aucune sélection"}</p>
                            <p>Difficulté : {difficulty ? difficulty : "Aucune sélection"}</p>
                            <p>Camarades : {helpers.length > 0 ? helpers.map(helper => helper?.label).join(', ') : "Aucune sélection"}</p>
                            <p>Commentaires : {helpers.filter(helper => helper.comment !== '').map(helper => `${helper.label}: ${helper.comment}`).join(', ') || "Aucun commentaire"}</p>
                        </div>
                        <button 
                            onClick={handleSubmit}
                            className="px-6 py-3 bg-green-500 text-white rounded mt-10 self-center"
                        >
                            Soumettre
                        </button>
                    </div>
                }
            />
        </div>
    );
};

export default DailyModal;
