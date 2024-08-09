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

  const handleToggleSearch = (e) => {
    e.preventDefault();
    setIsOpenSearch(!isOpenSearch);
    console.log("isOpenSearch :", !isOpenSearch);
  };


  return (
    <>
      <aside className="bg-black text-white fixed top-3 left-3 h-95 w-64 p-4 z-50 rounded-lg">
        <div className="flex justify-center items-center my-4">
          <div className="avatar mb-6">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
        <nav>
          <ul className="space-y-1">
            <SidebarItem
              link="/profile"
              text="Profil"
              icon={<img src={profile} alt="mon profil" className="w-6 h-6 mr-2"></img>
              }
            />
            <SidebarItem
              link="/dashboard"
              text="Dashboard"
              icon={<img src={dashboard_logo} alt="dashboard"  className="w-6 h-6 mr-2"></img>
              }
            />
            <SidebarItem
              link="/today"
              text="Aujourd&#39;hui"
              icon={<img src={today_logo} alt="aujourd'hui"   className="w-6 h-6 mr-2"></img>
                            }
            />
            <SidebarItem
              link="/agenda"
              text="Agenda"
              icon={<img src={agenda_logo} alt="agenda" className="w-6 h-6 mr-2"></img>
              }
            />
            <li className="p-2 hover:bg-blue-700 rounded">
              <details
                open={isOpenSearch}
                onClick={handleToggleSearch}
                className="cursor-pointer"
              >
                <summary className="text-white flex items-center"
                  
                >
                  <span className="mr-2 flex items-center">
                    <img src={search_logo} alt="rechercher" className="w-6 h-6 mr-2"></img>
                    Mes recherches
                  </span>
                  <img src={toggler_logo} alt="toggle" className="w-4 h-4"></img>
                </summary>
                {isOpenSearch && (   
                <ul className="p-2 space-y-1">
                  <SidebarItem
                    link="/search"
                    text="Recherche"
                    icon={<img src={glass_logo} alt="rechercher" className="w-6 h-6 mr-2"></img>                     
                    }
                  />
                  <SidebarItem
                    link="/favorites"
                    text="Mes favoris"
                    icon={ <img src={favorite_logo} alt="favorites" className="w-6 h-6 mr-2"></img>
                    }
                  />
                </ul>
                )}
              </details>
            </li>
            <SidebarItem
              link="/faq"
              text="FAQ / Aide"
              icon={ <img src={faq_logo} alt="faq" className="w-6 h-6 mr-2"></img>
                
              }
            />
            <SidebarItem
              link="/logout"
              text="Déconnexion"
              icon={<img src={disconnect} alt="disconnect"   className="w-6 h-6 mr-2"></img>                
              }
              textColor="text-red-500"
            />
          </ul>
          <div className="flex justify-center items-center mt-44">
            <a href="https://www.thehackingproject.org" className="flex justify-center items-center">
              <img src={logo} alt="Logo" />
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
