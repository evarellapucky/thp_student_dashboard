import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Agenda from "./Pages/Agenda";
import Profile from "./Pages/Profile";
import Sidebar from "./Components/Sidebar/Sidebar";
import DateTime from "./Components/DateTime";
import Today from "./Pages/Today";
import Missions from "./Pages/Missions";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import CategoryDetail from "./Components/Faq/CategoryDetail";
import Shop from "./Pages/Shop";
import { useState } from "react";

function App() {

  const [isSidebarMinimized, setIsSidebarMinimized] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarMinimized(prev => !prev);
  };

  return (
    <>
  <BrowserRouter>
  <div className="flex h-screen">
        <Sidebar isMinimized={isSidebarMinimized} onToggle={handleSidebarToggle} />
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
            <Route path="/contact" element={<Contact />} />
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
