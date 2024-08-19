import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Agenda from "./Pages/Agenda";
import Profile from "./Pages/Profile";
import Sidebar from "./Components/Sidebar/Sidebar";
import MobileSidebar from "./Components/Sidebar/SidebarMobile";
import HamburgerIcon from './Components/Sidebar/HamburgerIcon'; 
import DateTime from "./Components/DateTime";
import Today from "./Pages/Today";
import Missions from "./Pages/Missions";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import CategoryDetail from "./Components/Faq/CategoryDetail";
import Shop from "./Pages/Shop";
import { useState } from "react";
import Search from "./Pages/Search";
import Favorites from "./Pages/Favorites";
import Projets from "./Pages/Projets";
import { useAtom } from "jotai";
import { totalMissionCountAtom } from "./Components/Atom/atoms";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false); // État pour la sidebar mobile
  const [, setTotalMissionsCount] = useAtom(totalMissionCountAtom);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIssuesCount = async () => {
      const owner = 'ethereum-optimism';
      const repo = 'ecosystem-contributions';
      let totalIssues = 0;
      let page = 1;
      const perPage = 100;
      let hasMoreIssues = true;

      try {
        do {
          const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': `token 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`,
          },
          params: {
            per_page: perPage,
            page: page,
          }
        });

        const issues = response.data;

        const filteredIssues = issues.filter(issue => !issue.pull_request);

        if (filteredIssues.length === 0) {
          hasMoreIssues = false ;
        } else {
          totalIssues += filteredIssues.length;
          page++;
        }
        } while (hasMoreIssues);
        
        setTotalMissionsCount(totalIssues);
      } catch (err) {
        setError('Error lors de la récupération des issues');
        console.error(err);
      }
    };

    fetchIssuesCount();
  }, [setTotalMissionsCount]);

  const handleSidebarToggle = () => {
    setIsSidebarMinimized(prev => !prev);
  };

  const handleMobileSidebarToggle = () => {
    setIsMobileSidebarOpen(prev => !prev);
  };

   return (
    <>
      <BrowserRouter>
        <div className="flex h-screen">
          {/* Sidebar pour les grands écrans */}
          <div className="hidden md:block">
            <Sidebar isMinimized={isSidebarMinimized} onToggle={handleSidebarToggle} />
          </div>

          {/* Sidebar pour les petits écrans */}
          <div className="md:hidden">
            <button
              onClick={handleMobileSidebarToggle}
              className="fixed top-3 left-3 z-50"
            >
              <HamburgerIcon isOpen={isMobileSidebarOpen} color={isMobileSidebarOpen ? "white" : "black"}/>
            </button>
            <MobileSidebar isOpen={isMobileSidebarOpen} onToggle={handleMobileSidebarToggle} />
          </div>

          <main
            className={`flex-1 p-6 transition-all duration-300 ${
              isSidebarMinimized ? 'ml-20' : 'ml-64'
            }`}
          >
            <DateTime />
            <Routes>
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
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
