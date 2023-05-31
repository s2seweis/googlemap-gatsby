import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout';
import ArticlesGrid from '../components/articles-grid';
import Seo from '../components/seo';
// import Headings from '../components/headings';

import Hero from '../components/hero';
import Hero1 from '../components/hero1';

import Grid from '../components/grid';

import 'semantic-ui-css/semantic.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Overview from '../components/overview';
// import Seperate from '../components/seperate';
import Content3 from '../components/content3';
import E1 from '../components/e2';

import ScrollToTop from 'react-scroll-to-top';

// ###

import {GoogleMap, Marker, useLoadScript} from '@react-google-maps/api';
import {useMemo} from 'react';

// ###

const IndexPage = () => {
  const {isLoaded} = useLoadScript ({
    // googleMapsApiKey: "AIzaSyDQQQ0-nbHRT6gkbtMlaVRgxawHwLITyGI",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const center = useMemo (() => ({lat: 18.52043, lng: 73.856743}), []);

  const {allStrapiArticle, strapiGlobal} = useStaticQuery (graphql`
    query {
      allStrapiArticle {
        nodes {
          ...ArticleCard
        }
      }
      strapiGlobal {
        siteName
        siteDescription
      }
    }
  `);

  console.log ('line:1', strapiGlobal);

  return (
    <Layout>

      <Seo seo={{metaTitle: 'Home'}} />

      <ScrollToTop
        smooth
        color="#708d3e"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />

      <Hero />
      {/* <Seperate /> */}
      {/* <Hero1 /> */}
      {/* <Seperate /> */}

      <E1 />

      <div className="App">
        <h1>GoogleMap API</h1>
        {!isLoaded
          ? <h1>Loading...</h1>
          : <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={10}
            />}
      </div>

      {/* <Headings
        title={strapiGlobal.siteName}
        description={strapiGlobal.siteDescription}
      /> */}

      {/* <Overview /> */}

      {/* <Content3 /> */}
      {/* <Content3 /> */}

      <Grid />

      {/* <main>
        <ArticlesGrid articles={allStrapiArticle.nodes} />
      </main> */}

    </Layout>
  );
};

export default IndexPage;
