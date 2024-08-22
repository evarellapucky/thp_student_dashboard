import React from 'react';
import { useAtom } from 'jotai';
import { favoritesAtom } from './Atom/atoms';

function useFavorites() {
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  const toggleFavorite = (resourceId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(resourceId)) {
        console.log(`Removing ${resourceId} from favorites`);
        return prevFavorites.filter((id) => id !== resourceId);
      } else {
        console.log(`Adding ${resourceId} to favorites`);
        return [...prevFavorites, resourceId];
      }
    });
  };

  return { favorites, toggleFavorite };
}


export default useFavorites
