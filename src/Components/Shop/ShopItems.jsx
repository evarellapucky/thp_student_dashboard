import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import itemsData from "../../Data/items.json";

const ShopItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemsData.items);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <ItemCard
          key={index}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default ShopItems;
