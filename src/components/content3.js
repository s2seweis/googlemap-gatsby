import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import {useStaticQuery, graphql} from 'gatsby';

// import group from '../assets/images/group.png';

import {use} from '../styles/main-use.css';

// import {main} from '../styles/main.css';
// import image1 from '../assets/images/image1.jpg';

import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const Content3 = () => {
  const content3 = useStaticQuery (graphql`
 query {
      strapiContent3 {
        cover1 {
          alternativeText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        cover2 {
          alternativeText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        cover3 {
          alternativeText
          localFile {
            url
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  console.log ('line:400', content3);

  // ###
  console.log ('line:500', content3.strapiContent3.cover1.localFile);

  return (
    <div className="content3">

      <h3
        style={{
          textAlign: 'center',
          padding: ',20px',
          fontSize: '3rem',
          fontFamily: 'Lobster Two',
          background: 'antiquewhite',
          marginBottom: '20px',
          marginTop: '20px',
        }}
      >
        You looking for something special?
      </h3>

      {/* <GatsbyImage
        className="content3-box1"
        image={getImage (content3.strapiContent3.cover1.localFile)}
        style={{}}
        alt={content3.strapiContent3.cover1.alternativeText}
      /> */}

      {/* <h3>Test:1000</h3> */}

      <div className="content3-grid">

        {/* ### */}

        <a style={{color: 'black', display: 'contents'}} 
        href="/veggies"
        >
          <div className="content3-box1">

            <GatsbyImage
              image={getImage (content3.strapiContent3.cover1.localFile)}
              // alt={content3.strapiContent3.cover1.alternativeText}
              style={{height: '100%'}}
              alt='The Solace Life | Food Blog'
            />

            <div
              style={{
                marginTop: '-250px',
                marginLeft: '20%',
              }}
            >

              <span
                style={{
                  padding: '5px',
                  background: 'white',
                  fontFamily: 'Lobster Two',
                  fontSize: '1.5rem',
                  opacity: '0.8',
                }}
              >
                Veggies???
              </span>

            </div>

            {/* ### */}

          </div>

        </a>

        <a style={{color: 'black', display: 'contents'}} 
        href="/spicy"
        >
          <div className="content3-box2">

            <GatsbyImage
              image={getImage (content3.strapiContent3.cover2.localFile)}
              // alt={content3.strapiContent3.cover1.alternativeText}
              style={{height: '100%'}}
              alt='The Solace Life | Food Blog'

            />

            <div
              style={{
                marginTop: '-200px',
                marginLeft: '20%',
              }}
            >

              <span
                style={{
                  padding: '5px',
                  background: 'white',
                  fontFamily: 'Lobster Two',
                  fontSize: '1.5rem',
                  opacity: '0.8',
                }}
              >
                Craving for something spicy???
              </span>

            </div>

            {/* ### */}

          </div>
        </a>

        {/* ### */}
        <a style={{color: 'black', display: 'contents'}} 
        href="/hangover"
        >
          <div className="content3-box3">

            <GatsbyImage
              image={getImage (content3.strapiContent3.cover3.localFile)}
              // alt={content3.strapiContent3.cover1.alternativeText}
              style={{height: '100%'}}
              alt='The Solace Life | Food Blog'

            />

            <div
              style={{
                marginTop: '-100px',
                marginLeft: '20%',
              }}
            >

              <span
                style={{
                  padding: '5px',
                  background: 'white',
                  fontFamily: 'Lobster Two',
                  fontSize: '1.5rem',
                  opacity: '0.8',
                }}
              >
                Did you drunk again too much?
              </span>

            </div>

            {/* ### */}

          </div>
        </a>

        {/* ### */}

      </div>

      <div className="content3-flex">

        {/* ###-Start */}
        <a style={{color: 'black', display: 'contents'}} href="/veggies">

          <div className="content3-box1-flex">

            <GatsbyImage
              image={getImage (content3.strapiContent3.cover1.localFile)}
              // alt={content3.strapiContent3.cover1.alternativeText}
              style={{height: '100%'}}
              alt='The Solace Life | Food Blog'

            />

            <div
              className="content3-title-test"
              style={{
                marginTop: '-20%',
                marginLeft: '10%',
                height: 'fit-content',
              }}
            >

              <span
                className="content3-title"
                style={{
                  padding: '5px',
                  background: 'white',
                  fontFamily: 'Lobster Two',
                  fontSize: '1.5rem',
                  opacity: '0.8',
                }}
              >
                Veggies???
              </span>

            </div>
          </div>
        </a>

        {/* ### */}
        <a style={{color: 'black', display: 'contents'}} href="/spicy">
          <div className="content3-box2-flex">

            <GatsbyImage
              image={getImage (content3.strapiContent3.cover2.localFile)}
              // alt={content3.strapiContent3.cover1.alternativeText}
              style={{height: '100%'}}
              alt='The Solace Life | Food Blog'

            />

            <div
              className="content3-title-test"
              style={{
                marginTop: '-40%',
                marginLeft: '30%',
                height: 'fit-content',
              }}
            >

              <span
                className="content3-title"
                style={{
                  padding: '5px',
                  background: 'white',
                  fontFamily: 'Lobster Two',
                  fontSize: '1.5rem',
                  opacity: '0.8',
                }}
              >
                Craving for something spicy?
              </span>

            </div>
          </div>
        </a>

        {/* ### */}
        <a style={{color: 'black', display: 'contents'}} href="/hangover">
          <div className="content3-box3-flex">

            <GatsbyImage
              image={getImage (content3.strapiContent3.cover3.localFile)}
              // alt={content3.strapiContent3.cover1.alternativeText}
              style={{height: '100%'}}
              alt='The Solace Life | Food Blog'

            />

            <div
              className="content3-title-test"
              style={{
                marginTop: '-20%',
                marginLeft: '50%',
                height: 'fit-content',
              }}
            >

              <span
                className="content3-title"
                style={{
                  padding: '5px',
                  background: 'white',
                  fontFamily: 'Lobster Two',
                  fontSize: '1.5rem',
                  opacity: '0.8',
                }}
              >
                Did you drink too much again?
              </span>

            </div>
          </div>
        </a>

      </div>

      {/* ###-end */}

    </div>
  );
};

export default Content3;
