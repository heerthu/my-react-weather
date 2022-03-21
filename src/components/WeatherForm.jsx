import React, { Component, useEffect, useRef } from 'react';

class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.location = React.createRef('London, UK');
    console.log(this.location);
  }

  onFormSubmit =(e) =>{
    e.preventDefault();

    if (this.location.current.value.length > 0) {
     // var locVal =this.location;
     // this.location = '';
      this.props.onSearch(this.location);
    }
    
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>Get Weather</h1>
        <input type='text' ref={this.location} placeholder='Enter city Name' />
        <button>Get Weather</button>
      </form>
    );
  }
}

export default WeatherForm;