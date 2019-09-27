import React, { Fragment, Component } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

export default class GoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.map = React.createRef();
    this.items = this.props.coups;
  }
  render() {
    const WrappedMap = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        ref={map => {this.map = map; }}
        onIdle={props.onMapIdle}
        defaultZoom={12}
        defaultCenter={{lat: 48.015875, lng: 37.801341}}>
        {this.props.coups.map(item => (
          <Marker key={item.ID}
            icon={{ url: "/img/control-icon-png-3.jpg", scaledSize: new window.google.maps.Size(15, 15)}}
            title={(item.title)} 
            position={{lat: (item.pos.lat), lng: (item.pos.lng)}}
            onClick={this.props.setSelectCoup.bind(this, item.ID, item)}
          />
        ))}
        {this.props.setCoup && (
          <InfoWindow
            position={{lat: (this.props.setCoup.pos.lat), lng: (this.props.setCoup.pos.lng)}}
            onCloseClick={() => {this.props.nullState(null)}}
          >
            <div>{this.props.setCoup.title}</div>
          </InfoWindow>
        )}
      </GoogleMap>
    ));
    return(
      <Fragment>
        <div style={{width: '100%', height: '100vh'}}>
          <WrappedMap
            onMapIdle={() => {
              /*let ne = this.map.getBounds().getNorthEast();
              let sw = this.map.getBounds().getSouthWest();*/
              /*console.log(ne.lat() + ";" + ne.lng());
              console.log(sw.lat() + ";" + sw.lng());
              AIzaSyDYvvYa5CoEsPtMYURiutCbXF8UkvvvJsw
              AIzaSyC-clMXi48vlK3YPn-3hWcnsxO4Kz2T-4A
              */
            }}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC-clMXi48vlK3YPn-3hWcnsxO4Kz2T-4A&v=3.exp&language=ru&region=ru&libraries=geometry,drawing,places`}
            loadingElement={<div style= {{height: '100%'}} />}
            containerElement={<div style= {{height: '100%'}} />}
            mapElement={<div style= {{height: '100%'}} />} 
          />
        </div>
      </Fragment>
    );
  }
}