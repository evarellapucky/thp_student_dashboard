import React from "react";
import Journey from "./Journey";
import Points from "./Points";
import MyJokers from "./MyJokers";
import Handshakes from "./Handshakes";


function TopCards() {

  return (
    <>
      <div className="flex flex-row justify-around">
        <Journey />
        <Points />
        <MyJokers />
        <Handshakes />
      </div>
    </>
  );
}

export default TopCards;