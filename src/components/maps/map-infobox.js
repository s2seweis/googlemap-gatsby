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

      <div style={{display: 'flex', justifyContent: 'center', margin: '5px'}}>
        <div style={{width:"400px", textAlign:"justify"}}>
        Infoboxes are information windows or pop-up boxes that appear when interacting with markers or other map features in the Google Maps environment. They provide a way to display additional information and details related to a specific location or point of interest on the map. 
        </div>
      </div>


      <div className='origin-button' style={{margin:"auto", display:"flex", justifyContent:"center", marginBottom:"15px"}}>
        {/* ### - Test: Bootstrap Button */}
      <Button href="https://developers.google.com/maps/documentation/javascript/infowindows" variant="primary">Read More</Button>
      </div>

      

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
