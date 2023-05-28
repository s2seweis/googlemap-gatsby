import React, {useState} from 'react';

import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

import {use} from '../styles/main-use.css';

// ###

import {useStaticQuery, graphql} from 'gatsby';

// ###

import ArticlesGrid from '../components/articles-grid';

import Layout from '../components/layout';

// ###

import Seo from '../components/seo';

const Beverage = () => {
  const {allStrapiArticle, strapiGlobal} = useStaticQuery (graphql`


  



  query {
    allStrapiArticle(filter: {categories: {eq: "beverage"}}) {
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

  const seo = {
    metaTitle: 'Beverage',
    // metaDescription: "Delicious",
  };

  return (
    <Layout>

      <Seo seo={seo} />

      <header className="menu-landing" style={{}}>

        <div style={{marginTop: '20px'}}>
          <a
            style={{
              fontSize: '1.3rem',
              padding: '5px',
              marginLeft: '20px',
            }}
            href="javascript:history.back()"
          >
            <button type="button" class="btn btn-link">Go Back</button>
          </a>
        </div>

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
          {' '}Beverage{' '}
        </h1>

        <ArticlesGrid articles={allStrapiArticle.nodes} />

        <div
          className="ui breadcrumb"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
            marginTop: '50px',
          }}
        >
          <a aria-label="link" className="section" href="/web-development">News</a>

          <div className="divider">/</div>
          <a aria-label="link" className="section" href="/web-design">About</a>

          <div className="divider">/</div>
          <a className="active section " href="/adobe">Index</a>

        </div>

      </header>

    </Layout>
  );
};

export default Beverage;
