import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { usePosition } from "use-position";
import { Button } from 'react-bootstrap';

const defaultMapConfig = {
  gestureHandling: "greedy",
  options: {
    fullscreenControl: false
  },
  mapContainerStyle: {
    height: "350px",
    width: "350px"
  }
};

export default function CurrentLocationComponentV1() {
  const [currentPosition, setCurrentPosition] = useState({ lat: 9.177347, lng: 124.71956 });
  const [currentZoom, setCurrentZoom] = useState(9);
  const { latitude, longitude, error } = usePosition();

  useEffect(() => {
    if (latitude && longitude && !error) {
      setCurrentPosition({ lat: latitude, lng: longitude });
      setCurrentZoom(17);
    }
  }, [latitude, longitude, error]);

  return (
    <>
      <div className="kml-level1">

        <div style={{ display: 'flex', justifyContent: 'center', margin: '5px' }}>
          <div style={{ width: "350px", textAlign: "justify" }}>
            Current location refers to the real-time geographic position of a user at a given moment. Google Maps provides functionality to determine and display the user's current location on the map, allowing for various location-based services and features.
            <div className='origin-button' style={{ margin: "auto", display: "flex", justifyContent: "center", marginBottom: "15px" }}>
              {/* ### - Test: Bootstrap Button */}
              <Button href="https://developers.google.com/maps/documentation/javascript/geolocation" variant="primary">Read More</Button>
            </div>
          </div>
        </div>
        <div className="<current-location-level1" style={{ justifyContent: "center", display: "flex", margin: "5px" }}>
          <GoogleMap
            {...defaultMapConfig}
            defaultCenter={{ lat: 0, lng: 0 }}
            center={currentPosition}
            zoom={currentZoom}
          />
        </div>
      </div>
    </>
  );
}