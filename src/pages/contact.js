import React from 'react';
// import Seo from "../components/Seo/Seo"
import Layout from '../components/Layout/Layout';

const contact = () => {

  return (
    <Layout>
      <div className='intro-container'>
        <div className='intro-card'>
          <section className="contact-page">
            {/* <Seo seo={{ metaTitle: 'Contact' }} /> */}
            <div
            // style={{marginTop: '100px'}}
            >
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
              style={{ margin: 'auto', marginTop: '100px' }}
            >
              <h3 style={{ textAlign: 'center' }}>get in touch</h3>
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
                  style={{ backgroundColor: 'lightblue' }}
                  type="submit"
                  className="submit-btn btn"
                >
                  submit here
                </button>
              </form>
            </article>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
