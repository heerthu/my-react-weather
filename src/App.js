import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, 
  Route,
  Link,
  useRouteMatch,
  useParams,
  HashRouter,
  Routes
} from 'react-router-dom';
import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';
import Example from './components/Example';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div>
        {/* <Nav/> */}
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/example">example</Link>
          </li>

          <li>
            <Link to="/weather">weather</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul> */}

        <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/example" element={<Example />} /> 
        <Route path="/weather" element={<Weather />} /> 
        <Route path="/about" element={<About />} /> 


        </Routes>
      </div>
    </Router>
  );
}

export default App;
