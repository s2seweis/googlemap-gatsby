import React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

// import group from '../assets/images/group.png';

import {use} from '../styles/main-use.css';

// import image1 from '../assets/images/image1.jpg';

// import {main} from '../styles/main.css';

const Hero = () => {
  return (
    <header className="hero" style={{}}>

      <section className="section-center hero-center">
        <article className="hero-info" style={{}}>

          <div className="hero-grid">

            {/* ###-Box:1 */}
            <div className="hero-article">

              <h1 className="title-h1" style={{textAlign: 'center'}}>
                The Solace Life
              </h1>

              <h4
                className="title-h1"
                style={{textAlign: 'center', fontSize: '1rem'}}
              >
                Eat Healthy - Stay Happy
              </h4>

            </div>
            {/* ###-Box:1 End  */}

          </div>
          
          <div className="hero-grid">

            {/* ###-Box:1 */}
            <div className="hero-youtube">

            <div
              style={{height: '-webkit-fill-available'}}
              className="ratio ratio-16x9"
            >
              <iframe
                src="https://www.youtube.com/embed/YIsEYluQaLk"
                title="YouTube video"
                allowFullScreen
              />
            </div>

            </div>
            {/* ###-Box:1 End  */}

          </div>


        </article>

        {/* ### - false */}

        <div className="hero1">

          <div className="article1">

            <h1 className="title-h1" style={{textAlign: 'center'}}>
              The Solace Life
            </h1>

            <h4
              className="title-h1"
              style={{textAlign: 'center', fontSize: '1rem'}}
            >
              Eat Healthy - Stay Happy
            </h4>

          </div>

          <div className="image-wrapper1">

            <div
              style={{height: '-webkit-fill-available'}}
              className="ratio ratio-16x9"
            >
              <iframe
                src="https://www.youtube.com/embed/YIsEYluQaLk"
                title="YouTube video"
                allowFullScreen
              />
            </div>

          </div>

        </div>

        {/* ### */}

      </section>
    </header>
  );
};

export default Hero;
