import React from 'react';
import Seo from '../components/seo';

import Layout from '../components/layout';

const hookPage = () => {
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
          <p>1. Without Array/ Dependency - useEffect runs on every render. </p>
          <p>2. Empty Bracket/Array - the effect runs only on the initial render.</p>
          <p>3. Dependencies should be included in useEffect dependency array - if the variables updates the effect will run again.</p>

          {/* ### */}


          <iframe src="https://codesandbox.io/embed/sw-useeffect--789z9z?fontsize=14&hidenavigation=1&theme=dark"
          style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
          ></iframe>
         

          {/* <iframe src="https://codesandbox.io/embed/react-hooks-useeffect-0twv9?fontsize=14&hidenavigation=1&theme=dark"
          style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
          ></iframe> */}




          

          {/* ### */}

        </article>




        <article
          className="contact-form"
          style={{margin: 'auto', marginTop: '50px', width:"80%", marginBottom:"15px"}}
        >
          <h3 style={{textAlign: 'center'}}>React - useRef - Hook</h3>
          <p>1. UseRef lets you reference a value that’s not needed for rendering. </p>
          <p>2. Call useRef at the top level of your component to declare one or more refs.</p>
          <p>3. Changing a ref does not trigger a re-render. </p>
          <p>4. To update the value inside the ref, you need to manually change its current property. </p>
          <p>5. The information is local to each copy of your component (unlike the variables outside, which are shared). </p>

          {/* ### */}


          {/* <iframe src="https://codesandbox.io/embed/sw-useeffect--789z9z?fontsize=14&hidenavigation=1&theme=dark"
          style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
          ></iframe> */}
         

         <iframe src="https://codesandbox.io/embed/sw-useref-5zwl6y?fontsize=14&hidenavigation=1&theme=dark"
        style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
        ></iframe>




          

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

export default hookPage;
