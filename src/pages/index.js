/*global google*/
import React from 'react';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';
import ScrollToTop from 'react-scroll-to-top';
import Introduction from '../components/Maps/Introduction/Introduction';
import { Link } from "gatsby";
// ### - Style
import 'semantic-ui-css/semantic.min.css';
import '../styles/main.css';

const IndexPage = () => {

  return (
    <Layout>
      <Seo seo={{ metaTitle: 'Home' }} />
      <ScrollToTop
        smooth
        color="#0d6efd"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <Introduction />
    </Layout>
  );
};

export default IndexPage;
