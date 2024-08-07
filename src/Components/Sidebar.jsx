import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/agenda">Agenda</Link>
    <Link to="/profile">Profil</Link>
    </>
  )
}

export default Sidebar