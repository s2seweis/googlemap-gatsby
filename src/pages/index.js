// import React from 'react';
/*global google*/

import React, {useState, useCallback, useEffect} from 'react';

import {useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout';
import ArticlesGrid from '../components/articles-grid';
import Seo from '../components/seo';
// import Headings from '../components/headings';
import Hero from '../components/hero';
import Hero1 from '../components/hero1';
import Grid from '../components/grid';
import Overview from '../components/overview';
import Content3 from '../components/content3';
import E1 from '../components/e2';
import ScrollToTop from 'react-scroll-to-top';
import Intro from '../components/intro';

// ### - Style
import 'semantic-ui-css/semantic.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// ### - Maps
import Map1 from '../components/maps/map-markers-buttons';
import Map2 from '../components/maps/map-infobox';
import Map3 from '../components/maps/map-clusterer';
import MapContainer from '../components/maps/clusterer/MapContainer';
import Map4 from '../components/maps/current-location';
import Map5 from '../components/maps/map-kml';
import Map6 from '../components/maps/map-marker-clustering';
import Map7 from '../components/maps/pan-current-location';
import Map8 from '../components/maps/map-search-box';
import SubmenuTest from '../components/submenu';

// ### - Test: Sidebar6
// import Sidebar6 from '../components/sidebar6/sidebar6';

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

  return (
    <Layout>

      <Seo seo={{metaTitle: 'Home'}} />

      <ScrollToTop
        smooth
        color="#0d6efd"
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

      <Intro />
      <Map5 />

      <Map1 />

      <Map2 />

      <MapContainer />

      <Map3 />

      <Map6 />

      <Map4 />

      <Map7 />

      <Map8 />

      {/* ### */}
      {/* <Sidebar6 /> */}
      {/* ### */}

      {/* <Overview /> */}
      {/* <Content3 /> */}
      {/* <Content3 /> */}

      {/* <Grid /> */}

      {/* <main>
        <ArticlesGrid articles={allStrapiArticle.nodes} />
      </main> */}

      <SubmenuTest />

    </Layout>
  );
};

export default IndexPage;
