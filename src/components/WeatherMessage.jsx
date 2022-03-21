import React, {Component} from 'react';

class WeatherMessage extends Component{
  render () {
    var {location, temp} = this.props;

    return (
      <div>
        <p>It's it {temp} in {location}!!!</p>
      </div>
    );
  }
}

export default WeatherMessage;