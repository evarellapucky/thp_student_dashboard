import { useState } from "react";
import logo from "../../Assets/logo_thp.png";
import SidebarItem from "./SidebarItem";
import disconnect from "../../Assets/disconnect.svg";
import profile from "../../Assets/profile.svg";
import dashboard_logo from "../../Assets/dashboard.svg";
import today_logo from "../../Assets/today.svg";
import agenda_logo from "../../Assets/agenda.svg";
import search_logo from "../../Assets/search.svg";
import toggler_logo from "../../Assets/toggler.svg";
import glass_logo from "../../Assets/magnifying_glass.svg";
import favorite_logo from "../../Assets/favorites.svg";
import faq_logo from "../../Assets/question_mark.svg";

const Sidebar = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false); // Nouvel état pour la Sidebar réduite

  const handleToggleSearch = (e) => {
    e.preventDefault();
    setIsOpenSearch(!isOpenSearch);
  };

  const handleToggleMinimize = () => { // Fonction pour toggler le mode réduit
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  return (
    <>
      {/* Sidebar ouverte par défaut */}
      <aside
        className={`text-white fixed top-3 left-3 h-full ${
          isSidebarMinimized ? "w-20 flex flex-col justify-between" : "w-64 bg-black"
        } p-4 z-50 rounded-lg transition-all duration-300`}
      >
        {/* Bouton pour minimiser/maximiser la Sidebar */}
        <button
          onClick={handleToggleMinimize}
          className="absolute top-2 right-2 bg-gray-700 text-white p-1 rounded-full"
        >
          {isSidebarMinimized ? ">" : "<"}
        </button>

        <div className="flex justify-center items-center my-4">
          <div className={`avatar mb-6 ${isSidebarMinimized ? "hidden" : ""}`}>
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Profile"/>
            </div>
          </div>
        </div>
        <nav>
          <ul className="space-y-1">
            <SidebarItem
              link="/profile"
              text="Profil"
              icon={<img src={profile} alt="mon profil" className={`w-6 h-6 mr-2 ${isSidebarMinimized ? "filter invert" : ""}`} />}
              isSidebarMinimized={isSidebarMinimized}
            />
            <SidebarItem
              link="/dashboard"
              text="Dashboard"
              icon={<img src={dashboard_logo} alt="dashboard" className={`w-6 h-6 mr-2 ${isSidebarMinimized ? "filter invert" : ""}`} />}
              isSidebarMinimized={isSidebarMinimized}
            />
            <SidebarItem
              link="/today"
              text="Aujourd'hui"
              icon={<img src={today_logo} alt="aujourd'hui" className={`w-6 h-6 mr-2 ${isSidebarMinimized ? "filter invert" : ""}`} />}
              isSidebarMinimized={isSidebarMinimized}
            />
            <SidebarItem
              link="/agenda"
              text="Agenda"
              icon={<img src={agenda_logo} alt="agenda" className={`w-6 h-6 mr-2 ${isSidebarMinimized ? "filter invert" : ""}`} />}
              isSidebarMinimized={isSidebarMinimized}
            />
            <li className="p-2 rounded">
              <details
                open={isOpenSearch}
                onClick={handleToggleSearch}
                className="cursor-pointer"
              >
                <summary className={`text-white flex items-center ${!isSidebarMinimized && !isOpenSearch ? "hover:bg-blue-700" : "hover:scale-125"}`}>
                  <span className={`mr-2 flex items-center`}>
                    <img src={search_logo} alt="rechercher" className={`w-6 h-6 mr-2 ${isSidebarMinimized ? "filter invert" : ""}`} />
                    {isSidebarMinimized ? "" : "Mes recherches"}
                  </span>
                  <img src={toggler_logo} alt="toggle" className={`w-4 h-4 ${isSidebarMinimized ? "hidden" : ""}`} />
                </summary>
                {isOpenSearch && !isSidebarMinimized && (
                  <ul className="p-2 space-y-1">
                    <SidebarItem
                      link="/search"
                      text="Recherche"
                      icon={<img src={glass_logo} alt="rechercher" className="w-6 h-6 mr-2" />}
                      isSidebarMinimized={isSidebarMinimized}
                    />
                    <SidebarItem
                      link="/favorites"
                      text="Mes favoris"
                      icon={<img src={favorite_logo} alt="favorites" className="w-6 h-6 mr-2" />}
                      isSidebarMinimized={isSidebarMinimized}
                    />
                  </ul>
                )}
              </details>
            </li>
            <SidebarItem
              link="/faq"
              text="FAQ / Aide"
              icon={<img src={faq_logo} alt="faq" className={`w-6 h-6 mr-2 ${isSidebarMinimized ? "filter invert" : ""}`} />}
              isSidebarMinimized={isSidebarMinimized}
            />
            <SidebarItem
              link="/contact"
              text="Contact"
              icon={
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-6 h-6 mr-2" 
                  viewBox="0 0 512 512">
                    <path fill="#ffffff" d="M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM208 288l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z"/>
                    </svg>
              }
            />
            <SidebarItem
              link="/logout"
              text="Déconnexion"
              icon={<img src={disconnect} alt="disconnect" className="w-6 h-6 mr-2 hover:scale-125 transition-transform duration-200" />}
              textColor="text-red-500"
              isSidebarMinimized={isSidebarMinimized}
            />
          </ul>
          <div className="flex justify-center items-center mt-44">
            <a href="https://www.thehackingproject.org" className={`flex justify-center items-center ${isSidebarMinimized ? "hidden" : ""}`}>
              <img src={logo} alt="Logo" className={`transition-all duration-300 w-24`} />
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
