// /*global google*/

import React from 'react';
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';

import {GoogleMapProvider} from '@ubilabs/google-maps-react-hooks';

import {Button} from 'react-bootstrap';


const containerStyle = {
  width: '400px',
  height: '400px',
};

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

const mapOptions = {
  zoom: 6,
  center: {
    lat: -33.8688,
    lng: 151.2195,
  },
};



function initAutocomplete () {
  const [map, setMap] = React.useState (null);
  // console.log ('line:1000', map);

  const bounds = map;

  const onLoad = React.useCallback (function callback (map) {
    // ###

    
    // Create the search box and link it to the UI element.
    const input = document.getElementById ('pac-input');
    const searchBox = new google.maps.places.SearchBox (input);

    map.controls[google.maps.ControlPosition.TOP_CENTER].push (input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener ('bounds_changed', () => {
      searchBox.setBounds (map.getBounds ());
    });

    let markers = [];

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener ('places_changed', () => {
      const places = searchBox.getPlaces ();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach (marker => {
        marker.setMap (null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds ();

      places.forEach (place => {
        if (!place.geometry || !place.geometry.location) {
          console.log ('Returned place contains no geometry');
          return;
        }

        const icon = {
          url: place.icon,
          size: new google.maps.Size (71, 71),
          origin: new google.maps.Point (0, 0),
          anchor: new google.maps.Point (17, 34),
          scaledSize: new google.maps.Size (25, 25),
        };

        // Create a marker for each place.
        markers.push (
          new google.maps.Marker ({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union (place.geometry.viewport);
        } else {
          bounds.extend (place.geometry.location);
        }
      });
      map.fitBounds (bounds);
    });


    window.initAutocomplete = initAutocomplete;


    // ###
    setMap (map);
  }, []);

  // ###
  const onUnmount = React.useCallback (function callback (map) {
    setMap ();
  }, []);
  // ###

  return (
    <div className="kml-level1" style={{marginBottom:"15px"}}>

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
        {' '} Places Search Box {' '}
      </h1>

      <div style={{display: 'flex', justifyContent: 'center', margin: '5px'}}>
        <div style={{width:"400px", textAlign:"justify"}}>
        The Places Search Box in Google Maps simplifies the process of finding specific places or businesses. It combines search functionality with map integration, autocomplete suggestions, and location context to provide users with relevant and convenient search results. 
        </div>
      </div>

      <div className='origin-button' style={{margin:"auto", display:"flex", justifyContent:"center", marginBottom:"15px"}}>
        {/* ### - Test: Bootstrap Button */}
      <Button href="https://developers.google.com/maps/documentation/javascript/examples/places-searchbox" variant="primary">Read More</Button>
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

      <input
      id="pac-input"
      class="controls"
      type="text"
      placeholder="Search Box"
    />

      {/* <div id="map" /> */}

    

    </div>
  );
}


// export default React.memo(initAutocomplete)
export default initAutocomplete;
