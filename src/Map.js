import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


class Map extends Component {
  render() {
    const url = "https://maps.googleapis.com/maps/api/js?key=";
    const key = "AIzaSyDx06paKbu3mHdx8irOe0kgVLxorL1up1M";
    const urlAndKey = url.concat(key);

    const GoogleMapExample = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultCenter = { { lat: 54.95, lng: -7.73 } }
        defaultZoom = { 12 }
      >
      </GoogleMap>
     ));
     return(
        <GoogleMapExample
          googleMapURL={url}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={ <div className="map" id="map"/> }
          mapElement={ <div className="full-h" /> }
        />
     )
   }
}

export default Map;
