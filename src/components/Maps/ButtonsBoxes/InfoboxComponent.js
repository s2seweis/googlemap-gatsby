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
  width: '350px',
  height: '350px',
};

const center = {
  lat: 9.177347,
  lng: 124.71956,
};

const options = {closeBoxURL: '', enableEventPropagation: true};

const onLoad = infoBox => {
};

function InfoboxComponent () {
  return (
    <div className='kml-level1' >
      <div style={{display: 'flex', justifyContent: 'center', margin: '5px'}}>
        <div style={{width:"350px", textAlign:"justify"}}>
        Infoboxes are information windows or pop-up boxes that appear when interacting with markers or other map features in the Google Maps environment. They provide a way to display additional information and details related to a specific location or point of interest on the map. 
      <div className='origin-button' style={{margin:"auto", display:"flex", justifyContent:"center", marginBottom:"15px"}}>
        {/* ### - Test: Bootstrap Button */}
      <Button href="https://developers.google.com/maps/documentation/javascript/infowindows" variant="primary">Read More</Button>
      </div>
        </div>
      </div>
      <div
        className="map"
        style={{display: 'flex', justifyContent: 'center', margin: '5px'}}
      >
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
      </div>
    </div>
  );
}

export default React.memo (InfoboxComponent);
