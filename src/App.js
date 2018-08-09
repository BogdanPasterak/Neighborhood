import React, { Component } from 'react';
import './App.css';
import Map from './Map.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [
        {
         "lat" : 55.0364155,
         "lng" : -7.980156
        },
        {
         "lat" : 54.9507574,
         "lng" : -7.7238267
        },
         {
         "lat" : 55.134083,
         "lng" : -7.8417757
        },
         {
         "lat" : 54.9290853,
         "lng" : -7.8085484
        },
        {
         "lat" : 54.9495469,
         "lng" : -7.7378217
        }
      ]
    }
    //this.autocompleteSearchDebounced = debounce(500, this.autocompleteSearch);
    //this.autocompleteSearchThrottled = throttle(500, this.autocompleteSearch);
  }


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
