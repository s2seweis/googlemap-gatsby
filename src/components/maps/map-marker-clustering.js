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



const locations = [
    {lat: -31.56391, lng: 147.154312},
    {lat: -33.718234, lng: 150.363181},
    {lat: -33.727111, lng: 150.371124},
    {lat: -33.848588, lng: 151.209834},
    {lat: -33.851702, lng: 151.216968},
    {lat: -34.671264, lng: 150.863657},
    {lat: -35.304724, lng: 148.662905},
    {lat: -36.817685, lng: 175.699196},
    {lat: -36.828611, lng: 175.790222},
    {lat: -37.75, lng: 145.116667},
    {lat: -37.759859, lng: 145.128708},
    {lat: -37.765015, lng: 145.133858},
    {lat: -37.770104, lng: 145.143299},
    {lat: -37.7737, lng: 145.145187},
    {lat: -37.774785, lng: 145.137978},
    {lat: -37.819616, lng: 144.968119},
    {lat: -38.330766, lng: 144.695692},
    {lat: -39.927193, lng: 175.053218},
    {lat: -41.330162, lng: 174.865694},
    {lat: -42.734358, lng: 147.439506},
    {lat: -42.734358, lng: 147.501315},
    {lat: -42.735258, lng: 147.438},
    {lat: -43.999792, lng: 170.463352},
  ];








function Map6() {
 

  const [map, setMap] = React.useState(null)
  console.log("line:1000", map);

   // This is just an example of getting and using the map instance!!! don't just blindly copy!
   const bounds = map;
   console.log("line2000", bounds);

  

  const onLoad = React.useCallback(function callback(map) {

    // ###
  
    const infoWindow = new google.maps.InfoWindow({
        content: "",
        disableAutoPan: true,
      });



      // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const marker = new google.maps.Marker({
      position,
      label,
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(label);
      infoWindow.open(map, marker);
    });
    return marker;
  });


//   new MarkerClusterer({ markers, map });

  const markerCluster = new MarkerClusterer({ map, markers });
   

  


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
        {' '} Marker Clustering V3 {' '}
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

// export default React.memo(Map6)
export default Map6