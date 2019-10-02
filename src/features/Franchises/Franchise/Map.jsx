import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const HeroMap = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDIZss7YrLfuwNLGYBKU2LJuEi0Ad4LIBQ',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    onZoomChanged={() => {}}
    defaultZoom={20}
    defaultCenter={{ lat: 27.6820453, lng: 83.3624951 }}
  >
    {props.isMarkerShown && (
      <Marker
        animation
        name="My Marker"
        color="red"
        position={{ lat: 23.35305, lng: 73.20255 }}
      />
    )}
  </GoogleMap>
));

export default HeroMap;
