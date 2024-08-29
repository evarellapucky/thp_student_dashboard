import Journey from "./Journey";
import Points from "./Points";
import MyJokers from "./MyJokers";
import Handshakes from "./Handshakes";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


function TopCards() {
  const [userId] = useState("16");
  const [profileData, setProfileData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/tommy-pellerin/json_refont_thp/main/Users.json');
        const selectedUser = response.data.users.find(user => user.id === userId)

        if (selectedUser) {
          setProfileData(selectedUser);
        } else {
          setError('Utilisateur non trouvé');
        }
      } catch (error) {
        console.error('Erreur lors du fetch des utilisateurs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [userId]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
    
  return (
    <>
    {profileData? (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 justify-items-center items-center mx-3">
        <Journey journey={profileData.journey} percentage={Number(profileData.percentage)}/>
        <Points points={profileData.points} rank={profileData.rank}/>
        <MyJokers count={Number(profileData.joker)} total={3} />
        <Handshakes handshakes={profileData.helping_hand}/>
      </div>
      ) : (
        <p>Utilisateur non trouvé</p>
      )} 
    </>
  );
}

export default TopCards;
