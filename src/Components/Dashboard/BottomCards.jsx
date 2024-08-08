import React from 'react'
import ProjectCard from './ProjectCard'
import MissionCard from './MissionCard'

function BottomCards() {
  return (
    <div className="flex flex-row justify-around">
      <ProjectCard />
      <MissionCard />
    </div>
  )
}

export default BottomCards