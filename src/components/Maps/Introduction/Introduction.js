import React from 'react';
import { Link } from 'gatsby';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="intro-card">
        <h1 className="intro-title">Introduction</h1>
        <div className="intro-content">
          <p>Following sources were used for building this website:</p>
        </div>
        <div style={{textAlign:"center"}} className="intro-buttons">
          <a href="https://www.npmjs.com/package/@react-google-maps/api">
            <button type="button" className="btn btn-link">
              react-google-maps/api
            </button>
          </a>
          <a href="https://www.npmjs.com/package/google-map-react">
            <button type="button" className="btn btn-link">
              google-map-react
            </button>
          </a>
          <a href="https://developers.google.com/maps/documentation/javascript/overview">
            <button type="button" className="btn btn-link">
              Maps JavaScript API
            </button>
          </a>
        </div>
        <div className="intro-links">
          <Link to="/kml">KML</Link>
          <Link to="/buttons-and-boxes">Buttons & Infobox</Link>
          <Link to="/clustering">Clustering</Link>
          <Link to="/current-location">Current Location</Link>
          <Link to="/auto-complete">Auto Complete</Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
