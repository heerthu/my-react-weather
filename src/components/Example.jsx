import React, { Component } from 'react';
import {link} from 'react-router';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function Example(props) {
  return (
    <div>
      <h1 className='text-center'>Example</h1>
      <p>Here are few example location to try out:</p>

      <ol>
        <li>
          <Link to='/?location=Singapore'>Singapore, SG</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
       
    </div>

  )
}

export default Example;
