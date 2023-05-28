import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

// import group from '../assets/images/group.png';

import {use} from '../styles/main-use.css';

// import image1 from '../assets/images/image1.jpg';

// import {main} from '../styles/main.css';

import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTiktok} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';

// import AdBlock from './adblock';

// import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const E2 = () => {
  return (
    <header className="e2" style={{}}>

      {/* <AdBlock/> */}

      <section className="e2-level1">

        <div className="e2-grid">

          {/* <h1>E2</h1> */}

          <div
            className="e2-box1"
            style={{
              backgroundImage: 'url(https://food-blog-v001-image-bucket.s3.eu-central-1.amazonaws.com/small_mitzi_falmarin_831067a945.webp',
            }}
          >
            {' '}
            <div
              style={{
                marginTop: '110%',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '2rem',
              }}
              className="<e2-box-social-links>"
            />
            {' '}
          </div>
          <div className="e2-box2" style={{padding: '15px'}}>

            <p
              className="e2-text-p2"
              style={{
                textAlign: 'center',
                // fontSize: '2rem',
                fontFamily: 'Lobster Two',
                marginTop: '20px',
              }}
            >
              Welcome to my food blog
            </p>

            <div
              className="e2-text"
              style={{
                margin: 'auto',
                height: '60%',
                alignItems: 'center',
                display: 'grid',
                // fontSize: '1.2rem',
                padding: '20px',
                fontFamily: 'Lobster Two',
              }}
            >

              <p className="e2-text-p1" style={{}}>
                where I share my passion for cooking and all things food-related! My name is Mitzi Falmarin, and I'm thrilled to have you here.
                {' '}
              </p>

              <p style={{fontSize: '1.4rem', textAlign: 'center'}}>
                {' '}Check ou my other Channels{' '}
              </p>

              <div
                style={{
                  display: 'flex',
                  fontSize: '2rem',
                  justifyContent: 'space-around',
                }}
                className="flex-social-links"
              >

                <a
                  aria-label="link"
                  className="link-social-desktop"
                  // style={{color: 'white'}}
                  href="https://www.facebook.com/people/The-Solace-Life/100090725413897/?mibextid=LQQJ4d"
                >
                  <span><FaFacebookSquare /></span>
                </a>
                <a
                  aria-label="link"
                  // style={{color: 'white'}}
                  className="link-social-desktop"
                  href="https://www.instagram.com"
                >
                  <span><FaInstagram /></span>
                </a>
                <a
                  aria-label="link"
                  // style={{color: 'white'}}
                  className="link-social-desktop"
                  href="https://www.tiktok.com"
                >
                  <span><FaTiktok /></span>
                </a>
                <a
                  aria-label="link"
                  // style={{color: 'white'}}
                  className="link-social-desktop"
                  href="https://www.youtube.com/@Thesolacelife"
                >
                  <span><FaYoutube /></span>
                </a>

              </div>
              {/* <p></p> */}

            </div>

          </div>

        </div>

        <div className="e2-flex">

          {/* <h1>E2</h1> */}

          <div
            className="e2-box1-flex"
            style={{
              backgroundImage: 'url(https://food-blog-v001-image-bucket.s3.eu-central-1.amazonaws.com/small_mitzi_falmarin_831067a945.webp)',
            }}
          >

            <div
              style={{
                marginTop: '100%',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                justifyContent: 'space-between',
                fontSize: '2rem',
              }}
              className="e2-box1-flex-social-links"
            >
              <a
                aria-label="link"
                // style={{color: 'black'}}
                href="https://www.facebook.com/people/The-Solace-Life/100090725413897/?mibextid=LQQJ4d"
                className="link-social-mobile"
              >
                <span><FaFacebookSquare /></span>
              </a>
              <a
                aria-label="link"
                // style={{color: 'black'}}
                href="https://www.instagram.com"
                className="link-social-mobile"
              >
                <span><FaInstagram /></span>
              </a>
              <a
                aria-label="link"
                // style={{color: 'black'}}
                href="https://www.tiktok.com"
                className="link-social-mobile"
              >
                <span><FaTiktok /></span>
              </a>
              <a
                aria-label="link"
                // style={{color: 'black'}}
                href="https://www.youtube.com/@Thesolacelife"
                className="link-social-mobile"
              >
                <span><FaYoutube /></span>
              </a>

            </div>

          </div>

          <div style={{marginTop: '40px'}} className="e2-box2-flex">

            <div
              style={{margin: '0px 15px 0px 15px', background: 'antiquewhite'}}
              className="e2-box2-flex-text"
            >

              <div
                style={{
                  textAlign: 'center',
                  padding: '20px 20px 20px 20px',
                  fontSize: '2rem',
                  fontFamily: 'Lobster Two',
                }}
              >
                Welcome to my food blog
              </div>

              <div
                style={{
                  textAlign: 'center',
                  padding: '20px 20px 20px 20px',
                  fontSize: '1.5rem',
                  fontFamily: 'Lobster Two',
                }}
              >
                where I share my divassion for cooking and all things food-related! My name is Mitzi, and I'm thrilled to have you here.
              </div>

            </div>

          </div>

        </div>

      </section>
    </header>
  );
};

export default E2;
