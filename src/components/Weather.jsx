import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';

class Weather extends Component {
  // getInitialState() {
  //   return {
  //     isLoading: false
  //   };
  // }
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  handleNewName = (location) => {
    var that = this;
    var locVal = location.current.value;

    this.setState({ isLoading: true });
    console.log(locVal);
    openWeatherMap.getTemp(locVal)
      .then(function (temp) {
        that.setState({
          location: locVal,
          temp: temp,
          isLoading: false
        });
      }, function (errorMessage) {
        that.setState({ isLoading: false });
        alert(errorMessage);
      })
  }

  render() {
    var { isLoading, location, temp } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching Weather.....</h3>;
      } else if (location && temp) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    return (
      <div>
        <h3>Weather components</h3>
        <WeatherForm onSearch={this.handleNewName} />
        {renderMessage()}
      </div>
    );
  }
}

export default Weather;