import React from 'react'
import "./Navbar.css"
import Mobile from "../../assets/Mobile.png"

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <nav>
            <div className="navbar-branch">
                <h1>AEDUX</h1>
            </div>
            <div className="navbar-menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Page</li>
                    <li>Blog</li>
                    <li>News</li>
                    <li className='menu-item'>
                        <div className="nav-icon">
                            <img src={Mobile} alt="" />
                        </div>
                        <div className="nav-item">
                            <p>Contact</p>
                            <p>0969907215</p>
                        </div>
                    </li>
                </ul>
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar