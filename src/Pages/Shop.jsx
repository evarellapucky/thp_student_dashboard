import ShopItems from "../Components/Shop/ShopItems";
import { Link } from "react-router-dom";
import BackButton from "../Components/BackButton";
import DefaultButton from "../Components/DefaultButton";


function shop() {
  return (
    <>
    <BackButton />
      <div className="flex justify-between">
        <h1>Shop</h1>
        <Link to="/historique">
          <DefaultButton name="Historique"/>
        </Link>
      </div>
      <ShopItems />
    </>
  );
}
export default shop