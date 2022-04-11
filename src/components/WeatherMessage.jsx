import React, {Component} from 'react';

function WeatherMessage ({location, temp}) {
  return (
    <div>
      <p>It's it {temp} in {location}!!!</p>
    </div>
  )
}

export default WeatherMessage;