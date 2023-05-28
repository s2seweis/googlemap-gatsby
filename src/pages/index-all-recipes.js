import React, {useState} from 'react';

import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

import {use} from '../styles/main-use.css';

// ###

import {useStaticQuery, graphql} from 'gatsby';

// ###

import ArticlesGrid from '../components/article-grid-index';

import Layout from '../components/layout';

// ###

import Seo from '../components/seo';

const AllRecipes = () => {
  const {allStrapiArticle, strapiGlobal} = useStaticQuery (graphql`


  


  



  query {
    allStrapiArticle {
      nodes {
        ...ArticleCard
      }
    }
    strapiGlobal {
      siteDescription
      siteName
    }
  }
`);

console.log( "line:1", strapiGlobal);

 

  return (
    <Layout>

      <header className="menu-landing" style={{}}>

        <Seo seo={{metaTitle: 'Index'}}  />

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

        <h1
          style={{
            textAlign: 'center',
            // marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            marginBottom: '20px',
            fontFamily: 'Lobster Two',
            fontSize: '3rem',
            background: 'antiquewhite',
          }}
        >
          {' '}Index - Recipes{' '}
        </h1>

        <ArticlesGrid articles={allStrapiArticle.nodes} />

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

export default AllRecipes;
