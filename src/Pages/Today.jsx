import { useEffect, useState } from 'react';
import axios from 'axios';
import Countdown from "../Components/Countdown";
import InputField from "../Components/InputField";
import CollapseBar from "../Components/CollapseBar";


const Today = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {

        axios.get('https://api.github.com/repos/evarellapucky/thp_student_dashboard/contents/Data.json')
            .then(response => {
                const content = response.data.content;

                // Décodage du contenu base64
                const decodedContent = JSON.parse(decodeURIComponent(escape(atob(content))));

                setResources(decodedContent.resources);
            })
            .catch(error => console.error('Erreur lors de la récupération des données:', error));
    }, []);

    return (
        <>
            <h1 className="text-3xl text-center">Titre de la journée</h1>
            <div className="flex flex-row justify-center space-x-60 mt-6">
                <div className="flex flex-row justify-end">
                    <div className="rounded-lg bg-base-200 p-4 flex flex-col space-y-2 w-96">
                        <InputField placeholder="Le nom du fichier" />
                        <InputField placeholder="Le lien du fichier" />
                    </div>
                    <div className="flex items-center ml-12 mr-12">
                        <button className="btn bg-green-500 btn-circle shadow-lg hover:bg-white hover:border-green-500 border border-transparent group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6 group-hover:stroke-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>
                </div>
                <Countdown />
            </div>
            <div className="flex justify-center p-4">
                <div className="w-full max-w-4xl">
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
