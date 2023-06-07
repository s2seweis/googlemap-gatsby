// import React from 'react';

import React, {useState, useCallback, useEffect} from 'react';

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

import Content3 from '../components/content3';
import E1 from '../components/e2';

import Map1 from '../components/maps/map-markers-buttons';
import Map2 from '../components/maps/map-infobox';
import Map3 from '../components/maps/map-clusterer';

import MapContainer from '../components/maps/clusterer/MapContainer';

import ScrollToTop from 'react-scroll-to-top';

// ### - Test

import Map4 from '../components/maps/current-location';

import Map5 from '../components/maps/map-kml';


// ### - Test

const IndexPage = () => {
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

  // console.log ('line:1', strapiGlobal);

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

      {/* <Hero /> */}
      {/* <Seperate /> */}
      {/* <Hero1 /> */}
      {/* <Seperate /> */}

      {/* <E1 /> */}

      {/* ### */}

      <Map1 />

      {/* ### */}

      <Map2 />

      {/* ### */}

      {/* ### */}

      <MapContainer />

      {/* ### */}

      {/* ### */}

      <Map3 />

      {/* ### - Test */}

      <Map4 />

      {/* ### - Test */}

      {/* <Map5 /> */}

      {/* ### - Test */}


      {/* ### - Test */}

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
