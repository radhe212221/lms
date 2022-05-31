import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function Header() {
  const state = useSelector(s => s)
  const { menu, loggedin, role, user } = state
  return (
    <header>
      <h1>{role} panel</h1>
      <div>
        {loggedin && <Link to="/">home</Link>}
        {loggedin && menu?.map(x => <Link key={x.label} to={`/${role}/${x.label}`}>{x.label}</Link>)}
        {loggedin && <Link to={`/${role}/logout`}>logout</Link>}
      </div>
    </header>
  )
}
