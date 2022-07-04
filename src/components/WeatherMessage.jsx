import React, {Component} from 'react';

function WeatherMessage ({location, temp}) {
  return (
    <div>
      <h2 className='text-center'>It's it {temp} in {location}!!!</h2>
    </div>
  )
}

export default WeatherMessage;