import PropTypes from "prop-types";
import DefaultButton from "../DefaultButton";

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
        <div className="flex justify-center mt-4">
        <DefaultButton name="acheter" color="info" />
        </div>
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
