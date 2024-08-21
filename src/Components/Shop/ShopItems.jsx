import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard"; // Assurez-vous que le chemin est correct
import itemsData from "../../Data/items.json"; // Importation statique du JSON

const ShopItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Mettre à jour l'état avec les données JSON importées
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
        />
      ))}
    </div>
  );
};

export default ShopItems;
