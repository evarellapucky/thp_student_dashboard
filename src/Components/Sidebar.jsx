import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/today">Aujourd'hui</Link>
    <Link to="/agenda">Agenda</Link>
    <Link to="/profile">Profil</Link>
    </div>
  )
}

export default Sidebar