/* eslint-disable no-undef */
import React from 'react';
import { compose, withProps, withHandlers, withState } from 'recompose';
import API_KEY from '../secret'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

let searchQuery ;
const MAP_URL =
  `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`;

const Map = compose(
  withProps({
    googleMapURL: MAP_URL,
    loadingElement: <div style={{ height: `40%` }} />,
    containerElement: <div style={{ height: `24rem` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  withState('places', 'updatePlaces', ''),
  withHandlers(() => {
    const refs = {
      map: undefined
    };
    return {
      onMapMounted: () => (ref) => {
        refs.map = ref;
      },
      fetchPlaces: ({ updatePlaces }) => {
        const bounds = refs.map.getBounds();
        const service = new google.maps.places.PlacesService(
          refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        );
        const request = {
          bounds: bounds,
          location: 'New York City',
          query: searchQuery
        };
        service.textSearch(request, (results, status) => {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            updatePlaces(results);
          }
        });
      }
    };
  })
)((props) => {
  return (
    <GoogleMap
      onTilesLoaded={props.fetchPlaces}
      ref={props.onMapMounted}
      onBoundsChanged={props.fetchPlaces}
      mapTypeId= 'satellite'
      defaultZoom={11}
      defaultCenter={{ lat: 40.7236474, lng: -73.9985707 }}
    >
      {props.places &&
        props.places.map((place, i) => (
          <Marker
            // onClick={() => props.onPlaceClick(place)}
            key={i}
            position={{
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            }}
          />
        ))}
    </GoogleMap>
  );
});

class QueriedMap extends React.PureComponent {
  constructor(props){
    super(props)

    searchQuery = this.props.query
  }
  render(){
    return <div className="map-container"><Map /></div>
  }

}

export default QueriedMap