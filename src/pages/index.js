/*global google*/

import React, {useState, useCallback, useEffect} from 'react';

import {useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

import ScrollToTop from 'react-scroll-to-top';
import Intro from '../components/intro';

// ### - Style
import 'semantic-ui-css/semantic.min.css';
import '../styles/main-use.css';

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

     

    </Layout>
  );
};

export default IndexPage;
