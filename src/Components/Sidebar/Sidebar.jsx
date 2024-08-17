import PropTypes from "prop-types";
import logo from "../../Assets/logo_thp.png";
import SidebarItem from "./SidebarItem";
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
import SidebarDropdown from "./SidebarDropdown";
import HamburgerIcon from './HamburgerIcon';

const Sidebar = ({ isMinimized, onToggle }) => {

  return (
    <>
      <aside
        className={`fixed top-3 left-3 h-95 ${
          isMinimized ? "w-20" : "w-64"
        } bg-black p-4 z-50 rounded-lg transition-all duration-300`}
      >
        {/* Bouton pour minimiser/maximiser la Sidebar */}
        <button
          onClick={onToggle}
          className="absolute top-2 right-2 w-8 h-8 text-white p-1 rounded-full flex items-center justify-center transition-transform duration-200"
        >
          <HamburgerIcon isOpen={!isMinimized} color="white" />
        </button>
      {/* Contenu de la sidebar */}
      <div className="flex flex-col mt-10 h-full">
        {/* Profil */}
        <div className={`flex justify-center items-center my-4 ${isMinimized ? "hidden" : ""}`}>
          <div className="avatar mb-6">
            <div className="w-24 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-1">
            <SidebarItem
              link="/profile"
              text="Profil"
              icon={<img src={profile} alt="mon profil" className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`} />}
              isSidebarMinimized={isMinimized}
            />
            <SidebarItem
              link="/dashboard"
              text="Dashboard"
              icon={<img src={dashboard_logo} alt="dashboard" className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`} />}
              isSidebarMinimized={isMinimized}
            />
            <SidebarItem
              link="/today"
              text="Aujourd'hui"
              icon={<img src={today_logo} alt="aujourd'hui" className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`} />}
              isSidebarMinimized={isMinimized}
            />
            <SidebarItem
              link="/agenda"
              text="Agenda"
              icon={<img src={agenda_logo} alt="agenda" className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`} />}
              isSidebarMinimized={isMinimized}
            />
            <SidebarDropdown
              title="Mes recherches"
              icon={<img src={search_logo} alt="rechercher" className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`} />}
              isSidebarMinimized={isMinimized}
            >
              <SidebarItem
                link="/search"
                text="Recherche"
                icon={<img src={glass_logo} alt="rechercher" className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`} />}
                isSidebarMinimized={isMinimized}
              />
              <SidebarItem
                link="/favorites"
                text="Mes favoris"
                icon={<img src={favorite_logo} alt="favorites" className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`} />}
                isSidebarMinimized={isMinimized}
              />
            </SidebarDropdown>
            <SidebarItem
              link="/faq"
              text="FAQ / Aide"
              icon={<img src={faq_logo} alt="faq" className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`} />}
              isSidebarMinimized={isMinimized}
            />
            <SidebarItem
              link="/contact"
              text="Contact"
              icon={<img src={contact_logo} alt="contact" className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`} />}
              isSidebarMinimized={isMinimized}
            />
            <SidebarItem
              link="/logout"
              text="Déconnexion"
              icon={<img src={disconnect} alt="disconnect" className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`} />}
              textColor="text-red-500"
              isSidebarMinimized={isMinimized}
            />
          </ul>

          {/* Logo ou autre contenu */}
          <div className="flex justify-center items-center">
            {/* Contenu principal de la sidebar */}
            
            <div className={`flex justify-center items-center bottom-0 absolute w-full p-4 ${isMinimized ? "hidden" : ""}`}>
              <a href="https://www.thehackingproject.org">
                <img src={logo} alt="Logo" className={`transition-all duration-300 w-54`} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </aside>
    </>
  );
};

Sidebar.propTypes = {
  isMinimized: PropTypes.bool.isRequired, // La sidebar doit être minimisée ou non
  onToggle: PropTypes.func.isRequired,   // Fonction pour basculer l'état de minimisation
};

export default Sidebar;
