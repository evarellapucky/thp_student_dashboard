// Resource.jsx
import { useLocation } from 'react-router-dom';
import useFavorites from '../Components/useFavorites';
import BackButton from '../Components/BackButton';

const Resource = () => {
  const location = useLocation();
  const { resource } = location.state || {};
  const { favorites, toggleFavorite } = useFavorites();


  console.log({ resource });

  if (!resource) {
    return <p>Aucune ressource trouvée.</p>;
  }

  const favorite = favorites.includes(resource.id);

  return (
    <>
    <div className="flex justify-center ">
    <div className="w-5/6 p-4 rounded-lg shadow-lightInner p-6">
    <BackButton />  
    <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(resource.id);
          }}
          aria-label={favorite ? "Retirer des favoris" : "Ajouter aux favoris"}
          className="flex items-center mr-3"
        >
          {favorite ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-6 h-6 text-red-500"
            >
              <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-6 h-6 text-gray-500"
            >
              <path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/>
            </svg>
          )}
        </button>
      <h1 className="text-center">{resource.title}</h1>
      <p className="mt-4">{resource.content}</p>
    </div>
  </div>
  </>
  );
};

export default Resource;
