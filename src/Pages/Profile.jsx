import { useState } from 'react';
import MyJourney from "../Components/Profile/MyJourney";
import MyProfile from "../Components/Profile/MyProfile";
import MyDocuments from "../Components/Profile/MyDocuments";
import Leaderboard from "../Components/Profile/Leaderboard";
import Directory from "../Components/Profile/Directory";
import HandshakesTable from "../Components/HandshakeTable";
import MyBumpChart from "../Components/BumpChart";
import Ambassador from "../Components/Profile/Ambassador";
import DailyTab from "../Components/DailyTab.jsx";
import DirectoryTable from '../Components/DirectoryTable.jsx';

function Profile() {
  const [selectedDailyTab, setSelectedDailyTab] = useState('handshakes');

  const data1 = [
    {
        "id": "Nb de Coups de mains",
        "data": [
            { "x": "01 08 2024", "y": 5 },
            { "x": "02 08 2024", "y": 2 },
            { "x": "03 08 2024", "y": 4 },
            { "x": "04 08 2024", "y": 1 },
            { "x": "05 08 2024", "y": 3 }
        ]
    }
];

const data2 = [
    {
        "id": "Difficultées rencontrées",
        "data": [
            { "x": "01 08 2024", "y": 4 },
            { "x": "02 08 2024", "y": 3 },
            { "x": "03 08 2024", "y": 1 },
            { "x": "04 08 2024", "y": 2 },
            { "x": "05 08 2024", "y": 5 }
        ]
    }
];

const data3 = [
  {
      "date": "01 08 2024",
      "rate": "3",
      "content": "Description de la difficulte 1."
  },
  {
      "date": "02 08 2024",
      "rate": "3",
      "content": "Description de la difficulte 2."
  },
  {
      "date": "03 08 2024",
      "rate": "3",
      "content": "Description de la difficulte 3."
  },
  {
      "date": "04 08 2024",
      "rate": "3",
      "content": "Description de la difficulte 4."
  }
];

  return (
    
    <div role="tablist" className="tabs tabs-lifted">
      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Profil" defaultChecked />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <MyProfile/>
      </div>

      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Documents" />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <MyDocuments/>
      </div>

      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Leaderboard" />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <Leaderboard/>
      </div>

      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Ambassadeur" />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <Ambassador/>
      </div>

      <input type="radio" name="my_tabs_2" role="tab" className="tab whitespace-nowrap" aria-label="Mon parcours"/>
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <MyJourney/>
      </div>

      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Annuaire" />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <Directory/>
      </div>

      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Daily" />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <div className="flex flex-row justify-around mt-6">
          <DailyTab onSelect={(tab) => setSelectedDailyTab(tab)} />
        </div>
        {selectedDailyTab === 'handshakes' && (
          <div>
            <MyBumpChart data={data1}/>
            <HandshakesTable/>
          </div>
        )}
        {selectedDailyTab === 'difficults' && (
          <div>
            <MyBumpChart data={data2} />
            <h1 className="text-center text-2xl font-bold mt-8">Liste des difficultés rencontrées</h1>
            <DirectoryTable data={data3} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
