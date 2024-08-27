import React from "react";
import Journey from "./Journey";
import Points from "./Points";
import MyJokers from "./MyJokers";
import Handshakes from "./Handshakes";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


function TopCards() {
  const [userId, setUserId] = useState("16");
  const [profileData, setProfileData] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/tommy-pellerin/json_refont_thp/main/Users.json');

        const selectedUser = response.data.users.find(user => user.id === userId)
        setProfileData(selectedUser);
      } catch (error) {
        console.error('Erreur lors du fetch des utilisateurs:', error);
      }
    };

    fetchUsers();
  }, []);
    
  return (
    <>
    {profileData? (
      <div className="flex flex-wrap justify-center gap-10">
        <Journey journey={profileData.journey} percentage={profileData.percentage}/>
        <Points points={profileData.points} rank={profileData.rank}/>
        <MyJokers count={profileData.joker} total={3} />
        <Handshakes handshakes={profileData.helping_hand}/>
      </div>
      ) : (
        <p>Utilisateur non trouvé</p>
      )} 
    </>
  );
}

export default TopCards;
