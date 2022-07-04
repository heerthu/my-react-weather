import React, {Component} from 'react';

function WeatherMessage ({location, temp}) {
  return (
    <div>
      <h3 className='text-center'>It's it {temp} in {location}!!!</h3>
    </div>
  )
}

export default WeatherMessage;