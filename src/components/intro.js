// /*global google*/

import React from 'react';

import Button from 'react-bootstrap/Button';

function Intro () {
  return (
    <div className="intro">

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

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '5px',
        }}
      >
        <div className="linebreak" style={{width: '400px'}}>

          <p style={{textAlign:"center"}}>Following sources were used for building this website:</p>
          
            
         

        </div>

      </div>

      <div className="button-into" 
      style={{
        // width: '400px', 
        margin: 'auto', 
        display:"grid", 
        textAlign:"center"
        }}>

        <a
          style={{
            fontSize: '1.3rem',
            padding: '5px',
            margin:"5px"
           
          }}
          href="https://www.npmjs.com/package/@react-google-maps/api"
        >
          <button type="button" className="btn btn-link">react-google-maps/api</button>
        </a>
        <a
          style={{
            fontSize: '1.3rem',
            padding: '5px',
            margin:"5px"
           
          }}
          href="https://www.npmjs.com/package/google-map-react"
        >
          <button type="button" className="btn btn-link">google-map-react</button>
        </a>
        <a
          style={{
            fontSize: '1.3rem',
            padding: '5px',
            margin:"5px"
           
          }}
          href="https://developers.google.com/maps/documentation/javascript/overview"
        >
          <button type="button" className="btn btn-link">Maps JavaScript API</button>
        </a>

      </div>

      {/* ### - Test: Bootstrap Button */}
      {/* <Button href="javascript:history.back()" variant="primary">Primary</Button> */}


      <div
        className="kml"
        style={{display: 'flex', justifyContent: 'center', margin: '5px'}}
      />
      <div
        className="capture-level1"
        style={{display: 'flex', justifyContent: 'center'}}
      >

        <div id="capture" />
      </div>

    </div>
  );
}

// export default React.memo(Intro)
export default Intro;
