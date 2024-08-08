import React from "react";
import TopCards from "../Components/Dashboard/TopCards";
import BottomCards from "../Components/Dashboard/BottomCards";
import Week from "../Components/Dashboard/Week";

function Dashboard() {
  return (
    <>
      <TopCards />
      <Week />
      <BottomCards />
    </>
  );
}

export default Dashboard;
