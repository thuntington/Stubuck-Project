import React from 'react';
import './navBar.css';
import logo from './stubucks-logo.png'

const NavBar = () => {

    return (
      <div className="navBar">
       <img className='logo' alt='logo' src= {logo}  />  
      <ul className="nav">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Menu</li>
                <li>Rewards</li>
                <li>Want to join our team?</li>
                <li>Location</li>
                <li>Specials</li>
              </ul>
      </div>
    );
  }

export default NavBar;