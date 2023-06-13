// /*global google*/

import React from 'react';
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';

import {GoogleMapProvider} from '@ubilabs/google-maps-react-hooks';

const containerStyle = {
  width: '400px',
  height: '400px',
};

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

const mapOptions = {
  zoom: 7,
  center: {
    lat: 9.102097,
    lng: 123.400931,
  },
};

// var src = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';

// v8
var src = 'http://drive.google.com/uc?id=1eL2O46h6Gajszl1fH7VPKFSsMceAPcYh';

// https://drive.google.com/drive/my-drive here its stored - kml file build with google earth

// console.log (src);

// var src1 = {kml};
// console.log(src1);

function Map5 () {
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: "AIzaSyCor2w9g3kMJrIJn3Ydbk4EtcfMNK6xNBA"
  // })

  // const google = window.google

  const [map, setMap] = React.useState (null);
  // console.log ('line:1000', map);

  // This is just an example of getting and using the map instance!!! don't just blindly copy!
  const bounds = map;
  // console.log ('line2000', bounds);

  //  const kmlLayer = new google.maps.KmlLayer(src, {

  const onLoad = React.useCallback (function callback (map) {
    // ###
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

    // ###
    setMap (map);
  }, []);

  // ###
  const onUnmount = React.useCallback (function callback (map) {
    setMap ();
  }, []);
  // ###

  return (
    <div className="kml-level1">

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
        {' '} Introduction {' '}
      </h1>

      <div style={{display: 'flex', justifyContent: 'center', margin: '5px'}}>
        <div className="linebreak" style={{width: '400px'}}>
         
         <p>Following sources were used for building this website:</p>
         <p>https://developers.google.com/maps/documentation/javascript/overview</p>
         <p>https://www.npmjs.com/package/@react-google-maps/api</p>
         <p>https://www.npmjs.com/package/google-map-react</p>
        
        
        </div>
      </div>

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
        {' '} Display KML {' '}
      </h1>

      <div style={{display: 'flex', justifyContent: 'center', margin: '5px'}}>
        <div style={{width: '400px'}}>
          KML, which stands for Keyhole Markup Language, is a file format used for displaying geographic data in mapping applications, with Google Maps being one of the popular platforms that supports it.

          KML files contain a combination of structured data and markup tags that define various geographical features such as points, lines, polygons, and overlays. These features can include coordinates, descriptions, styles, icons, and other relevant information.

          With Google Maps, you can import KML files to visualize and interact with geographic data.
          {' '}
        </div>
      </div>

      <div
        className="kml"
        style={{display: 'flex', justifyContent: 'center', margin: '5px'}}
      >

        <GoogleMap
          mapContainerStyle={containerStyle}
          // center={center}
          // zoom={5}
          // iniZoom={5}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={mapOptions}
        >
          {/* Child components, such as markers, info windows, etc. */}

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

// export default React.memo(Map5)
export default Map5;
