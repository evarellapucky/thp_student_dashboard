import PropTypes from "prop-types";

const ItemCard = (props) => {
  return (
    <div className="item-card bg-white shadow-md rounded-lg overflow-hidden m-4">
      {props.image && (
        <img 
          src={props.image} 
          alt={props.name} 
          className="w-full h-48 object-cover" 
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{props.name}</h2>
        <p className="text-gray-700 mb-4">{props.description}</p>
        <p className="text-blue-600 font-semibold">{props.price} pts</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Acheter
        </button>
      </div>
    </div>
  );
};

// Validation des props
ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ItemCard;
