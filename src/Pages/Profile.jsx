import MyProfile from "../Components/Profile/MyProfile";
import MyDocuments from "../Components/Profile/MyDocuments";
import Leaderboard from "../Components/Profile/Leaderboard";
import Directory from "../Components/Profile/Directory";
import Table from "../Components/Table";
import MyJourney from "../Components/Profile/MyJourney";
import MyBumpChart from "../Components/BumpChart";
import Handshakes from "../Components/Dashboard/Handshakes";
import Ambassador from "../Components/Profile/Ambassador";

function Profile() {
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
        <Handshakes/>
        <Handshakes/>
        </div>
        <MyBumpChart/>
        <Table/>
      </div>
    </div>
  );
}

export default Profile;
