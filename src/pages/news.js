import React from 'react';
import Seo from '../components/seo';

import Layout from '../components/layout';

const contact = () => {
  return (
    <Layout>

      <Seo seo={{metaTitle: 'News'}} />

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

      <section
        style={{width: '50%', margin: 'auto', marginTop: '100px'}}
        className="contact-page"
      >
        <article style={{margin: 'auto'}} className="contact-form">
          <h3 style={{textAlign: 'center'}}>
            This will coming soon. In Work.{' '}
          </h3>

        </article>

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

      </section>
    </Layout>
  );
};

export default contact;
