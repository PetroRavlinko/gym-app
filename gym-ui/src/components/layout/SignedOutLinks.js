import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
      <ul className="right">
          <li><NavLink to="/signup" className="btn btn-primary mint lighten-1">Sign Up</NavLink></li>
          <li><NavLink to="/signin">Sign In</NavLink></li>
      </ul>
  )
}

export default SignedOutLinks