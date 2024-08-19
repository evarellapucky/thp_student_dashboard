import PropTypes from "prop-types";
import logo from "../../Assets/logo_thp.png";
import disconnect from "../../Assets/disconnect.svg";
import profile from "../../Assets/profile.svg";
import dashboard_logo from "../../Assets/dashboard.svg";
import today_logo from "../../Assets/today.svg";
import agenda_logo from "../../Assets/agenda.svg";
import search_logo from "../../Assets/search.svg";
import glass_logo from "../../Assets/magnifying_glass.svg";
import favorite_logo from "../../Assets/favorites.svg";
import faq_logo from "../../Assets/question_mark.svg";
import contact_logo from "../../Assets/contact.svg";
import HamburgerIcon from './HamburgerIcon';
import SidebarItem from './SidebarItem'; // Importation du composant SidebarItem
import SidebarDropdown from './SidebarDropdown'; // Importation du composant SidebarDropdown

const SidebarMobile = ({ isOpen, onToggle }) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onToggle}
      ></div>
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-black p-4 z-50 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Bouton pour fermer la Sidebar */}
        <button
          onClick={onToggle}
          className="absolute top-2 right-2 w-8 h-8 p-1 rounded-full flex items-center justify-center"
        >
          <HamburgerIcon isOpen={isOpen} color={isOpen ? "white" : "black"} />
        </button>

        {/* Contenu de la sidebar */}
        <div className="flex flex-col mt-10 h-full">
          <div className="flex justify-center items-center my-4">
            <div className="avatar mb-6">
              <div className="w-16 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Profile"
                />
              </div>
            </div>
          </div>

          <nav className="flex-1">
            <ul className="space-y-1">
              <li className="text-white">
                <a href="/profile" className="flex items-center p-2" onClick={onToggle}>
                  <img src={profile} alt="mon profil" className="w-6 h-6 mr-2" />
                  Profil
                </a>
              </li>
              <li className="text-white">
                <a href="/dashboard" className="flex items-center p-2" onClick={onToggle}>
                  <img src={dashboard_logo} alt="dashboard" className="w-6 h-6 mr-2" />
                  Dashboard
                </a>
              </li>
              <li className="text-white">
                <a href="/today" className="flex items-center p-2" onClick={onToggle}>
                  <img src={today_logo} alt="aujourd'hui" className="w-6 h-6 mr-2" />
                  Aujourd'hui
                </a>
              </li>
              <li className="text-white">
                <a href="/agenda" className="flex items-center p-2" onClick={onToggle}>
                  <img src={agenda_logo} alt="agenda" className="w-6 h-6 mr-2" />
                  Agenda
                </a>
              </li>
              {/* Dropdown */}
              <SidebarDropdown
                title="Mes recherches"
                icon={<img src={search_logo} alt="rechercher" className="w-6 h-6 mr-2" />}
                isSidebarMinimized={false}  // En mobile, ce sera toujours déplié comme en mode sidebar ouverte
              >
                <SidebarItem
                  link="/search"
                  text="Recherche"
                  icon={<img src={glass_logo} alt="rechercher" className="w-6 h-6 mr-2" />}
                  isSidebarMinimized={false}
                  onClick={onToggle} // Fermer la sidebar après le clic
                />
                <SidebarItem
                  link="/favorites"
                  text="Mes favoris"
                  icon={<img src={favorite_logo} alt="favorites" className="w-6 h-6 mr-2" />}
                  isSidebarMinimized={false}
                  onClick={onToggle} // Fermer la sidebar après le clic
                />
              </SidebarDropdown>
              <li className="text-white">
                <a href="/faq" className="flex items-center p-2" onClick={onToggle}>
                  <img src={faq_logo} alt="faq" className="w-6 h-6 mr-2" />
                  FAQ / Aide
                </a>
              </li>
              <li className="text-white">
                <a href="/contact" className="flex items-center p-2" onClick={onToggle}>
                  <img src={contact_logo} alt="contact" className="w-6 h-6 mr-2" />
                  Contact
                </a>
              </li>
              <li className="text-red-500">
                <a href="/logout" className="flex items-center p-2" onClick={onToggle}>
                  <img src={disconnect} alt="disconnect" className="w-6 h-6 mr-2" />
                  Déconnexion
                </a>
              </li>
            </ul>
          </nav>

          {/* Logo */}
          <div className="flex justify-center items-center mt-auto">
            <a href="https://www.thehackingproject.org">
              <img src={logo} alt="Logo" className="w-32" />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

SidebarMobile.propTypes = {
  isOpen: PropTypes.bool.isRequired,  // La sidebar est ouverte ou non
  onToggle: PropTypes.func.isRequired,  // Fonction pour basculer l'état de la sidebar
};

export default SidebarMobile;
