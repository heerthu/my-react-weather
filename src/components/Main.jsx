import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { App } from '../App';
import { Grid, Cell, Menu, MenuItem } from 'react-foundation';
import { Outlet } from 'react-router-dom';


class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className='row'>
          <div className='small-10  small-centered columns'>
            <Outlet />
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
//ReactDOM.render(<App />, document.getElementById("root"));