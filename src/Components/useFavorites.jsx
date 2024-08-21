import React from 'react';
import { useAtom } from 'jotai';
import { favoritesAtom } from './Atom/atoms';

function useFavorites() {
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  const toggleFavorite = (resourceId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(resourceId)) {
        return prevFavorites.filter((id) => id !== resourceId);
      } else {
        return [...prevFavorites, resourceId];
      }
    });
  };

  return { favorites, toggleFavorite };
}


export default useFavorites
