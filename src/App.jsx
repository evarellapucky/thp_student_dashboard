import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Components/Sidebar/sidebar_component/Sidebar";
import MobileSidebar from "./Components/Sidebar/SidebarMobile";
import HamburgerIcon from "./Components/Sidebar/HamburgerIcon";
import DateTime from "./Components/DateTime";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  totalMissionCountAtom,
  issuesAtom,
  tokenAtom,
} from "./Components/Atom/atoms";
import axios from "axios";
import AppRoutes from "./Routes/AppRoutes";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

function App() {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false); // État pour la sidebar mobile
  const isMobile = useIsMobile(); // Utiliser le hook pour vérifier si on est en mode mobile
  const [, setTotalMissionsCount] = useAtom(totalMissionCountAtom);
  const [, setIssues] = useAtom(issuesAtom);
  const [error, setError] = useState(null);
  const token = useAtom(tokenAtom)[0];

  useEffect(() => {
    const fetchIssuesCount = async () => {
      const owner = "ethereum-optimism";
      const repo = "ecosystem-contributions";
      // const owner = 'Marcaraph';
      // const repo = 'Missions';
      let allIssues = [];
      let page = 1;
      const perPage = 100;
      let hasMoreIssues = true;

      try {
        do {
          const response = await axios.get(
            `https://api.github.com/repos/${owner}/${repo}/issues`,
            {
              headers: {
                Accept: "application/vnd.github.v3+json",
                Authorization: `token ${token}`,
              },
              params: {
                per_page: perPage,
                page: page,
              },
            }
          );

          const issues = response.data;

          const filteredIssues = issues.filter((issue) => !issue.pull_request);

          if (filteredIssues.length === 0) {
            hasMoreIssues = false;
          } else {
            allIssues = [...allIssues, ...filteredIssues];
            page++;
          }
        } while (hasMoreIssues);

        setIssues(allIssues);
        setTotalMissionsCount(allIssues.length);
      } catch (err) {
        setError("Error lors de la récupération des issues");
        console.error(err);
      }
    };

    fetchIssuesCount();
  }, [setIssues, setTotalMissionsCount]);

  const handleSidebarToggle = () => {
    setIsSidebarMinimized((prev) => !prev);
  };

  const handleMobileSidebarToggle = () => {
    setIsMobileSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <BrowserRouter>
        {/* Sidebar pour les grands écrans */}
        <div className="hidden md:block">
          <Sidebar
            isMinimized={isSidebarMinimized}
            onToggle={handleSidebarToggle}
          />
        </div>

        {/* Sidebar pour les petits écrans */}
        {isMobile && (
          <div>
            <button
              onClick={handleMobileSidebarToggle}
              className="fixed top-3 left-3 z-50"
            >
              <HamburgerIcon
                isOpen={isMobileSidebarOpen}
                color={isMobileSidebarOpen ? "white" : "black"}
              />
            </button>
            <MobileSidebar
              isOpen={isMobileSidebarOpen}
              onToggle={handleMobileSidebarToggle}
            />
          </div>
          )}

          <main
            className={`flex-1 transition-all duration-300 ${
              isMobile ? '' : 'ml-20 p-6'}`}
          >
            <DateTime />
            <AppRoutes />
          </main>
          <footer className="py-5"></footer>
      </BrowserRouter>
    </>
  );
}

export default App;
