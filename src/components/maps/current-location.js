import React, { useState, useEffect } from "react";
// import "./styles.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { usePosition } from "use-position";

const defaultMapConfig = {
  gestureHandling: "greedy",
  options: {
    fullscreenControl: false
  },
  mapContainerStyle: {
    height: "400px",
    width: "400px"
  }
};

export default function Map4() {
  const [currentPosition, setCurrentPosition] = useState({ lat: 9.177347, lng: 124.71956 });
          //   defaultCenter={{ lat: 9.177347, lng: 124.71956 }}

  console.log("line:1", currentPosition);
  console.log("line:2", setCurrentPosition);
  const [currentZoom, setCurrentZoom] = useState(9);
  const { latitude, longitude, error } = usePosition();
  console.log("line:3", latitude);
  console.log("line:4", longitude);



  useEffect(() => {
    console.log("use eff");
    if (latitude && longitude && !error) {
      // Fetch weather data here.
      setCurrentPosition({ lat: latitude, lng: longitude });
      setCurrentZoom(17);
    }
  }, [latitude, longitude, error]);

  return (
    <>
      {/* <LoadScript
        googleMapsApiKey={"AIzaSyCor2w9g3kMJrIJn3Ydbk4EtcfMNK6xNBA"}
        loadingElement={<div />}
        containerElement={<div />}
        mapElement={<div />}
      > */}
        <div className="current-location">

        <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
          // fontFamily: 'Lobster Two',
          fontSize: '2rem',
          background: 'antiquewhite',
        }}
      >
        {' '}Current Location{' '}
      </h1>


      <div className="<current-location-level1" style={{justifyContent:"center", display:"flex", margin:"5px"}}>



      

        <GoogleMap
          {...defaultMapConfig}
          defaultCenter={{ lat: 0, lng: 0 }}
          center={currentPosition}
          zoom={currentZoom}
          />
          </div>
          </div>
      {/* </LoadScript> */}
    </>
  );
}
