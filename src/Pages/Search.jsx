import { useEffect, useState } from 'react';
import axios from 'axios';
import CollapseBar from "../Components/CollapseBar";
import { Link } from 'react-router-dom';


const Search = () => {
    const [resources, setResources] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResources, setFilteredResources] = useState([]);

    useEffect(() => {

        axios.get('https://api.github.com/repos/evarellapucky/thp_student_dashboard/contents/src/Data/Data.json')
            .then(response => {
                const content = response.data.content;

                // Décodage du contenu base64
                const decodedContent = JSON.parse(decodeURIComponent(escape(atob(content))));

                setResources(decodedContent.resources);
            })
            .catch(error => console.error('Erreur lors de la récupération des données:', error));
    }, []);

    useEffect(() => {
      if (searchTerm) {
          const filtered = resources.filter(resource =>
              resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              resource.content.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilteredResources(filtered);
      } else {
          setFilteredResources([]);
      }
  }, [searchTerm, resources]);


    return (
        <div>
            <div className="flex flex-row justify-between items-center">
            <h1 className="text-3xl font-bold mt-8 mb-8">Rechercher une ressource</h1>
            <div className="relative">
            <input 
                        type="text" 
                        placeholder="Recherche..." 
                        className="input input-bordered w-96 pl-10" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                <svg className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </div>
            </div>
            <div className="flex justify-center p-4">
                <div className="w-full max-w-4xl">
                    {searchTerm === '' ? (
                        <p className="text-gray-500">Tape un mot-clé dans la barre de recherche pour rechercher une ressource.</p>
                    ) : filteredResources.length > 0 ? (
                        filteredResources.map((resource, index) => (
                            <CollapseBar 
                                key={index}
                                title={resource.title}
                                content={resource.content}
                                borderColor="border-blue-500" 
                            />
                        ))
                    ) : (
                        <CollapseBar
                            title="Je ne trouve pas ce que je recherche"
                            borderColor="border-red-500"
                            content={
                                <div>
                                    <p>
                                        Aucune ressource ne correspond à ta recherche, tu peux réaliser une <Link to="/missions" className="text-blue-500 underline">
                                            mission
                                        </Link> pour créer une ressource.
                                    </p>
                                </div>
                            }
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
