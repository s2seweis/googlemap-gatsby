import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import {useStaticQuery, graphql} from 'gatsby';

// import group from '../assets/images/group.png';

import {use} from '../styles/main-use.css';

// import {main} from '../styles/main.css';
// ###
// import image20 from '../assets/images/20.jpg';
// import image21 from '../assets/images/21.jpg';
// import image22 from '../assets/images/22.jpg';
// import image23 from '../assets/images/23.jpg';
// import image24 from '../assets/images/24.jpg';
// import image25 from '../assets/images/25.jpg';
// ###

// ###

import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const Overview = () => {
  const overview = useStaticQuery (graphql`
  query {
    strapiOverview {
      breakfast {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      lunch {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      dinner {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      desserts {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      fiesta {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      beverage {
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

  console.log ('line:4', overview);
  console.log ('line:5', overview.strapiOverview.breakfast.localFile);

  // ###

  return (
    <header className="menu-landing" style={{}}>

      {/* ### */}

      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom: '20px',
          fontFamily: 'Lobster Two',
          fontSize: '3rem',
          background: 'antiquewhite',
        }}
      >
        {' '}Overview{' '}
      </h1>

    

      {/* <GatsbyImage
        className='image-about'

        image={getImage(overview.strapiOverview.breakfast.localFile)}
        style={{ margin:"auto", display:"flex", marginTop:"20px", borderRadius:"50%"  }}
        /> */}

      {/* <GatsbyImage
        className='image-about'

        image={getImage(overview.strapiOverview.lunch.localFile)}
        style={{ margin:"auto", display:"flex", marginTop:"20px", borderRadius:"50%"  }}
        /> */}

      <div style={{marginTop: '25px'}} className="menu-row">

        <a
          aria-label="breakfast"
          style={{color: 'black', textDecoration: 'none'}}
          href="/breakfast"
        >

          <div className="ui-card" style={{width: 'auto'}} href="/breakfast">
            <div className="container-img">

              {/* <img
                className="image-overview"
                src={overview.strapiOverview.breakfast.localFile.url}
                // src={image20}
                alt="Food Blog"
              /> */}

              <GatsbyImage
                className="image-overview"
                image={getImage (overview.strapiOverview.breakfast.localFile)}
                style={{}}
                alt='The Solace Life'
              />

            </div>
            <div style={{}} className="content">
              <div style={{textAlign: 'center'}} className="header-overview">
                Breakfast
              </div>
            </div>
          </div>
        </a>

        <a
          aria-label="lunch"
          style={{color: 'black', textDecoration: 'none'}}
          href="/lunch"
        >
          <div className="ui-card" style={{width: 'auto'}}>
            <div className="container-img">

              {/* <img
                className="image-overview"
                // src={image21}
                src={overview.strapiOverview.lunch.localFile.url}
                alt="Food Blog"
              /> */}

              <GatsbyImage
                className="image-overview"
                image={getImage (overview.strapiOverview.lunch.localFile)}
                style={{}}
                alt='Food Blog'
              />

            </div>
            <div className="content">
              <div style={{textAlign: 'center'}} className="header-overview">
                Lunch
              </div>
            </div>
          </div>
        </a>

        <a
          aria-label="dinner"
          style={{color: 'black', textDecoration: 'none'}}
          href="/dinner"
        >
          <div className="ui-card" style={{width: 'auto'}}>
            <div className="container-img">

              {/* <img
                className="image-overview"
                // src={image22}
                src={overview.strapiOverview.dinner.localFile.url}
                alt="Food Blog"
              /> */}

              <GatsbyImage
                className="image-overview"
                image={getImage (overview.strapiOverview.dinner.localFile)}
                style={{}}
                alt='Food Blog'
              />

            </div>
            <div className="content">
              <div style={{textAlign: 'center'}} className="header-overview">
                Dinner
              </div>
            </div>
          </div>
        </a>

      </div>

      {/* ###--- */}

      <div
        style={{
          marginTop: '15px',
        }}
        className="menu-row"
      >

        <a
          aria-label="link"
          style={{color: 'black', textDecoration: 'none'}}
          href="/dessert"
        >
          <div className="ui-card" style={{width: 'auto'}}>
            <div className="container-img">

              {/* <img
                className="image-overview"
                // src={image23}
                src={overview.strapiOverview.desserts.localFile.url}
                alt="Food Blog"
              /> */}

              <GatsbyImage
                className="image-overview"
                image={getImage (overview.strapiOverview.desserts.localFile)}
                style={{}}
                alt='Food Blog'
              />

            </div>
            <div className="content">
              <div style={{textAlign: 'center'}} className="header-overview">
                Desserts
              </div>
            </div>
          </div>
        </a>

        <a
          aria-label="link"
          style={{color: 'black', textDecoration: 'none'}}
          href="/fiesta"
        >
          <div className="ui-card" style={{width: 'auto'}}>
            <div className="container-img">

              {/* <img
                className="image-overview"
                // src={image24}
                src={overview.strapiOverview.fiesta.localFile.url}
                alt="Food Blog"
              /> */}

              <GatsbyImage
                className="image-overview"
                image={getImage (overview.strapiOverview.fiesta.localFile)}
                style={{}}
                alt='Food Blog'
              />

            </div>
            <div className="content">
              <div style={{textAlign: 'center'}} className="header-overview">
                Fiesta
              </div>
            </div>
          </div>
        </a>

        <a
          aria-label="link"
          style={{color: 'black', textDecoration: 'none'}}
          href="/beverage"
        >
          <div className="ui-card" style={{width: 'auto'}}>
            <div className="container-img">
              {/* <img
                className="image-overview"
                // src={image25}
                src={overview.strapiOverview.beverage.localFile.url}
                alt="Food Blog"
              /> */}

              <GatsbyImage
                className="image-overview"
                image={getImage (overview.strapiOverview.beverage.localFile)}
                style={{}}
                alt='Food Blog'
              />

            </div>
            <div className="content">
              <div style={{textAlign: 'center'}} className="header-overview">
                Beverage
              </div>
            </div>
          </div>
        </a>
      </div>

      <section className="section-center hero-center">
        <article className="menu-info">
          <div>

            <div
              className="center"
              style={{display: 'flex', justifyContent: 'center'}}
            />

            <div className="social-links" />

          </div>
        </article>

        <div className="menu-article" />

      </section>
    </header>
  );
};

export default Overview;
