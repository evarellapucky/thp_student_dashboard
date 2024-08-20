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
    axios
      .get(
        "https://api.github.com/repos/evarellapucky/thp_student_dashboard/contents/src/Data/Data.json"
      )
      .then((response) => {
        const content = response.data.content;
        const decodedContent = JSON.parse(
          decodeURIComponent(escape(atob(content)))
        );
        setResources(decodedContent.resources);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données:", error)
      );
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

  const handleSearch = useCallback(() => {
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
    const escapedTerms = terms.map(term =>
      term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );
    const regex = new RegExp(`(${escapedTerms.join('|')})`, 'gi');
    return text.replace(regex, match => `<span class="bg-yellow-300">${match}</span>`);
  }, []);

  const termsArray = useMemo(() => searchTerm.split(/\s+/), [searchTerm]);

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl font-bold mt-8 mb-8">
          Rechercher une ressource
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Recherche..."
            className="input input-bordered w-96 pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={handleInputClick}
          />
          <button
            className="btn btn-primary ml-2"
            onClick={handleSearch}
          >
            Chercher
          </button>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <div className="w-full max-w-4xl">
          {searchTerm === "" ? (
            <p className="text-gray-500">
              Tape un mot-clé dans la barre de recherche pour rechercher une
              ressource.
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
                    Aucune ressource ne correspond à ta recherche, tu peux
                    réaliser une{" "}
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
              Tape un mot-clé dans la barre de recherche pour rechercher une
              ressource.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
