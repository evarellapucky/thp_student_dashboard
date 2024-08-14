import CollapseBar from '../Components/CollapseBar'
import DayCard from '../Components/Dashboard/DayCard'

const modules = {
  Introduction: [
    { week: "Semaine 1", days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"] },
    { week: "Semaine 2", days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"] },
  ],
  Fullstack: [
    { week: "Semaine 1", days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"] },
    { week: "Semaine 2", days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"] },
  ],
  Développeur: [
    { week: "Semaine 3", days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"] },
    { week: "Semaine 4", days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"] },
  ],
  DéveloppeurPlus: [
    { week: "Semaine 5", days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"] },
    { week: "Semaine 6", days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"] },
  ],
};


function Agenda() {
  return (
    <div>
      {Object.entries(modules).map(([moduleName, weeks]) => (
        <div key={moduleName}>
          <h1 className='text-4xl font-bold mb-6'>{moduleName}</h1>
          {weeks.map((weekData, index) => (
            <CollapseBar 
              key={index}
              title={weekData.week}
              content={
                <div className="flex flex-row">
                  {weekData.days.map((day, dayIndex) => (
                    <DayCard key={dayIndex} day={day} />
                  ))}
                </div>
              }
              borderColor="border-blue-500"
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Agenda