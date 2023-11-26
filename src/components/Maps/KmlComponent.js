// /*global google*/
import React from 'react';
import {GoogleMap} from '@react-google-maps/api';
import Button from 'react-bootstrap/Button';

const containerStyle = {
  width: '350px',
  height: '350px',
};

const mapOptions = {
  zoom: 7,
  center: {
    lat: 9.102097,
    lng: 123.400931,
  },
};

var src = 'http://drive.google.com/uc?id=1eL2O46h6Gajszl1fH7VPKFSsMceAPcYh';

function KmlComponent () {

  const [map, setMap] = React.useState (null);
  const bounds = map;

  const onLoad = React.useCallback (function callback (map) {
    const kmlLayer = new google.maps.KmlLayer (src, {
      suppressInfoWindows: true,
      preserveViewport: false,
      map: map,
    });

    kmlLayer.addListener ('click', function (event) {
      var content = event.featureData.infoWindowHtml;
      var testimonial = document.getElementById ('capture');
      testimonial.innerHTML = content;
    });

    setMap (map);
  }, []);

  const onUnmount = React.useCallback (function callback (map) {
    setMap ();
  }, []);

  return (
    <div className="kml-level1">  
      <div style={{display: 'flex', justifyContent: 'center', margin: '5px'}}>
        <div style={{width: '350px', textAlign:"justify"}}>
          KML, which stands for Keyhole Markup Language, is a file format used for displaying geographic data in mapping applications, with Google Maps being one of the popular platforms that supports it.
          KML files contain a combination of structured data and markup tags that define various geographical features such as points, lines, polygons, and overlays. 
          {' '}
      <div className='origin-button' >
      <Button href="https://developers.google.com/maps/documentation/javascript/kml" variant="primary">Read More</Button>
      </div>
        </div>
      </div>
      <div
        className="kml"
        style={{display: 'flex', justifyContent: 'center', margin: '5px'}}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={mapOptions}
        >
        </GoogleMap>
      </div>
      <div
        className="capture-level1"
        style={{display: 'flex', justifyContent: 'center'}}
      >
        <div id="capture" />
      </div>

    </div>
  );
}

export default KmlComponent;
