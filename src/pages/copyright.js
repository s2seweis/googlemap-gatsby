import React from 'react';
import Seo from "../components/seo"

import Layout from '../components/layout';

const contact = () => {
  return (
    <Layout>

      <Seo seo={{metaTitle: 'Copyright'}} />

      <section className="contact-page">

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
          className="copyright-form"
          style={{margin: 'auto', marginTop: '20px', marginBottom: '20px'}}
        >

          <div
            className="text-copyright-1"
            style={{
              // width: '60%',
              margin: 'auto',
            }}
          >

            <p style={{fontWeight: '700'}} className="text-copyright-3">
              Copyright (c) [2023] [SHW]. All rights reserved.

              This copyright notice applies to the blog app [The Solace Life] software developed by [Sebastian Hans Weissenborn].
            </p>

            <p className="text-copyright-2">

              The app includes, but is not limited to, its source code, design, features, and accompanying documentation.

              The blog app is protected by copyright laws and international treaties. Unauthorized reproduction, distribution, or modification of the app, in whole or in part, without the express written permission of [Your Name or Company Name], is strictly prohibited.

              Any use of the blog app must comply with the terms and conditions specified in the accompanying license agreement. This includes, but is not limited to, restrictions on copying, reverse-engineering, and unauthorized distribution.

              [SHW] retains all ownership and intellectual property rights to the blog app. No transfer of ownership or rights is granted to users or any third parties.

              The blog app may contain third-party components or libraries subject to their respective copyrights and licenses. Any use of such components is governed by their respective terms and conditions.

              This copyright notice serves to protect the intellectual property and rights associated with the blog app. Any infringement of these rights may result in legal action and damages.

              For inquiries regarding licensing or permissions, please contact [SHW] at [weissenborn.sebastian@gmail.com].

              By using the blog app, you agree to abide by the terms and conditions set forth in this copyright notice and the accompanying license agreement.

              Thank you for respecting our intellectual property rights.

              [SHW]

            </p>

          </div>

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
