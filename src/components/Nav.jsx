import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

class Nav extends Component{
  render (){
    return(
      <div>
        <h2>Navigation components</h2>
        <NavLink  to="/weather" className="active" style={{fontWeight: 'bold'}}>Get Weather | </NavLink>
        <Link to="/about" className="active" style={{fontWeight: 'bold'}}>About | </Link>
        <Link to="/example" className="active" style={{fontWeight: 'bold'}}>Example | </Link>

      <a href="#/about">Go to About</a>
      </div>
    );
  }
}

export default Nav;
