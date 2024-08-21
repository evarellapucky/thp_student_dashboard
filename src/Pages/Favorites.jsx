import React, { useEffect, useState } from "react";
import axios from "axios";
import useFavorites from "../Components/useFavorites";
import CollapseBar from "../Components/CollapseBar";

const Favorites = () => {  
  const { favorites, toggleFavorite } = useFavorites();
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
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

        const favoriteResources = allResources.filter(resource => favorites.includes(resource.id));
        setResources(favoriteResources);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, [favorites]);


  
    return (
       <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">Mes Favoris</h1>
      <div className="flex justify-center p-2 md:p-4">
        <div className="w-full max-w-full md:max-w-4xl">
          {resources.length > 0 ? (
            resources.map((resource) => (
              <CollapseBar
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
    </div>
    )
}

export default Favorites;