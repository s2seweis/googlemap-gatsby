import React, { useState } from 'react';
import { GoogleMap, LoadScript, InfoBox, MarkerClusterer, Marker, InfoWindow } from '@react-google-maps/api';
import { Button } from 'react-bootstrap';
import { Link } from 'gatsby';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 9.177347,
  lng: 124.71956
};

const map1 = process.env.REACT_APP_GOOGLE_API_KEY

function MarkersButtonsComponent() {
  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();

  const markers = [
    { address: "Camiguin Island", lat: 9.177347, lng: 124.71956, href: "/404" },
    { address: "White Island", lat: 9.257664, lng: 124.656021, href: "/about" },
    { address: "Guinsiliban", lat: 9.102603, lng: 124.769534, href: "/beverage" },
    { address: "Tusan Falls", lat: 9.181753, lng: 124.66976, href: "/breakfast" },
    { address: "Cartarman", lat: 9.124809, lng: 124.67595, href: "/contact" },
    { address: "Mambajao", lat: 9.246481, lng: 124.726069, href: "/copyright" },
    { address: "Old Church", lat: 9.187243, lng: 124.640022, href: "/dessert" },
  ];

  const handleMarkerClick = (id, lat, lng, address, href) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, address, lat, href });
    setIsOpen(true);
  };

  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
          fontSize: '2rem',
          background: 'lightskyblue',
        }}
      >
        {' '} Markers and Buttons {' '}
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '5px' }}>
        <div style={{ width: "400px", textAlign: "justify" }}>
          Buttons and Google Maps are two distinct elements, but they can be interconnected to enhance user interactions and provide convenient functionality within the Google Maps environment.
        </div>
      </div>
      <div className='origin-button' style={{ margin: "auto", display: "flex", justifyContent: "center", marginBottom: "15px" }}>
        <Button href="https://developers.google.com/maps/documentation/javascript/markers" variant="primary">Read More</Button>
      </div>
      <div className='map' style={{ display: "flex", justifyContent: "center", margin: "5px" }} >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}
          onClick={() => setIsOpen(false)}
        >
          {markers.map(({ address, lat, lng, href }, ind) => (
            <Marker
              key={ind}
              position={{ lat, lng }}
              onClick={() => {
                handleMarkerClick(ind, lat, lng, address);
              }}
            >
              {isOpen && infoWindowData?.id === ind && (
                <InfoWindow
                  onCloseClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <a href={href}>
                    <h4>
                      <p>
                        {infoWindowData.address}
                      </p>
                      <p>
                        {infoWindowData.id}
                      </p>
                    </h4>
                  </a>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
        <div className='markers-panel' style={{ display: "grid", marginLeft: "10px" }}  >
          {markers.map(({ address, lat, lng }, ind) => (
            <Button
              style={{ display: "block", marginBottom: "10px", fontSize: "10px" }}
              key={ind}
              position={{ lat, lng }}
              onClick={() => {
                handleMarkerClick(ind, lat, lng, address);
              }}
            >
              {address}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default React.memo(MarkersButtonsComponent)













