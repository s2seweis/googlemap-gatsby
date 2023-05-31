import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const map1 = process.env.REACT_APP_GOOGLE_API_KEY
console.log("line:3000", map1);

function Map() {
  return (
    <div className='map' style={{display:"flex", justifyContent:"center"}} >
    <LoadScript
    //   googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
    //   googleMapsApiKey={map1}
    //   googleMapsApiKey=""
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    </div>
  )
}

export default React.memo(Map)