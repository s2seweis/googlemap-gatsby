import React, {useState, useEffect, useRef} from 'react';
import Footer from './footer';
import Navbar1 from './navbar-v2';

import Sidebar from './sidebar';

import CookieConsent from 'react-cookie-consent';

// ###

import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
// import {FaTiktok} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';

// ###

import {Sidebar3} from './sidebar3';
// import Sidebar4 from './sidebar4';
import Sidebar5 from './sidebar5';

// ###

const Layout = ({children}) => {
  const scrolled = useRef (null);

  const [isOpen, setIsOpen] = useState (false);

  const toggleSidebar = () => {
    setIsOpen (!isOpen);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">

      {/* ###Side Component - Making an own Component out of it */}
      <div className="social-media-left-side">

        <a
          aria-label="link"
          // style={{color: 'black'}}
          href="https://www.instagram.com/"
          className="link-social-left1"
          style={{}}
        >
          <span><FaInstagram /></span>
        </a>
        <a
          aria-label="link"
          // style={{color: 'black'}}
          href="https://www.facebook.com"
          className="link-social-left2"
        >
          <span><FaFacebookSquare /></span>
        </a>
        <a
          aria-label="link"
          // style={{color: 'black'}}
          href="https://www.youtube.com"
          className="link-social-left3"
        >
          <span><FaYoutube /></span>
        </a>

      </div>

      {/* ### */}

      <div>

        <CookieConsent
          location="bottom"
          buttonText="I Accept It"
          cookieName="myAwesomeCookieName2"
          style={{background: '#0d6efd'}}
          buttonStyle={{color: '#4e503b', fontSize: '13px'}}
          expires={150}
        >
          This website uses cookies to enhance the user experience.
          <span style={{fontSize: '10px'}}>
            <div style={{marginTop: '20px'}}>

              <a
                style={{
                  fontSize: '1.3rem',
                  padding: '5px',
                  marginLeft: '20px',
                }}
                href="javascript:history.back()"
              >
                <button type="button" className="btn btn-link">Go Back</button>
              </a>
            </div>
          </span>

        </CookieConsent>

        {/* <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} /> */}

        <Navbar1 toggleSidebar={toggleSidebar} />

        {/* <Sidebar3 /> */}
        {/* <Sidebar4 /> */}
        {/* <Sidebar5 /> */}

        {/* ### */}

        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
