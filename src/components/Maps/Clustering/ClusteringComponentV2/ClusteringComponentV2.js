/*global google*/
import React, {useState, useCallback} from 'react';
import {GoogleMapProvider} from '@ubilabs/google-maps-react-hooks';
import {MarkerClusterer} from '@googlemaps/markerclusterer';
import trees from './data/trees';

const mapOptions = {
  zoom: 7,
  center: {
    lat: 43.68,
    lng: -79.43,
  },
};

export default function ClusteringComponentV2 () {
  const [mapContainer, setMapContainer] = useState (null);
  const onLoad = useCallback (map => addMarkers (map), []);

  return (
    <GoogleMapProvider
      options={mapOptions}
      mapContainer={mapContainer}
      onLoad={onLoad}
      style={{}}
    >

      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
          fontSize: '2rem',
          background: 'lightskyblue',
        }}
      >
        {' '}Marker Clustering v2{' '}
      </h1>

      <div className='marker-clustering-v2' style={{display:"flex", justifyContent:"center", margin: '5px'}} >
        <div
          ref={node => setMapContainer (node)}
          style={{height: '350px', width: '350px' }}
        />
      </div>
    </GoogleMapProvider>
  );
}

function addMarkers (map) {
  //   const google = window.google;
  const infoWindow = new google.maps.InfoWindow ();

  const markers = trees.map (([name, lat, lng]) => {
    const marker = new google.maps.Marker ({position: {lat, lng}});

    marker.addListener ('click', () => {
      infoWindow.setPosition ({lat, lng});
      infoWindow.setContent (`
        <div class="info-window">
          <h2>${name}</h2>
        </div>
      `);
      infoWindow.open ({map});
    });

    return marker;
  });

  new MarkerClusterer ({map, markers});
}