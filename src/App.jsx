import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Agenda from "./Pages/Agenda";
import Profile from "./Pages/Profile";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
  <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 ml-64 p-6">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
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
