import React, { Component } from 'react'
import { withGoogleMap, GoogleMap } from 'react-google-maps'

class Map extends Component {
   render() {

     const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = { { lat: 54.95, lng: -7.72 } }
          defaultZoom = { 12 }
        >
        </GoogleMap>
     ));
     return(
          <GoogleMapExample
            containerElement={ <div className="map" id="map"/> }
            mapElement={ <div className="full-h" /> }
          />
     )
   }
}

export default Map;

//Or wrap withGoogleMap() with withScriptjs() to load asynchronously
//import withScriptjs from 'react-google-maps/lib/async/withScriptjs';
//const myMap = withScriptjs(withGoogleMap((props) => (<GoogleMap />)));