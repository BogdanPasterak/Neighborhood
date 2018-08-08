import React, { Component } from 'react';
import './App.css';
import Map from './Map.js'

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="action">
        </div>
        <div className="map-div">
          <div className="title">
            <h1>My Neighborhood</h1>
          </div>
            <Map />
        </div>
      </div>
    );
  }
}

export default App;
