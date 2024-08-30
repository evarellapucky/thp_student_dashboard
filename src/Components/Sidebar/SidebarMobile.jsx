import PropTypes from "prop-types";
import logo from "../../Assets/thpLogo.svg";
import HamburgerIcon from './HamburgerIcon';
import SidebarItem from './SidebarItem'; 
import SidebarDropdown from './SidebarDropdown'; 
import { useLocation } from 'react-router-dom';

// Import des icônes depuis le dossier 'sidebar_icons'
import AgendaIcon from './sidebar_icons/Agenda_Icon';
import DashboardIcon from './sidebar_icons/Dashboard_Icon';
import DayIcon from './sidebar_icons/Day_Icon';
import DisconnectIcon from './sidebar_icons/Disconnect_Icon';
import FolderIcon from './sidebar_icons/Folder_Icon';
import HeartIcon from './sidebar_icons/Heart_Icon';
import IdentificationIcon from './sidebar_icons/Identification_Icon';
import ProfileIcon from './sidebar_icons/Profile_Icon';
import QuestionMarkIcon from './sidebar_icons/Question_Mark_Icon';
import SearchIcon from './sidebar_icons/Search_Icon';

const SidebarMobile = ({ isOpen, onToggle }) => {
  const location = useLocation();
  const isMobile = true;

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
      <div
        className="fixed inset-0 bg-gray-darker opacity-50"
        onClick={onToggle}
      ></div>
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-gray-gradient p-4 z-50 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        <button
          onClick={onToggle}
          className="absolute top-2 right-2 w-8 h-8 p-1 rounded-full flex items-center justify-center"
        >
          <HamburgerIcon isOpen={isOpen} color={isOpen ? "white" : "black"} />
        </button>

        <div className="flex flex-col flex-1 mt-12">
          <div className="flex justify-center items-center mb-8">
            <div className="avatar">
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
                icon={<ProfileIcon size={24} className="mr-2 text-white" />}
                isSidebarMinimized={false}
                onClick={onToggle}
                isMobile={isMobile}
                isActive={location.pathname === "/profile"}
              />
              <SidebarItem
                link="/dashboard"
                text="Dashboard"
                icon={<DashboardIcon size={24} className="mr-2 text-white" />}
                isSidebarMinimized={false}
                onClick={onToggle}
                isMobile={isMobile}
                isActive={location.pathname === "/dashboard"}
              />
              <SidebarItem
                link="/today"
                text="Aujourd'hui"
                icon={<DayIcon size={24} className="mr-2 text-white" />}
                isSidebarMinimized={false}
                onClick={onToggle}
                isMobile={isMobile}
                isActive={location.pathname === "/today"}
              />
              <SidebarItem
                link="/agenda"
                text="Agenda"
                icon={<AgendaIcon size={24} className="mr-2 text-white" />}
                isSidebarMinimized={false}
                onClick={onToggle}
                isMobile={isMobile}
                isActive={location.pathname === "/agenda"}
              />
              <SidebarDropdown
                title="Mes recherches"
                icon={<FolderIcon size={24} className="mr-2 text-white" />}
                isSidebarMinimized={false}
              >
                <SidebarItem
                  link="/search"
                  text="Recherche"
                  icon={<SearchIcon size={24} className="mr-2 text-white" />}
                  isSidebarMinimized={false}
                  onClick={onToggle}
                  isMobile={isMobile}
                  isActive={location.pathname === "/search"}
                />
                <SidebarItem
                  link="/favorites"
                  text="Mes favoris"
                  icon={<HeartIcon size={24} className="mr-2 text-white" />}
                  isSidebarMinimized={false}
                  onClick={onToggle}
                  isMobile={isMobile}
                  isActive={location.pathname === "/favorites"}
                />
              </SidebarDropdown>
              <SidebarItem
                link="/faq"
                text="FAQ / Aide"
                icon={<QuestionMarkIcon size={24} className="mr-2 text-white" />}
                isSidebarMinimized={false}
                onClick={onToggle}
                isMobile={isMobile}
                isActive={location.pathname === "/faq"}
              />
              <SidebarItem
                link="/contact"
                text="Contact"
                icon={<IdentificationIcon size={24} className="mr-2 text-white" />}
                isSidebarMinimized={false}
                onClick={onToggle}
                isMobile={isMobile}
                isActive={location.pathname === "/contact"}
              />
              <SidebarItem
                link="/logout"
                text="Déconnexion"
                icon={<DisconnectIcon size={24} className="mr-2 text-white" />}
                isSidebarMinimized={false}
                onClick={onToggle}
                isMobile={isMobile}
                textColor="text-red"
              />
            </ul>
          </nav>

          <div className="flex justify-center items-center mt-auto mb-4">
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
