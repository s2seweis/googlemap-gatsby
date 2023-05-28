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
import E2 from '../components/e2';

import ScrollToTop from "react-scroll-to-top";

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

  console.log("line:1",strapiGlobal );



  return (
    <Layout>

      <Seo 
      seo={{metaTitle: 'Home'}}
       />

      <ScrollToTop smooth color="#708d3e" style={{display:"flex", justifyContent:"center", alignItems:"center"}} />

      <Hero />
      {/* <Seperate /> */}
      <Hero1 />
      {/* <Seperate /> */}
      <E2 />

      {/* <Headings
        title={strapiGlobal.siteName}
        description={strapiGlobal.siteDescription}
      /> */}

      <Overview />

      <Content3 />
      {/* <Content3 /> */}

      <Grid />

      {/* <main>
        <ArticlesGrid articles={allStrapiArticle.nodes} />
      </main> */}

    </Layout>
  );
};

export default IndexPage;
