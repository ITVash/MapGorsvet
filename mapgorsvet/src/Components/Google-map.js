import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';

 /*function Map() {  
   return (
    <GoogleMap 
      defaultZoom={12}
      defaultCenter={{lat: 48.015875, lng: 37.801341}}>
      <Marker />
    </GoogleMap>
   );  
 }*/

//const WrappedMap = withScriptjs(withGoogleMap(Map));
const WrappedMap = withScriptjs(withGoogleMap((props) =>
<GoogleMap
    //ref={map=>{this.map = map}}
    //onIdle={props.onMapIdle}
    defaultZoom={12}
    defaultCenter={{lat: 48.015875, lng: 37.801341}}
    onClick={(e) =>{
      //const az = new window.google.maps.LatLngBounds();
      const az = new window.google.maps.LatLngBounds();
      console.log(az);
    }}>
    {props.isMarker && <Marker position={{lat: 48.015875, lng: 37.801341}} />}    
  </GoogleMap>
));
export default function GoogleMaps() {
  //this.map = React.createRef();  
  return (
    <div style={{width: '100%', height: '100vh'}}>
      <WrappedMap
        onMapIdle={() => {
          let ne = this.map.getBounds().getNorthEast();
          let sw = this.map.getBounds().getSouthWest();
          console.log(ne.lat() + ";" + ne.lng());
          console.log(sw.lat() + ";" + sw.lng());
        }}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC-clMXi48vlK3YPn-3hWcnsxO4Kz2T-4A&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style= {{height: '100%'}} />}
        containerElement={<div style= {{height: '100%'}} />}
        mapElement={<div style= {{height: '100%'}} />} 
      />
    </div>
  );
}