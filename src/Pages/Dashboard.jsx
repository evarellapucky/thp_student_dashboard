import TopCards from "../Components/Dashboard/TopCards";
import BottomCards from "../Components/Dashboard/BottomCards";
import Week from "../Components/Dashboard/Week";
import './dashboard.css';

function Dashboard() {
  return (
    <div className="flex flex-col">
      <TopCards />
      <Week />
      <BottomCards />
    </div>
  );
}

export default Dashboard;
