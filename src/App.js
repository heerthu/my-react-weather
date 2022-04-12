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

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main />} > 
          <Route index element={<Weather />} />
            <Route path="example" element={<Example />} /> 
            <Route path="weather" element={<Weather />} /> 
            <Route path="about" element={<About />} /> 
          </Route>
        </Routes>
    </Router>
  );
}

//export default App;
ReactDOM.render(<App />, document.getElementById("root"));
