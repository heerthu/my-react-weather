import React, { Component } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

class Nav extends Component {
  onSearch(e) {
    e.preventDefault();
    alert('Not yet wired up!');
  }

  render() {
    return (
      <>
        <nav>
          <div className='top-bar'>
            <div className='top-bar-left'>
              <ul className='menu'>
                <li className='menu-text'>React Weather App</li>
                <li> <NavLink to="/weather" className="active" style={{ fontWeight: 'bold' }}>Get Weather | </NavLink> </li>
                <li> <Link to="/about" className="active" style={{ fontWeight: 'bold' }}>About | </Link> </li>
                <li> <Link to="/example" className="active" style={{ fontWeight: 'bold' }}>Example | </Link> </li>
              </ul>

            </div>

            <div className='top-bar-right'>
              <form onSubmit={this.onSearch}>
                <ul className='menu'>
                  <li>
                    <input type='search' placeholder='Search Weather' />
                  </li>
                  <li>
                    <input type='submit' className='button' value={'Get Weather'} />
                  </li>
                </ul>
              </form>
            </div>

          </div>
        </nav>
Í
      </>
    )
  }
}

export default Nav;





