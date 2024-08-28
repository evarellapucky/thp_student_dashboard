import { useState, useEffect } from 'react';
import MyJourney from "../Components/Profile/MyJourney";
import MyProfile from "../Components/Profile/MyProfile";
import MyDocuments from "../Components/Profile/MyDocuments";
import Leaderboard from "../Components/Profile/Leaderboard";
import Directory from "../Components/Profile/Directory";
import Ambassador from "../Components/Profile/Ambassador";
import Daily from '../Components/Profile/Daily.jsx';
import DailyModal from '../Components/DailyModal.jsx';


const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLargeScreen;
};

function Profile() {
  const [selectedTab, setSelectedTab] = useState('Profil');
  const isLargeScreen = useIsLargeScreen();
  
  const renderContent = () => {
    switch (selectedTab) {
      case 'Profil':
        return <MyProfile />;
      case 'Documents':
        return <MyDocuments />;
      case 'Leaderboard':
        return <Leaderboard />;
      case 'Ambassadeur':
        return <Ambassador />;
      case 'Mon parcours':
        return <MyJourney />;
      case 'Annuaire':
        return <Directory />;
      case 'Daily':
        return <Daily />;
      default:
        return null;
    }
  };

  return (
    <>

      {!isLargeScreen && (
      <div className="dropdown">
        <select
          className="dropdown-select bg-base-100 rounded-box z-[1] p-2 shadow m-1"
          value={selectedTab}
          onChange={(e) => setSelectedTab(e.target.value)}
        >
          <option value="Profil">Profil</option>
          <option value="Documents">Documents</option>
          <option value="Leaderboard">Leaderboard</option>
          <option value="Ambassadeur">Ambassadeur</option>
          <option value="Mon parcours">Mon parcours</option>
          <option value="Annuaire">Annuaire</option>
          <option value="Daily">Daily</option>
        </select>

        <div className="w-screen bg-base-100 border-gray-medium rounded-box p-6">
        {renderContent()}
        </div>
      </div>
      )}

      {isLargeScreen && (
        <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className={`tab ${selectedTab === 'Profil' ? 'tab-active [--tab-border-color:theme(colors.mediumgray)] ' : ''}`} aria-label="Profil" defaultChecked onClick={() => setSelectedTab('Profil')}/>
        {selectedTab === "Profil" && 
          <div role="tabpanel" className="tab-content bg-base-100 border-gray-medium rounded-box p-6" >
            <MyProfile/>
          </div>
        }

        <input type="radio" name="my_tabs_2" role="tab" className={`tab ${selectedTab === 'Documents' ? ' [--tab-border-color:theme(colors.mediumgray)]' : ''}`} aria-label="Documents" onClick={() => setSelectedTab('Documents')}/>
        {selectedTab === "Documents" && 
        <div role="tabpanel" className="tab-content bg-base-100 border-gray-medium rounded-box p-6">
          <MyDocuments/>
        </div>
        }

        <input type="radio" name="my_tabs_2" role="tab" className={`tab ${selectedTab === 'Leaderboard' ? ' [--tab-border-color:theme(colors.mediumgray)]' : ''}`} aria-label="Leaderboard" onClick={() => setSelectedTab('Leaderboard')}/>
        {selectedTab === "Leaderboard" && 
        <div role="tabpanel" className="tab-content bg-base-100 border-gray-medium rounded-box p-6">
          <Leaderboard/>
        </div>
        }

        <input type="radio" name="my_tabs_2" role="tab" className={`tab ${selectedTab === 'Ambassadeur' ? ' [--tab-border-color:theme(colors.mediumgray)]' : ''}`} aria-label="Ambassadeur" onClick={() => setSelectedTab('Ambassadeur')}/>
        {selectedTab === "Ambassadeur" && 
        <div role="tabpanel" className="tab-content bg-base-100 border-gray-medium rounded-box p-6">
          <Ambassador/>
        </div>
        }

        <input type="radio" name="my_tabs_2" role="tab" className={`tab whitespace-nowrap ${selectedTab === 'Mon parcours' ? ' [--tab-border-color:theme(colors.mediumgray)]' : ''}`} aria-label="Mon parcours" onClick={() => setSelectedTab('Mon parcours')}/>
        {selectedTab === "Mon parcours" && 
        <div role="tabpanel" className="tab-content bg-base-100 border-gray-medium rounded-box p-6">
          <MyJourney/>
        </div>
        }

        <input type="radio" name="my_tabs_2" role="tab" className={`tab ${selectedTab === 'Annuaire' ? ' [--tab-border-color:theme(colors.mediumgray)]' : ''}`} aria-label="Annuaire" onClick={() => setSelectedTab('Annuaire')}/>
        {selectedTab === "Annuaire" && 
        <div role="tabpanel" className="tab-content bg-base-100 border-gray-medium rounded-box p-6">
          <Directory/>
        </div>
        }

        <input type="radio" name="my_tabs_2" role="tab" className={`tab ${selectedTab === 'Daily' ? ' [--tab-border-color:theme(colors.mediumgray)]' : ''}`} aria-label="Daily" onClick={() => setSelectedTab('Daily')}/>
        {selectedTab === "Daily" && 
        <div role="tabpanel" className="tab-content bg-base-100 border-gray-medium rounded-box p-6">
          <Daily/>
          <DailyModal/>
        </div>
        }
      </div>
      )}

    </>
  );
}

export default Profile;
