import React from "react";
import Journey from "./Journey";
import Points from "./Points";
import MyJokers from "./MyJokers";
import Handshakes from "./Handshakes";


function DashboardCards() {

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-2 w-full">
        <Journey />
        <Points />
        <MyJokers />
        <Handshakes />
      </div>
    </>
  );
}

export default DashboardCards;
