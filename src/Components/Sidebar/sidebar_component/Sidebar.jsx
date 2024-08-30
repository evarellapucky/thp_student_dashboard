import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import logo from "../../../Assets/thpLogo.svg";
import logo2 from "../../../Assets/thpLogoMinimised.svg";
import SidebarItem from "../SidebarItem";
import LogoutIcon from "../sidebar_icons/Disconnect_Icon";
import UserIcon from "../sidebar_icons/Profile_Icon";
import HomeIcon from "../sidebar_icons/Dashboard_Icon";
import CalendarIcon from "../sidebar_icons/Day_Icon";
import AgendaIcon from "../sidebar_icons/Agenda_Icon";
import FolderIcon from "../sidebar_icons/Folder_Icon";
import SearchIcon from "../sidebar_icons/Search_Icon";
import HeartIcon from "../sidebar_icons/Heart_Icon";
import HelpIcon from "../sidebar_icons/Question_Mark_Icon";
import IdentificationIcon from "../sidebar_icons/Identification_Icon";
import SidebarDropdown from "../SidebarDropdown";
import HamburgerIcon from "../HamburgerIcon";
import { useLocation } from "react-router-dom";
import "./sidebar.css"; 

const Sidebar = ({ isMinimized, onToggle }) => {
  const [currentLogo, setCurrentLogo] = useState(isMinimized ? logo2 : logo);
  const [animationFinished, setAnimationFinished] = useState(false);
  const location = useLocation();
  const logoRef = useRef(null);

  const handleTransitionEnd = () => {
    setAnimationFinished(true);
    if (logoRef.current) {
      logoRef.current.classList.remove("rotate-disappear");
      logoRef.current.classList.add("reveal-left-to-right");
    }
  };

  useEffect(() => {
    const logoElement = logoRef.current;
    if (logoElement) {
      logoElement.addEventListener("transitionend", handleTransitionEnd);
    }

    return () => {
      if (logoElement) {
        logoElement.removeEventListener("transitionend", handleTransitionEnd);
      }
    };
  }, []);

  useEffect(() => {
    if (animationFinished) {
      const newLogo = isMinimized ? logo2 : logo;
      setCurrentLogo(newLogo);
      setAnimationFinished(false);
    }
  }, [animationFinished, isMinimized]);

  useEffect(() => {
    if (!isMinimized) {
      handleLogoTransition();
    }
  }, [isMinimized]);

  const handleLogoTransition = () => {
    if (logoRef.current) {
      logoRef.current.classList.remove("reveal-left-to-right");
      logoRef.current.classList.add("rotate-disappear");
    }
  };

  return (
    <>
      <aside
        className={`fixed top-3 left-3 h-95 ${
          isMinimized ? "w-20" : "w-64"
        } bg-gray-gradient p-4 z-50 rounded-lg transition-all duration-50`}
      >
        <button
          onClick={onToggle}
          className={`absolute top-2 right-2 w-8 h-8 ${
            isMinimized ? "mr-4" : ""
          } text-white p-1 rounded-full flex items-center justify-center transition-transform duration-200`}
        >
          <HamburgerIcon isOpen={!isMinimized} color="white" />
        </button>

        <div
          className={`flex flex-col h-full ${
            isMinimized ? "items-center justify-center" : ""
          }`}
        >
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
                  <UserIcon
                    size={24}
                    color={location.pathname === "/profile" && isMinimized ?"#007BFF" : "white"}
                    className={`${isMinimized ? "mx-auto" : "mr-2"}`}
                  />
                }
                isSidebarMinimized={isMinimized}
                isActive={location.pathname === "/profile"}
              />
              <SidebarItem
                link="/dashboard"
                text="Dashboard"
                icon={
                  <HomeIcon
                    size={24}
                    color={location.pathname === "/dashboard" && isMinimized ? "#007BFF" : "white"}
                    className={`${isMinimized ? "mx-auto" : "mr-2"}`}
                  />
                }
                isSidebarMinimized={isMinimized}
                isActive={location.pathname === "/dashboard"}
              />
              <SidebarItem
                link="/today"
                text="Calendrier"
                icon={
                  <CalendarIcon
                    size={24}
                    color={location.pathname === "/today" && isMinimized ? "#007BFF" : "white"}
                    className={`${isMinimized ? "mx-auto" : "mr-2"}`}
                  />
                }
                isSidebarMinimized={isMinimized}
                isActive={location.pathname === "/today"}
              />
              <SidebarItem
                link="/agenda"
                text="Agenda"
                icon={
                  <AgendaIcon
                    size={24}
                    color={location.pathname === "/agenda" && isMinimized ? "#007BFF" : "white"}
                    className={`${isMinimized ? "mx-auto" : "mr-2"}`}
                  />
                }
                isSidebarMinimized={isMinimized}
                isActive={location.pathname === "/agenda"}
              />
              <SidebarDropdown
                title="Mes recherches"
                icon={
                  <FolderIcon
                    size={24}
                    color={(location.pathname.startsWith("/search") || location.pathname === "/favorites") && isMinimized ? "#007BFF" : "white"}
                    className={`${isMinimized ? "mx-auto" : "mr-2"}`}
                  />
                }
                isSidebarMinimized={isMinimized}
              >
                <SidebarItem
                  link="/search"
                  text="Recherche"
                  icon={
                    <SearchIcon
                      size={24}
                      color={location.pathname === "/search" && isMinimized ? "#007BFF" : "white"}
                      className={`${isMinimized ? "mx-auto" : "mr-2"}`}
                    />
                  }
                  isSidebarMinimized={isMinimized}
                  isActive={location.pathname === "/search"}
                />
                <SidebarItem
                  link="/favorites"
                  text="Mes favoris"
                  icon={
                    <HeartIcon
                      size={24}
                      color={location.pathname === "/favorites" && isMinimized ? "#007BFF" : "white"}
                      className={`${isMinimized ? "mx-auto" : "mr-2"}`}
                    />
                  }
                  isSidebarMinimized={isMinimized}
                  isActive={location.pathname === "/favorites"}
                />
              </SidebarDropdown>

              <SidebarItem
                link="/faq"
                text="FAQ"
                icon={
                  <HelpIcon
                    size={24}
                    color={location.pathname === "/faq" && isMinimized ? "#007BFF" : "white"}
                    className={`${isMinimized ? "mx-auto" : "mr-2"}`}
                  />
                }
                isSidebarMinimized={isMinimized}
                isActive={location.pathname === "/faq"}
              />
              <SidebarItem
                link="/contact"
                text="contact"
                icon={
                  <IdentificationIcon
                    size={24}
                    color={location.pathname === "/contact" && isMinimized ? "#007BFF" : "white"}
                    className={`${isMinimized ? "mx-auto" : "mr-2"}`}
                  />
                }
                isSidebarMinimized={isMinimized}
                isActive={location.pathname === "/contact"}
              />
          
              {/* Bouton de déconnexion séparé */}
              <div>
                <SidebarItem
                  link="/logout"
                  text="Déconnexion"
                  icon={
                    <LogoutIcon
                      size={24}
                      color="red"
                      className={`${isMinimized ? "mx-auto" : "mr-2"}`}
                    />
                  }
                  isSidebarMinimized={isMinimized}
                  isActive={location.pathname === "/logout"}
                />
              </div>
            </ul>

            <div
              className={`
                logo-container
                absolute bottom-0 left-1/2 transform -translate-x-1/2 overflow-hidden
                ${isMinimized ? "w-12" : "w-52"} 
                h-24
              `}
            >
              <a href="https://www.thehackingproject.org/">
              <img
                  ref={logoRef}
                  src={currentLogo}
                  alt="Logo"
                  className={`custom-logo ${isMinimized ? "custom-logo-minimized" : "custom-logo-expanded"}`}
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
