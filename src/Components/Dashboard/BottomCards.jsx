import ProjectCard from './ProjectCard'
import MissionCard from './MissionCard'

function BottomCards() {
  return (
    <div className="flex flex-wrap justify-around gap-10">
      <ProjectCard />
      <MissionCard />
    </div>
  )
}

export default BottomCards