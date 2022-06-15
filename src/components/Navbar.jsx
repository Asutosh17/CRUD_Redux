import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='nav'>
        <div><Link to="/" style={{textDecoration:"none", color:"white"}}><h3>REDUX CRUD</h3></Link></div>
        <div>
            <Link to="/" style={{textDecoration:"none", color:"white"}}><h3>HOME</h3></Link>
            <Link to="/create-user" style={{textDecoration:"none", color:"white"}}><h3>ADD-USER</h3></Link>
        </div>
    </div>
  )
}
