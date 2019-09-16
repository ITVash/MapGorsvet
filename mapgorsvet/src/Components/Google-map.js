import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

 function Map() {
   return (
    <GoogleMap 
      defaultZoom={12}
      defaultCenter={{lat: 48.015875, lng: 37.801341}} />
   );  
 }

const WrappedMap = withScriptjs(withGoogleMap(Map));
export default function GoogleMaps() {  
  return (
    <div style={{width: '100%', height: '100vh'}}>
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBxslvjoPgptzBC6qj5KWr_SrAosWt63R8&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style= {{height: '100%'}} />}
        containerElement={<div style= {{height: '100%'}} />}
        mapElement={<div style= {{height: '100%'}} />} />
    </div>
  );
}