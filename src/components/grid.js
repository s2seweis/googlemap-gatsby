import React, {useState} from 'react';

// import {Link} from 'gatsby';
// import {StaticImage} from 'gatsby-plugin-image';

import {use} from '../styles/main-use.css';

// ###

import {useStaticQuery, graphql} from 'gatsby';

// ###

import ArticlesGrid from '../components/articles-grid';

// ###

const Grid = () => {
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
    <header className="menu-landing" style={{}}>

      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
          // fontFamily: 'Lobster Two',
          fontSize: '2rem',
          background: 'antiquewhite',
        }}
      >
        {' '}Marker Clustering{' '}
      </h1>
      <div
      style={{lineBreak:"anywhere", padding:"10px"}}
      
      >https://developers.google.com/maps/documentation/javascript/kml</div>
      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
          // fontFamily: 'Lobster Two',
          fontSize: '2rem',
          background: 'antiquewhite',
        }}
      >
        {' '}Pan to Current Location{' '}
      </h1>
      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
          // fontFamily: 'Lobster Two',
          fontSize: '2rem',
          background: 'antiquewhite',
        }}
      >
        {' '}Displaying KML{' '}
      </h1>
      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
          // fontFamily: 'Lobster Two',
          fontSize: '2rem',
          background: 'antiquewhite',
        }}
      >
        {' '}Combining JSON Data{' '}
      </h1>
      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
          // fontFamily: 'Lobster Two',
          fontSize: '2rem',
          background: 'antiquewhite',
        }}
      >
        {' '}Place Search Pagination{' '}
      </h1>
      <h1
        style={{
          textAlign: 'center',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
          // fontFamily: 'Lobster Two',
          fontSize: '2rem',
          background: 'antiquewhite',
        }}
      >
        {' '}Waypoints in Directions{' '}
      </h1>

      {/* <ArticlesGrid articles={allStrapiArticle.nodes} /> */}

      <h3>Coming soon!</h3>

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
        <a aria-label="News" className="section" href="/news">News</a>

        <div aria-label="About" className="divider">/</div>
        <a className="section" href="/about">About</a>

        <div aria-label="Index" className="divider">/</div>
        <a className="section " href="/index-all-recipes">Index</a>
        {/* className="active section " */}
      </div>

    </header>
  );
};

export default Grid;
