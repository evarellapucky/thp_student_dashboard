import React from 'react'
import ProjectCard from './ProjectCard'
import MissionCard from './MissionCard'

function BottomCards() {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      <ProjectCard />
      <MissionCard />
    </div>
  )
}

export default BottomCards