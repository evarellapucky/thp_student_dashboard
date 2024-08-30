import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Agenda from "../Pages/Agenda";
import Contact from "../Pages/Contact";
import Faq from "../Pages/Faq";
import Missions from "../Pages/Missions";
import Profile from "../Pages/Profile";
import Resource from "../Pages/Resource";
import Search from "../Pages/Search";
import SignIn from "../Pages/SignIn";
import Shop from "../Pages/Shop";
import Today from "../Pages/Today";
import Favorites from "../Pages/Favorites";
import Projets from "../Pages/Projets";
import KitUI from "../Pages/KitUI";
import CategoryDetail from "../Components/Faq/CategoryDetail";
import Historique from "../Components/Shop/Historique";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/today" element={<Today />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/projets" element={<Projets />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<Search />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/faq/:categoryName" element={<CategoryDetail />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/historique" element={<Historique />} />
      <Route path="/projects" element={<Projets />} />
      <Route path="/resource" element={<Resource />} />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/kit_ui" element={<KitUI />} />
    </Routes>
  );
}

export default AppRoutes;
