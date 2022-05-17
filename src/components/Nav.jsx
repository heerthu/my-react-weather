import React, { Component } from 'react';
import {Link, NavLink,Outlet} from 'react-router-dom';

function Nav () {
  return(
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className='menu-text'>React Weather App</li>
          <li> <NavLink  to="/weather" className="active" style={{fontWeight: 'bold'}}>Get Weather | </NavLink> </li>
          <li> <Link to="/about" className="active" style={{fontWeight: 'bold'}}>About | </Link> </li>
          <li> <Link to="/example" className="active" style={{fontWeight: 'bold'}}>Example | </Link> </li>
        </ul>
      </div>

      <div className='top-bar-right'>

      </div>
    </div>
  )
}

export default Nav;


