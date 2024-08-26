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
import SidebarItem from './SidebarItem'; 
import SidebarDropdown from './SidebarDropdown'; 
import { useLocation } from 'react-router-dom';

const SidebarMobile = ({ isOpen, onToggle }) => {
  const location = useLocation(); // Obtenir l'URL actuelle
  const isMobile = true; // On peut aussi détecter dynamiquement si besoin

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
        <button
          onClick={onToggle}
          className="absolute top-2 right-2 w-8 h-8 p-1 rounded-full flex items-center justify-center"
        >
          <HamburgerIcon isOpen={isOpen} color={isOpen ? "white" : "black"} />
        </button>

        <div className="flex flex-col h-full">
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
              <SidebarItem
                link="/profile"
                text="Profil"
                icon={<img src={profile} alt="mon profil" className="w-6 h-6 mr-2" />}
                isSidebarMinimized={false}
                onClick={onToggle}
                isMobile={isMobile}
                isActive={location.pathname === "/profile"}
              />
              <SidebarItem
                link="/dashboard"
                text="Dashboard"
                icon={<img src={dashboard_logo} alt="dashboard" className="w-6 h-6 mr-2" />}
                isSidebarMinimized={false}
                onClick={onToggle}
                isMobile={isMobile}
                isActive={location.pathname === "/dashboard"}
              />
              <SidebarItem
                link="/today"
                text="Aujourd'hui"
                icon={<img src={today_logo} alt="aujourd'hui" className="w-6 h-6 mr-2" />}
                isSidebarMinimized={false}
                onClick={onToggle}
                isMobile={isMobile}
                isActive={location.pathname === "/today"}
              />
              <SidebarItem
                link="/agenda"
                text="Agenda"
                icon={<img src={agenda_logo} alt="agenda" className="w-6 h-6 mr-2" />}
                isSidebarMinimized={false}
                onClick={onToggle}
                isMobile={isMobile}
                isActive={location.pathname === "/agenda"}
              />
              <SidebarDropdown
                title="Mes recherches"
                icon={<img src={search_logo} alt="rechercher" className="w-6 h-6 mr-2" />}
                isSidebarMinimized={false}
              >
                <SidebarItem
                  link="/search"
                  text="Recherche"
                  icon={<img src={glass_logo} alt="rechercher" className="w-6 h-6 mr-2" />}
                  isSidebarMinimized={false}
                  onClick={onToggle}
                  isMobile={isMobile}
                  isActive={location.pathname === "/search"}
                />
                <SidebarItem
                  link="/favorites"
                  text="Mes favoris"
                  icon={<img src={favorite_logo} alt="favorites" className="w-6 h-6 mr-2" />}
                  isSidebarMinimized={false}
                  onClick={onToggle}
                  isMobile={isMobile}
                  isActive={location.pathname === "/favorites"}
                />
              </SidebarDropdown>
              <SidebarItem
                link="/faq"
                text="FAQ / Aide"
                icon={<img src={faq_logo} alt="faq" className="w-6 h-6 mr-2" />}
                isSidebarMinimized={false}
                onClick={onToggle}
                isMobile={isMobile}
                isActive={location.pathname === "/faq"}
              />
              <SidebarItem
                link="/contact"
                text="Contact"
                icon={<img src={contact_logo} alt="contact" className="w-6 h-6 mr-2" />}
                isSidebarMinimized={false}
                onClick={onToggle}
                isMobile={isMobile}
                isActive={location.pathname === "/contact"}
              />
              <SidebarItem
                link="/logout"
                text="Déconnexion"
                icon={<img src={disconnect} alt="disconnect" className="w-6 h-6 mr-2" />}
                isSidebarMinimized={false}
                onClick={onToggle}
                isMobile={isMobile}
                textColor="text-red-500"
              />
            </ul>
          </nav>

          <div className="flex justify-center items-center mb-auto">
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
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default SidebarMobile;
