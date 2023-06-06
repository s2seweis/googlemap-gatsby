import React, {useState} from 'react';
import {
  GoogleMap,
  LoadScript,
  InfoBox,
  MarkerClusterer,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import {Button} from 'react-bootstrap';

import {Link} from 'gatsby';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  // lat: -3.745,
  // lng: -38.523
  lat: 9.177347,
  lng: 124.71956,
};

const options = {closeBoxURL: '', enableEventPropagation: true};

const onLoad = infoBox => {
  // console.log ('infoBox: ', infoBox);
};

function Map2 () {
  return (
    <div>

      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
          // fontFamily: 'Lobster Two',
          fontSize: '2rem',
          background: 'lightskyblue',
        }}
      >
        {' '} Infobox {' '}
      </h1>

      <div
        className="map"
        style={{display: 'flex', justifyContent: 'center', margin: '5px'}}
      >

        {/* <LoadScript // googleMapsApiKey={map1}
        googleMapsApiKey="AIzaSyCor2w9g3kMJrIJn3Ydbk4EtcfMNK6xNBA"> */}

          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11}
          >

            <InfoBox onLoad={onLoad} options={options} position={center}>
              <div
                style={{backgroundColor: 'yellow', opacity: 0.75, padding: 12}}
              >
                <div style={{fontSize: 16, fontColor: `#08233B`}}>
                  Hello, World!
                </div>
              </div>
            </InfoBox>

          </GoogleMap>

        {/* </LoadScript> */}
      </div>

    </div>
  );
}

export default React.memo (Map2);
