import React from "react";
import DashboardCards from "../Components/DashboardCard";
import WeekDay from "../Components/WeekDay";

function Dashboard() {
  return (
    <>
      <DashboardCards />
      <h2>Semaine en cours</h2>
      <WeekDay />
    </>
  );
}

export default Dashboard;
