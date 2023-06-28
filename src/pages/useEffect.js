import React from 'react';
import Seo from '../components/seo';

import Layout from '../components/layout';

const useEffectPage = () => {
  // const seo = {
  //     metaTitle: title,
  //     metaDescription: title,
  //   }

  return (
    <Layout>

      <section className="contact-page">

        <Seo seo={{metaTitle: 'Contact'}} />

        <div style={{marginTop: '100px'}}>
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
          style={{margin: 'auto', marginTop: '0px', width:"80%", marginBottom:"15px"}}
        >
          <h3 style={{textAlign: 'center'}}>React - useEffect - Hook</h3>

          {/* ### */}


          <iframe src="https://codesandbox.io/embed/sw-useeffect--789z9z?fontsize=14&hidenavigation=1&theme=dark"
          style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
          ></iframe>
         

          {/* <iframe src="https://codesandbox.io/embed/react-hooks-useeffect-0twv9?fontsize=14&hidenavigation=1&theme=dark"
          style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
          ></iframe> */}




          

          {/* ### */}

        </article>
      </section>

      {/* <div
          className="ui breadcrumb"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
            paddingBottom:"50px"
          }}
        >
          <a aria-label="link" className="section" href="/news">News</a>

          <div className="divider">/</div>
          <a aria-label="link" className="section" href="/about">About</a>

          <div className="divider">/</div>
          <a aria-label="link" className="section " href="/index-all-recipes">Index</a>
        </div> */}

    </Layout>
  );
};

export default useEffectPage;
