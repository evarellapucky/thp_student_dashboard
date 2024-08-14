import { useState, useEffect } from 'react';

const Countdown = () => {
    const [counter, setCounter] = useState(12 * 60 * 60); // Initialisation à 12 heures en secondes
    const [showModal, setShowModal] = useState(false); // État pour gérer l'affichage de la modal

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(prev => {
                if (prev > 0) {
                    return prev - 1;
                } else {
                    clearInterval(timer);
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(timer); // Nettoyage de l'intervalle
    }, []);

    useEffect(() => {
        const hourInterval = setInterval(() => {
            if (counter > 0) {
                setShowModal(true); // Afficher la modal chaque heure
            }
        }, 3600000); // 1 heure en millisecondes

        return () => clearInterval(hourInterval); // Nettoyage de l'intervalle
    }, [counter]);

    const hours = Math.floor(counter / 3600); // Calcul des heures restantes
    const minutes = Math.floor((counter % 3600) / 60); // Calcul des minutes restantes
    const seconds = counter % 60; // Calcul des secondes restantes

    const closeModal = () => setShowModal(false); // Fonction pour fermer la modal

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1>Temps restant :</h1>
            <span className="countdown font-mono text-2xl">
                <span style={{ "--value": hours }}></span>h
                <span style={{ "--value": minutes }}></span>m
                <span style={{ "--value": seconds }}></span>s
            </span>
            {showModal && ( // Affichage de la modal si showModal est vrai
                <div className="modal">
                    <p>Il reste {hours} heures, {minutes} minutes et {seconds} secondes.</p>
                    <button onClick={closeModal}>Fermer</button>
                </div>
            )}
        </div>
    )
}

export default Countdown