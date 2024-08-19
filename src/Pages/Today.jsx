import { useEffect, useState } from 'react';
import axios from 'axios';
import Countdown from "../Components/Countdown";
import InputField from "../Components/InputField";
import CollapseBar from "../Components/CollapseBar";

const Today = () => {
    const [resources, setResources] = useState([]);
    const [dayState, setDayState] = useState('correction');

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/Data.json')
            .then(response => {
                console.log(response.data); // Voir la structure exacte des données
                const data = response.data;

                if (data && data.resources) { // Vérifiez que resources existent
                    setResources(data.resources);
                } else {
                    console.error('Resources non trouvés dans la réponse:', response.data);
                }
            })
            .catch(error => console.error('Erreur lors de la récupération des données:', error));
    }, []);

    return (
        <>
{dayState === 'withSubmission' && (
    <div>
        <h1 className="text-2xl md:text-3xl font-bold text-center">Projet à rendre</h1>
            <Countdown />
        <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex flex-col items-center md:flex-row md:justify-end">
                <div className="rounded-lg bg-base-200 p-4 flex flex-col space-y-2 w-80 sm:w-96">
                    <InputField placeholder="Le nom du fichier" />
                    <InputField placeholder="Le lien du fichier" />
                </div>
                <div className="flex items-center mt-6 md:mt-0 md:ml-6">
                    <button className="btn bg-green-500 btn-circle shadow-lg hover:bg-white hover:border-green-500 border border-transparent group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6 group-hover:stroke-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
)}

{dayState === 'correction' && (
    <div>
        <h1 className="text-2xl md:text-3xl font-bold mt-8 mb-6 text-center">Corrections</h1>
        <div className="flex flex-col items-center mt-6 space-y-6">
            <Countdown />
            <div className="w-full md:w-3/4 lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:space-x-6 gap-4 mt-6 mb-8">
                {/* Colonne pour corriger */}
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-xl font-semibold mb-4">Corriger</h2>
                    {Array.from({ length: 2 }, (_, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                            <span className="text-center sm:text-left">Utilisateur {index + 1}</span>
                            <button className="btn bg-blue-500 w-full sm:w-auto">GitHub</button>
                            <button className="btn bg-red-500 w-full sm:w-auto">Corriger</button>
                        </div>
                    ))}
                </div>
                {/* Colonne pour être corrigé */}
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-xl font-semibold mb-4">Être corrigé</h2>
                    {Array.from({ length: 2 }, (_, index) => (
                        <div key={index + 2} className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
                            <span className="text-center sm:text-left">Utilisateur {index + 3}</span>
                            <button className="btn bg-blue-500 w-full sm:w-auto">GitHub</button>
                            <button className="btn bg-red-500 w-full sm:w-auto">Évaluer</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
)}

            <div className="flex justify-center p-4">
                <div className="w-full max-w-6xl">
                    {resources.map((resource, index) => (
                        <CollapseBar 
                            key={index}
                            title={resource.title}
                            content={resource.content}
                            borderColor="border-blue-500" 
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Today;
