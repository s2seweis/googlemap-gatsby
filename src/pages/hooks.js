import React from 'react';
import Seo from '../components/Seo/Seo';
import Layout from '../components/Layout/layout';
import UseEffect from '../components/hooks/useEffect';
import UseRef from '../components/hooks/useRef';
import UseMemo from '../components/hooks/useMemo';
import UseCallback from '../components/hooks/useCallback';
import CustomHooks from '../components/hooks/customHooks';
import UseContext from '../components/hooks/useContext';

const hookPage = () => {

  return (
    <Layout>
      <section className="contact-page">
        <Seo seo={{ metaTitle: 'Contact' }} />
        <div style={{ marginTop: '50px' }}>
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
        <UseEffect />
        <UseRef />
        <UseMemo />
        <UseCallback />
        <CustomHooks />
        <UseContext />
      </section>
    </Layout>
  );
};

export default hookPage;
