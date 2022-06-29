import React, {Component} from 'react';

function About (props) {
  return (
    <div>
      <h1 className='text-center'>About🥰🥰🥰😘</h1>
      <p>
        This is a weather application build on React. 
        I have build this for The Complete React Web App D´veloper Course.
      </p>

      <p>
        Here are some of the tools I used: 
      </p>


      <ul>
        <li>
          <a href='https://facebook.github.io/react'>React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href='http://openweathermap.org'>Open Weather Map</a> - I used Open Weather Map to search for the weather data by city name.
        </li>
      </ul>
    </div>
  )
 }

export default About;
