import React, {useState} from 'react';
import { GoogleMap, LoadScript, InfoBox,  MarkerClusterer, Marker, InfoWindow } from '@react-google-maps/api';
import { Button } from 'react-bootstrap';

import {Link} from 'gatsby';




const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  // lat: -3.745,
  // lng: -38.523
  lat: 9.177347,
  lng: 124.71956
};

// ###
const map1 = process.env.REACT_APP_GOOGLE_API_KEY
// console.log("line:100", map1);
// ###


// ### - InfoBox-Start

// const options = { closeBoxURL: '', enableEventPropagation: true };

// const onLoad = infoBox => {
//   console.log('infoBox: ', infoBox)
// };

// ###-InfoBox-End

// ###-MarkerClusterer-Start





// ###-MarkerClusterer-End

function Map1() {



  const [mapRef, setMapRef] = useState();

  // console.log("line:101", setMapRef);
  // console.log("line:102", setMapRef);
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();
  // console.log("line:103", infoWindowData);

const markers = [
  { address: "Camiguin Island", lat: 9.177347, lng: 124.71956, href:"/404" },
  { address: "White Island", lat: 9.257664, lng: 124.656021, href:"/about"                },
  { address: "Guinsiliban", lat: 9.102603, lng: 124.769534, href:"/beverage" },
  { address: "Tusan Falls", lat: 9.181753, lng: 124.66976, href:"/breakfast" },
  { address: "Cartarman", lat: 9.124809, lng: 124.67595, href:"/contact" },
  { address: "Mambajao", lat: 9.246481, lng: 124.726069, href:"/copyright"    },
  { address: "Old Church", lat: 9.187243, lng: 124.640022, href:"/dessert"  },
];       
// console.log("line:104", markers);

// console.log("line:104.1", markers.map(({address, lat, lng}) => ({[address]: lat}) ))

// console.log("line:104.2", markers.map(({address, lat, lng}) => ({address}) ))
// console.log("line:104.4", markers.map(({address, lat, lng, href}) => ({href}) ))

// console.log("line:104.3", markers.address)




// console.log("line:104.1", markers.address);


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
          // fontFamily: 'Lobster Two',
          fontSize: '2rem',
          background: 'lightskyblue',
        }}
      >
        {' '} Markers and Buttons {' '}
      </h1>

      <div style={{display: 'flex', justifyContent: 'center', margin: '5px'}}>
        <div style={{width:"400px"}}>
        Buttons and Google Maps are two distinct elements, but they can be interconnected to enhance user interactions and provide convenient functionality within the Google Maps environment. 
        </div>
      </div>

    <div className='map' style={{display:"flex", justifyContent:"center", margin:"5px"}} >







    {/* <LoadScript
      // googleMapsApiKey={map1}
      // googleMapsApiKey="AIzaSyCor2w9g3kMJrIJn3Ydbk4EtcfMNK6xNBA"
    > */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        // onLoad={onMapLoad}
          onClick={() => setIsOpen(false)}
      >

        
          {/* ### */}

        {/* <Marker position={{ lat: 9.177347, lng: 124.71956 }} /> */}

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
                    {/* <a href='/about'> */}

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

          {/* ### */}


      </GoogleMap>

      {/* <Button>Test:1</Button> */}

        <div className='markers-panel' style={{display:"grid", marginLeft:"10px"}}  >

            {markers.map(({ address, lat, lng }, ind) => (
            <Button
            style={{display:"block", marginBottom:"10px", fontSize:"10px"}}
            key={ind}

            position={{ lat, lng }}
            onClick={() => {
              handleMarkerClick(ind, lat, lng, address);
            }}
            >
              
              {/* Test:100 */}
              {address}


              </Button>
              ))}

        </div>

    {/* </LoadScript> */}
    </div>
    
    </div>
    
  )
}

export default React.memo(Map1)













