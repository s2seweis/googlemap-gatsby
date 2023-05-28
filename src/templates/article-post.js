import React from 'react';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Layout from '../components/layout';
import BlocksRenderer from '../components/blocks-renderer';
import Seo from '../components/seo';

const ArticlePage = ({data}) => {
  const article = data.strapiArticle;

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.cover,
  };


  const src1 = article.youtube;
  console.log( "line:1", src1);
  // const src2 = "https://www.youtube.com/embed/K0kCNlLo1k4";
  // const src2 = "https://www.youtube.com/embed/YIsEYluQaLk";
  // console.log( "line:2", src2);

  console.log("line:20", article.blocks);

  return (
    <Layout as="article">
      <Seo seo={seo} />

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

      <header className="container max-w-4xl py-8">
        <h1
          style={{textAlign: 'center'}}
          className="text-6xl font-bold text-neutral-700"
        >
          {article.title}
        </h1>
        {/* <h1 className="text-3xl  text-neutral-700">Test1</h1> */}

        <p
          className="mt-4 text-2xl text-neutral-500"
          style={{textAlign: 'center'}}
        >
          {article.description}
        </p>


        <GatsbyImage
          image={getImage(article?.cover?.localFile)}
          alt={article?.cover?.alternativeText}
          className="mt-6"
          style={{margin:"auto", maxWidth:"400px", display:"flex"}}
        />

      </header>
      {/* ### if not 1 Post is filled with blocks, whole code not working, not really good!!! */}
      <main style={{margin: '0px 15px 0px 15px'}} className="mt-8">
        <BlocksRenderer blocks={article.blocks || []} />
      </main>

      <div className="hero-youtube" style={{maxHeight:"450px", maxWidth:"450px", margin:"20px auto", marginBottom:"20px", padding:"15px"}}>

        <div
          style={{height: '-webkit-fill-available'}}
          className="ratio ratio-16x9"
        >
          <iframe
            src={src1}
            title="YouTube video"
            allowFullScreen
          />
        </div>

      </div>

      <div
        className="ui breadcrumb"
        style={{
          display: 'flex',
          justifyContent: 'center',
          // marginBottom: '50px',
          marginTop: '50px',
          paddingBottom:"50px"
        }}
      >
        <a aria-label="link" className="section" href="/news">News</a>

        <div className="divider">/</div>
        <a aria-label="link" className="section" href="/about">About</a>

        <div className="divider">/</div>
        <a aria-label="link" className="section " href="/index-all-recipes">Index</a>
        {/* className="active section " */}
      </div>

    </Layout>
  );
};

export const pageQuery = graphql`
  query ($slug: String) {
    strapiArticle(slug: { eq: $slug }) {
      id
      slug
      title
      description
      blocks {
        ...Blocks
      }
      cover {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      youtube
    }
  }
`;

export default ArticlePage;
