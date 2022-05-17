import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { App } from '../App';

function Main (props) {
  return (
    <div>
      <Nav/>
        <div className='row'>
          <div className='coloumns medium-6 large-4 small-centered'>
           {props.children}
          </div>
        </div>
    </div>
  )
}

export default Main;
//ReactDOM.render(<App />, document.getElementById("root"));