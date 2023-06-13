import React from 'react';
import PropTypes from 'prop-types';

import LoaderSVG from './assets/images/loader.svg';

export default function HTML (props) {
  return (
    <html {...props.htmlAttributes}>
      <head>

        {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCor2w9g3kMJrIJn3Ydbk4EtcfMNK6xNBA&libraries=places" /> */}

      

        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCor2w9g3kMJrIJn3Ydbk4EtcfMNK6xNBA&callback=initMap" /> */}

        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5912939817167412"
          crossOrigin='anonymous'
        /> */}

        <script src="https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js" />

        {props.headComponents}

      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}

        {/* <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCor2w9g3kMJrIJn3Ydbk4EtcfMNK6xNBA&callback=initMap" /> */}

        {/* normally its working - just for checking - commented it out */}
        {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCor2w9g3kMJrIJn3Ydbk4EtcfMNK6xNBA" /> */}

        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCor2w9g3kMJrIJn3Ydbk4EtcfMNK6xNBA&libraries=places&v=weekly"
          defer
        />

        <div
          key={`loader`}
          id="___loader"
          style={{
            alignItems: 'center',
            backgroundColor: '#F2F2F2',
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        >
          <img src={LoaderSVG} alt="Loading spinner" width="50" height="50" />
        </div>

        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{__html: props.body}}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
