import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import useFavorites from "../Components/useFavorites";
import CollapseBarWithFavorite from "../Components/CollapseBarWithFavorite";
const Favorites = () => {  
  const { favorites, toggleFavorite } = useFavorites();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://raw.githubusercontent.com/evarellapucky/Favorites/main/favorites.json");
        const allResources = [];
        Object.values(response.data).forEach(category => {
          category.forEach(week => {
            week.days.forEach(day => {
              if (day.resources) {
                allResources.push(...day.resources);
              }
            });
          });
        });
        setResources(allResources);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        setError("Erreur lors de la récupération des données.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const favoriteResources = useMemo(() => {
    return resources.filter(resource => favorites.includes(resource.id));
  }, [resources, favorites]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }


  
    return (
       <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">Mes Favoris</h1>
      <div className="flex flex-col p-2 md:p-4">
          {favoriteResources.length > 0 ? (
            favoriteResources.map((resource) => (
              <CollapseBarWithFavorite
                key={resource.id}
                title={resource.title}
                content={resource.content}
                borderColor="border-blue-500"
                isFavorite={true}
                toggleFavorite={() => toggleFavorite(resource.id)}
              />
            ))
          ) : (
            <p className="text-gray-500">Vous n'avez aucun favori pour le moment.</p>
          )}
      </div>
    </div>
    )
}

export default Favorites;