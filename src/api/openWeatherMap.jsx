import React, { Component } from 'react';
import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=333cc212f870a55bef6087ad00f9af88&units=imperial';

//333cc212f870a55bef6087ad00f9af88

class openWeatherMap extends Component {
  getTemp = (location) => {
    console.log(location);
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}


export default new openWeatherMap();