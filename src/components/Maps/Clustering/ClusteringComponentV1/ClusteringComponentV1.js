/*global google*/
import React, { useState } from 'react';
import Map from './Map';
import { MarkerClusterer } from '@react-google-maps/api';
import { v4 as uuidv4 } from 'uuid';
import CustomMarker from './CustomMarker';
import { Button } from 'react-bootstrap';

var locations2 = [
  { lat: -37.774785, lng: 145.137978 },
  { lat: -37.819616, lng: 144.968119 },
  { lat: -38.330766, lng: 144.695692 },
  { lat: -39.927193, lng: 175.053218 },
  { lat: -41.330162, lng: 174.865694 },
  { lat: -42.734358, lng: 147.439506 },
  { lat: -42.734358, lng: 147.501315 },
  { lat: -42.735258, lng: 147.438 },
  { lat: -43.999792, lng: 170.463352 },
  { lat: 9.124809, lng: 124.67595 },
  { lat: 9.246481, lng: 124.726069 },
  { lat: 9.187243, lng: 124.640022 },
];

export default function
  () {
  const [map, setMap] = useState(null);
  const [locs, setLocs] = useState(locations2);
  const [toggle, setToggle] = useState(false);

  React.useEffect(
    () => {
      if (map) {
        // map.panTo(...)
        mapFitBounds();
      }
    },
    [map]
  );

  function mapFitBounds() {
    if (!map) return;

    const bounds = new google.maps.LatLngBounds();
    locs.map(loc => {
      bounds.extend(new google.maps.LatLng(loc.lat, loc.lng));
    });

    map.fitBounds(bounds);
  }

  return (
    <div className="kml-level1">
      <div style={{ display: 'flex', justifyContent: 'center', margin: '5px' }}>
        <div style={{ width: "350px", textAlign: "justify" }}>
          Marker clustering is a technique used in Google Maps to visually manage large numbers of markers in close proximity to each other. It helps to improve performance and maintain map readability by grouping nearby markers into clusters, which are represented by a single cluster marker.
          <div className='origin-button' style={{ margin: "auto", display: "flex", justifyContent: "center", marginBottom: "15px" }}>
            <Button href="https://developers.google.com/maps/documentation/javascript/marker-clustering" variant="primary">Read More</Button>
          </div>
        </div>
      </div>
      <div className='marker-clustering-level2' style={{ display: "flex", justifyContent: "center", margin: "5px" }} >
        <Map setMap={setMap}
        >
          <MarkerClusterer>
            {clusterer =>
              locs.map(loc => (
                <CustomMarker
                  key={uuidv4()}
                  position={loc}
                  clusterer={clusterer}
                // zoom={7}
                />
              ))}
          </MarkerClusterer>
        </Map>
      </div>
    </div>
  );
}