import { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import CollapseBar from "../Components/CollapseBar";
import { Link } from "react-router-dom";

const Search = () => {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResources, setFilteredResources] = useState([]);
  const [searchOk, setSearchOk] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/evarellapucky/Favorites/main/favorites.json"
        );

        // Extraire toutes les ressources de la nouvelle structure JSON
        const newResources = [];
        Object.values(response.data).forEach(category => {
          category.forEach(week => {
            week.days.forEach(day => {
              if (day.resources) {
                newResources.push(...day.resources);
              }
            });
          });
        });

        setResources(newResources);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []);

  const buildSearchRegex = useCallback((term) => {
    const andTerms = term.split(/\s+AND\s+/i).map((subTerm) => {
      const orTerms = subTerm.split(/\s+OR\s+/i).map((part) => {
        if (part.startsWith('"') && part.endsWith('"')) {
          return part.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        } else if (part.includes('*')) {
          const regexPart = part.split('*').map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('.*');
          return regexPart;
        } else {
          return part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
      });
      return orTerms.length > 1 ? `(${orTerms.join("|")})` : orTerms[0];
    });

    return new RegExp(andTerms.map(term => `(?=.*${term})`).join(""), "i");
  }, []);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    if (searchTerm) {
      const regex = buildSearchRegex(searchTerm.toLowerCase());
      const filtered = resources.filter(
        (resource) =>
          regex.test(resource.title.toLowerCase()) ||
          regex.test(resource.content.toLowerCase())
      );
      setFilteredResources(filtered);
      setSearchOk(true);
    } else {
      setFilteredResources([]);
      setSearchOk(false);
    }
  }, [searchTerm, resources, buildSearchRegex]);

  const handleInputClick = useCallback(() => {
    setSearchTerm("");
    setFilteredResources([]);
    setSearchOk(false);
  }, []);

  const highlightText = useCallback((text, terms) => {
    const processedTerms = terms.map(term => {
      if (term.startsWith('"') && term.endsWith('"')) {
        return term.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      } else if (term.endsWith('*')) {
        const baseTerm = term.slice(0, -1).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return `\\b${baseTerm}\\w*\\b`;
      } else {
        return term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    });
  
    const regex = new RegExp(`(${processedTerms.join('|')})`, 'gi');
    return text.replace(regex, match => `<span class="bg-yellow-300">${match}</span>`);
  }, []);

  const termsArray = useMemo(() => searchTerm.split(/\s+/), [searchTerm]);

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start flex-wrap">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
          Rechercher une ressource
        </h1>
        <div className="w-full md:w-auto">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center">
            <input
              type="text"
              placeholder="Recherche..."
              className="input input-bordered w-full md:w-96 mb-2 md:mb-0 md:pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={handleInputClick}
            />
            <button
              type="submit"
              className="btn btn-primary md:ml-2"
            >
              Chercher
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center p-2 md:p-4">
        <div className="w-full max-w-full md:max-w-4xl">
          {searchTerm === "" ? (
            <p className="text-gray-500">
              Tape un mot-clé dans la barre de recherche pour rechercher une ressource.
            </p>
          ) : searchOk && filteredResources.length > 0 ? (
            filteredResources.map((resource, index) => (
              <CollapseBar
                key={index}
                title={<span dangerouslySetInnerHTML={{ __html: highlightText(resource.title, termsArray) }} />}
                content={<span dangerouslySetInnerHTML={{ __html: highlightText(resource.content, termsArray) }} />}
                borderColor="border-blue-500"
              />
            ))
          ) : searchOk && filteredResources.length === 0 ? (
            <CollapseBar
              title="Je ne trouve pas ce que je recherche"
              borderColor="border-red-500"
              content={
                <div>
                  <p>
                    Aucune ressource ne correspond à ta recherche, tu peux réaliser une{" "}
                    <Link to="/missions" className="text-blue-500 underline">
                      mission
                    </Link>{" "}
                    pour créer une ressource.
                  </p>
                </div>
              }
            />
          ) : (
            <p className="text-gray-500">
              Tape un mot-clé dans la barre de recherche pour rechercher une ressource.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
