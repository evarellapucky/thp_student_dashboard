import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Agenda from "./Pages/Agenda";
import Profile from "./Pages/Profile";
import Sidebar from "./Components/Sidebar/Sidebar";
import DateTime from "./Components/DateTime";
import Today from "./Pages/Today";

function App() {
  return (
    <>
  <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex flex-col flex-1 ml-64 p-6">
          <DateTime />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/today" element={<Today />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
