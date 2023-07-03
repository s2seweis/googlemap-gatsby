import React from 'react';
import Seo from '../components/seo';

import Layout from '../components/layout';

import UseEffect from '../components/hooks/useEffect';
import UseRef from '../components/hooks/useRef';
import UseMemo from '../components/hooks/useMemo';
import UseCallback from '../components/hooks/useCallback';
import CustomHooks from '../components/hooks/customHooks';
import UseContext from '../components/hooks/useContext';

const hookPage = () => {
  // const seo = {
  //     metaTitle: title,
  //     metaDescription: title,
  //   }

  return (
    <Layout>

      <section className="contact-page">

        <Seo seo={{metaTitle: 'Contact'}} />

        <div style={{marginTop: '50px'}}>
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

        {/* ### */}

        <UseEffect />

        {/* ### */}

        <UseRef />

        {/* ### */}

        <UseMemo />

        {/* ### */}

        <UseCallback />

        {/* ### */}

        <CustomHooks />

        {/* ### */}

        <UseContext />

        

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
