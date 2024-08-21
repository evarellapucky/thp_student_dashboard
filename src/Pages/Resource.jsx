// Resource.jsx
import { useLocation } from 'react-router-dom';

const Resource = () => {
  const location = useLocation();
  const { resource } = location.state || {};

  if (!resource) {
    return <p>Aucune ressource trouvée.</p>;
  }

  return (
    <div className="flex justify-center ">
    <div className="w-5/6 p-4 rounded-lg shadow-lightInner p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center">{resource.title}</h1>
      <p className="mt-4">{resource.content}</p>
    </div>
  </div>
  );
};

export default Resource;
