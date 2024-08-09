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
        className={`bg-black text-white fixed top-3 left-3 h-95 ${
          isSidebarMinimized ? "w-20" : "w-64"
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
              text={isSidebarMinimized ? "" : "Profil"}
              icon={<img src={profile} alt="mon profil" className="w-6 h-6 mr-2"></img>}
            />
            <SidebarItem
              link="/dashboard"
              text={isSidebarMinimized ? "" : "Dashboard"}
              icon={<img src={dashboard_logo} alt="dashboard" className="w-6 h-6 mr-2"></img>}
            />
            <SidebarItem
              link="/today"
              text={isSidebarMinimized ? "" : "Aujourd'hui"}
              icon={<img src={today_logo} alt="aujourd'hui" className="w-6 h-6 mr-2"></img>}
            />
            <SidebarItem
              link="/agenda"
              text={isSidebarMinimized ? "" : "Agenda"}
              icon={<img src={agenda_logo} alt="agenda" className="w-6 h-6 mr-2"></img>}
            />
            <li className="p-2 hover:bg-blue-700 rounded">
              <details
                open={isOpenSearch}
                onClick={handleToggleSearch}
                className="cursor-pointer"
              >
                <summary className="text-white flex items-center">
                  <span className="mr-2 flex items-center">
                    <img src={search_logo} alt="rechercher" className="w-6 h-6 mr-2"></img>
                    {isSidebarMinimized ? "" : "Mes recherches"}
                  </span>
                  <img src={toggler_logo} alt="toggle" className={`w-4 h-4 ${isSidebarMinimized ? "hidden" : ""}`}></img>
                </summary>
                {isOpenSearch && !isSidebarMinimized && (
                  <ul className="p-2 space-y-1">
                    <SidebarItem
                      link="/search"
                      text="Recherche"
                      icon={<img src={glass_logo} alt="rechercher" className="w-6 h-6 mr-2"></img>}
                    />
                    <SidebarItem
                      link="/favorites"
                      text="Mes favoris"
                      icon={<img src={favorite_logo} alt="favorites" className="w-6 h-6 mr-2"></img>}
                    />
                  </ul>
                )}
              </details>
            </li>
            <SidebarItem
              link="/faq"
              text={isSidebarMinimized ? "" : "FAQ / Aide"}
              icon={<img src={faq_logo} alt="faq" className="w-6 h-6 mr-2"></img>}
            />
            <SidebarItem
              link="/logout"
              text={isSidebarMinimized ? "" : "Déconnexion"}
              icon={<img src={disconnect} alt="disconnect" className="w-6 h-6 mr-2"></img>}
              textColor="text-red-500"
            />
          </ul>
          <div className="flex justify-center items-center mt-44">
            <a href="https://www.thehackingproject.org" className="flex justify-center items-center">
              <img src={logo} alt="Logo" className={`transition-all duration-300 ${isSidebarMinimized ? "w-12" : "w-24"}`} />
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
