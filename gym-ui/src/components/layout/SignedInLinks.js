import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
      <ul className="right">
          <li><NavLink to="/create">New Workout</NavLink></li>
          <li><NavLink to="/">Log Out</NavLink></li>
          <li><NavLink to="/" className="btn btn-floating mint lighten-1">NN</NavLink></li>
      </ul>
  )
}

export default SignedInLinks