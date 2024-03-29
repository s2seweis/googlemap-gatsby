import React, {useState, useEffect, useRef} from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import CookieConsent from 'react-cookie-consent';
import {FaFacebookSquare, FaInstagram, FaYoutube} from 'react-icons/fa';
import Sidebar from './Sidebar/sidebar';

const Layout = ({children}) => {

  const scrolled = useRef (null);
  const [isOpen, setIsOpen] = useState (false);

  const toggleSidebar = () => {
    setIsOpen (!isOpen);
    setStyle ('overlay2');
  };

  const toggleHideSidebar = () => {
    setIsOpen (!isOpen);
    setStyle ('overlay');
  };

  const [show, setShow] = useState (false);
  const handleClose = () => setShow (false);
  const handleShow = () => setShow (true);
  
  const [sidebar, setSidebar] = useState (false);
  const [style, setStyle] = useState ('overlay');

 
  const showSidebar = () => {
    setSidebar (!sidebar);
    setStyle ('overlay2');
  };

  const hideSidebar = () => {
    setSidebar (!sidebar);
    setStyle ('overlay');
  };

  const [yOffset, setYOffset] = useState ();
  const [visible, setVisible] = useState (true);

  useEffect (() => {
    function handleScroll () {
      // if (isBrowser) {
        const currentYOffset = scrollY;
        const visible = yOffset > currentYOffset;
        setYOffset (currentYOffset);
        setVisible (visible);
      // }
    }

    addEventListener ('scroll', handleScroll);
    return () => removeEventListener ('scroll', handleScroll);
  });

  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <div className={style} onClick={toggleHideSidebar} />
      <div className="social-media-left-side">
        <a
          aria-label="link"
          href="https://www.instagram.com/"
          className="link-social-left1"
          style={{}}
        >
          <span><FaInstagram /></span>
        </a>
        <a
          aria-label="link"
          href="https://www.facebook.com"
          className="link-social-left2"
        >
          <span><FaFacebookSquare /></span>
        </a>
        <a
          aria-label="link"
          href="https://www.youtube.com"
          className="link-social-left3"
        >
          <span><FaYoutube /></span>
        </a>
      </div>
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

        <Sidebar
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          toggleHideSidebar={toggleHideSidebar}
        />
        <Navbar
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          handleShow={handleShow}
          sidebar={sidebar}
          setSidebar={setSidebar}
          toggleHideSidebar={toggleHideSidebar}
          visible={visible}
        />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;