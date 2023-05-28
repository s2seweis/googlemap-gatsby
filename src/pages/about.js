import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import BlocksRenderer from '../components/blocks-renderer';
import Headings from '../components/headings';

// ###
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
// ###

import logo5 from '../assets/images/logo5.png';

const AboutPage = () => {
  const {strapiAbout} = useStaticQuery (graphql`
  query {
    strapiAbout {
      title
      blocks {
        ...Blocks
      }
      cover {
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

  console.log ('line:1', strapiAbout.cover.localFile.url);
  console.log ('line:2', strapiAbout.cover.alternativeText);
  console.log ('line:3', strapiAbout.title);

  console.log("line:100",strapiAbout.cover?.localFile);

  const {title, blocks} = strapiAbout;

  const seo = {
    metaTitle: title,
    metaDescription: title,
  };

  return (
    <Layout>

      <header
        className="menu-landing"
        style={{background: 'rgb(250 250 250 / var(--tw-bg-opacity))'}}
      >

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

        <Seo seo={{metaTitle: 'About'}} />

        <Headings title={strapiAbout.title} />

        {/* <img className='test:1' style={{width:"auto", height:"350px", margin:"auto", borderRadius:"50%"}} src={strapiAbout.cover.localFile.url} ></img> */}

        {/* ### */}

        <GatsbyImage
        className='image-about'

        image={getImage(strapiAbout.cover?.localFile)}
        alt={strapiAbout.cover?.alternativeText}
        style={{ margin:"auto", display:"flex", marginTop:"20px", borderRadius:"50%"  }}
        />

        {/* ### */}

        {/* ### - need to replace the image - query direct for it */}
        <BlocksRenderer blocks={blocks} />

        <div
          className="ui breadcrumb"
          style={{
            display: 'flex',
            justifyContent: 'center',
            // marginBottom: '50px',
            marginTop: '50px',
            paddingBottom: '50px',
          }}
        >
          <a aria-label="link" className="section" href="/news">News</a>

          <div className="divider">/</div>
          <a aria-label="link" className="section" href="/about">About</a>

          <div className="divider">/</div>
          <a aria-label="link" className="section " href="/index-all-recipes">Index</a>
          {/* className="active section " */}
        </div>

      </header>

    </Layout>
  );
};

export default AboutPage;

