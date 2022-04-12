import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { App } from '../App';

function Main (props) {
  return (
    <div>
      <Nav/>
      {props.children}
    </div>
  )
}

export default Main;
//ReactDOM.render(<App />, document.getElementById("root"));