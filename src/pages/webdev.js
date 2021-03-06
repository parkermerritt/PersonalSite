import React from 'react'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import Layout from '../components/Layout'

import portGithub from '../assets/images/PortGithub.jpg'

const Visual = props => (
  <Layout>
    <div>
      <Helmet>
        <title>Web Development</title>
        <meta name="description" content="Landing Page" />
      </Helmet>

      <BannerLanding />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Intuitive UI &amp; Open Data</h2>
            </header>
            <p>
              While I'm a mechanical engineer by trade, the world of web
              development and software engineering offers too much opportunity to
              be ignored. Next generation Javascript libraries, public APIs, and
              troves of untapped business and consumer data have pushed the web to
              the brink of yet another digital revolution. I aspire to design
              beautiful, intuitive interfaces in order to enable everyday people
              to unlock the transformational power of these platforms. Over the
              past few years I've taught myself various programming skills in
              order to harness this potential.
          </p>
            <h3>Skills/Languages:</h3>
            <ul>
              <li>Javascript (React, Vue)</li>
              <li>HTML/CSS</li>

              <li>Python</li>
              <li>Java</li>
              <li>C++</li>
            </ul>
          </div>
        </section>
        <section id="two" className="spotlights">
          <section>
            <a href="https://github.com/parkermerritt" className="image">
              <img src={portGithub} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Github Profile</h3>
                </header>
                <p>
                  Check out my Github profile, where most of my open-source code
                  is hosted.
              </p>
                <ul className="actions">
                  <li>
                    <a href="https://github.com/parkermerritt" className="button">
                      Learn more
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </section>
      </div>
    </div>
  </Layout>
)

export default Visual
