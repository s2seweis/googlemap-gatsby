// /*global google*/

import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import {GoogleMapProvider} from '@ubilabs/google-maps-react-hooks';

import { MarkerClusterer } from "@googlemaps/markerclusterer";



const containerStyle = {
  width: '400px',
  height: '400px'
};



const mapOptions = {
  zoom: 3,
  center: {
    lat: -28.024,
    lng: 140.887,
  },
};






let infoWindow;




function Map7() {
 

  const [map, setMap] = React.useState(null)
  console.log("line:1000", map);

   // This is just an example of getting and using the map instance!!! don't just blindly copy!
   const bounds = map;
   console.log("line2000", bounds);

  

  const onLoad = React.useCallback(function callback(map) {

    // ###
  
   
    infoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");

    locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });


  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }

  


  // ###
    setMap(map)
  }, [])

  // ###
  const onUnmount = React.useCallback(function callback(map) {
    setMap()
  }, [])
  // ###

  return  (

    <div className='kml-level1'>


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
        {' '} Current Location V2 {' '}
      </h1>



    <div className='kml' style={{display:"flex", justifyContent:"center", margin:"5px"}}>


      

      <GoogleMap
        mapContainerStyle={containerStyle}
        // center={center}
        // zoom={5}
        // iniZoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={mapOptions}
        >
        { /* Child components, such as markers, info windows, etc. */ }
        {/* <markerCluster></markerCluster>< */}
      </GoogleMap>
        </div>
        <div className='capture-level1' style={{display:"flex", justifyContent:"center"}}>

        <div id="capture"></div>
        </div>

        </div>

  ) 
}

// export default React.memo(Map7)
export default Map7