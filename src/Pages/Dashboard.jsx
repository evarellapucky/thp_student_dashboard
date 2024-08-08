import React from "react";
import TopCards from "../Components/Dashboard/TopCards";
import BottomCards from "../Components/Dashboard/BottomCards";

function Dashboard() {
  return (
    <>
      <TopCards />
      <h2>Semaine en cours</h2>
      <BottomCards />
    </>
  );
}

export default Dashboard;
