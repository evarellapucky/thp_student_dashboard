import PropTypes from "prop-types";
import logo from "../../Assets/thpLogo.svg";
import logo2 from "../../Assets/thpLogoMinimised.svg";
import SidebarItem from "./SidebarItem";
import disconnect from "../../Assets/disconnect.svg";
import profile from "../../Assets/profile.svg";
import dashboard_logo from "../../Assets/dashboard.svg";
import Daylogo from "../../Assets/day.svg";
import agenda_logo from "../../Assets/agenda.svg";
import search_logo from "../../Assets/search.svg";
import glass_logo from "../../Assets/magnifying_glass.svg";
import favorite_logo from "../../Assets/favorites.svg";
import faq_logo from "../../Assets/question_mark.svg";
import contact_logo from "../../Assets/contact.svg";
import SidebarDropdown from "./SidebarDropdown";
import HamburgerIcon from "./HamburgerIcon";
import { useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ isMinimized, onToggle }) => {
  const location = useLocation(); // Obtenir l'URL actuelle

  return (
    <>
      <aside
        className={`fixed top-3 left-3 h-95 ${
          isMinimized ? "w-20" : "w-64"
        } bg-slate-700 p-4 z-50 rounded-lg transition-all duration-50`}
      >
        {/* Bouton pour minimiser/maximiser la Sidebar */}
        <button
          onClick={onToggle}
          className={`absolute top-2 right-2 w-8 h-8 ${
            isMinimized ? "mr-4" : ""
          } text-white p-1 rounded-full flex items-center justify-center transition-transform duration-200`}
        >
          <HamburgerIcon isOpen={!isMinimized} color="white" />
        </button>
        {/* Contenu de la sidebar */}
        <div
          className={`flex flex-col h-full ${
            isMinimized ? "items-center justify-center" : ""
          }`}
        >
          {/* Profil */}
          <div
            className={`flex justify-center items-center my-4 ${
              isMinimized ? "hidden" : ""
            }`}
          >
            <div className="avatar mb-4">
              <div className="w-24 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Profile"
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav
            className={`flex-1 ${
              isMinimized ? "flex flex-col items-center justify-center" : ""
            }`}
          >
            <ul className="space-y-1">
              <SidebarItem
                link="/profile"
                text="Profil"
                icon={
                  <img
                    src={profile}
                    alt="mon profil"
                    className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`}
                  />
                }
                isSidebarMinimized={isMinimized}
                isActive={location.pathname === "/profile"} // Ajouter la prop isActive
              />
              <SidebarItem
                link="/dashboard"
                text="Dashboard"
                icon={
                  <img
                    src={dashboard_logo}
                    alt="dashboard"
                    className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`}
                  />
                }
                isSidebarMinimized={isMinimized}
                isActive={location.pathname === "/dashboard"} // Ajouter la prop isActive
              />
              <SidebarItem
                link="/today"
                text="Aujourd'hui"
                icon={
                  <img
                    src={Daylogo}
                    alt="aujourd'hui"
                    className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`}
                  />
                }
                isSidebarMinimized={isMinimized}
                isActive={location.pathname === "/today"} // Ajouter la prop isActive
              />
              <SidebarItem
                link="/agenda"
                text="Agenda"
                icon={
                  <img
                    src={agenda_logo}
                    alt="agenda"
                    className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`}
                  />
                }
                isSidebarMinimized={isMinimized}
                isActive={location.pathname === "/agenda"} // Ajouter la prop isActive
              />
              <SidebarDropdown
                title="Mes recherches"
                icon={
                  <img
                    src={search_logo}
                    alt="rechercher"
                    className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`}
                  />
                }
                isSidebarMinimized={isMinimized}
              >
                <SidebarItem
                  link="/search"
                  text="Recherche"
                  icon={
                    <img
                      src={glass_logo}
                      alt="rechercher"
                      className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`}
                    />
                  }
                  isSidebarMinimized={isMinimized}
                  isActive={location.pathname === "/search"} // Ajouter la prop isActive
                />
                <SidebarItem
                  link="/favorites"
                  text="Mes favoris"
                  icon={
                    <img
                      src={favorite_logo}
                      alt="favorites"
                      className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`}
                    />
                  }
                  isSidebarMinimized={isMinimized}
                  isActive={location.pathname === "/favorites"} // Ajouter la prop isActive
                />
              </SidebarDropdown>
              <SidebarItem
                link="/faq"
                text="FAQ / Aide"
                icon={
                  <img
                    src={faq_logo}
                    alt="faq"
                    className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`}
                  />
                }
                isSidebarMinimized={isMinimized}
                isActive={location.pathname === "/faq"} // Ajouter la prop isActive
              />
              <SidebarItem
                link="/contact"
                text="Contact"
                icon={
                  <img
                    src={contact_logo}
                    alt="contact"
                    className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`}
                  />
                }
                isSidebarMinimized={isMinimized}
                isActive={location.pathname === "/contact"} // Ajouter la prop isActive
              />
          
            {/* Bouton de déconnexion séparé */}
            <div>
              <SidebarItem
                link="/logout"
                text="Déconnexion"
                icon={
                  <img
                    src={disconnect}
                    alt="disconnect"
                    className={`w-6 h-6 ${isMinimized ? "mx-auto" : "mr-2"}`}
                  />
                }
                textColor="text-red-500"
                isSidebarMinimized={isMinimized}
              />
            </div>
            </ul>

            <div
              className="logo-container"
              style={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%)",
                width: isMinimized ? "50px" : "200px", 
                height: isMinimized ? "100px" : "100px", 
                overflow: "hidden",
              }}
            >
              <a href="https://www.thehackingproject.org/">
              <img
                src={isMinimized ? logo2 : logo}
                alt="Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  transition: "clip-path 0.9s ease",
                  clipPath: isMinimized
                    ? "inset(0 -100% 0 0)"
                    : "inset(0 0 0 0)",  
                  transform: isMinimized ? "scale(2.5)" : "scale(1)",
                }}
              />
              </a>
            </div>


          </nav>
        </div>
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  isMinimized: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Sidebar;
