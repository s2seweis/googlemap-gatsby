// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import BlocksRenderer from "../components/blocks-renderer"
// import Headings from "../components/headings"

// import { GatsbyImage, getImage } from "gatsby-plugin-image"


// const InfoPage = () => {



// //   const { strapiAbout } = useStaticQuery(graphql`
// //     query {
// //       strapiAbout {
// //         title
// //         blocks {
// //           ...Blocks
// //         }
// //       }
// //     }
// //   `)

//   const {strapiInfo} = useStaticQuery(graphql`
//   query {
//     strapiInfo {
//       title
//       description
//       image {
//         localFile {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `)

// console.log("line:1", strapiInfo);


//   const { title } = strapiInfo

//   const seo = {
//     metaTitle: title,
//     metaDescription: title,
//   }

//   return (
    
//     <Layout >

//       <div style={{marginTop: '20px'}}>
//         <a
//           style={{
//             fontSize: '1.3rem',
//             padding: '5px',
//             marginLeft: '20px',
//           }}
//           href="javascript:history.back()"
//         >
//           <button type="button" className="btn btn-link">Go Back</button>
//         </a>
//       </div>

//         <div className="container max-w-4xl py-8">



//       <Seo seo={seo} />
//       <Headings  title={strapiInfo.title} />




//       <h4
//       style={{ textAlign:"center" }}
//       >Test1</h4>


//       <p className="line-clamp-2 mt-2 text-neutral-500"
//       style={{ textAlign:"center" }}
//       >
//           {strapiInfo.description}
//         </p>


//       {/* <BlocksRenderer blocks={blocks} /> */}





//       <GatsbyImage
//       className="infopage-12"

//         image={getImage(strapiInfo.image?.localFile)}
//         alt={strapiInfo.image?.alternativeText}
//         style={{ height: "500px", width:"300px", marginLeft:"auto", marginRight:"auto", display:"block", marginTop:"50px" }}
//         />




//         </div>

//     </Layout>
//   )
// }

// export default InfoPage

import React from 'react';
import Seo from "../components/seo"

import Layout from '../components/layout';

const contact = () => {
  // const seo = {
  //     metaTitle: title,
  //     metaDescription: title,
  //   }

  return (
    <Layout>

      <section className="contact-page">

      <Seo seo={{metaTitle: 'Contact'}} />


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

        <article
          className="contact-form"
          style={{margin: 'auto', marginTop: '100px'}}
        >
          <h3 style={{textAlign: 'center'}}>get in touch</h3>
          <form
            action="https://formsubmit.co/weissenborn.sebastian@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://precious-conkies-b8586b.netlify.app/thankyou"
              />

              <input
                type="hidden"
                name="_subject"
                value="Message From My Portfolio!!!"
              />

              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              />
            </div>
            <button
              style={{backgroundColor: 'lightblue'}}
              type="submit"
              className="submit-btn btn"
            >
              submit here
            </button>
          </form>
        </article>
      </section>

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

export default contact;

