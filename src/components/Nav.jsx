import React, { Component } from 'react';
import {Link, NavLink,Outlet} from 'react-router-dom';

function Nav () {
  return(
    <>
      <nav>
      <h2>Navigation components</h2>
      <NavLink  to="/weather" className="active" style={{fontWeight: 'bold'}}>Get Weather | </NavLink>
      <Link to="/about" className="active" style={{fontWeight: 'bold'}}>About | </Link>
      <Link to="/example" className="active" style={{fontWeight: 'bold'}}>Example | </Link>
    </nav>
    <Outlet />
    </>
  )
}

export default Nav;
