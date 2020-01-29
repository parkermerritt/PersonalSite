import React from 'react'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import Layout from '../components/Layout'

import PortKnight from '../assets/images/PortKnight.jpg'
import PortKyleL from '../assets/images/PortKyleL.jpg'


const Visual = props => (
  <Layout>
    <div>
      <Helmet>
        <title>References</title>
        <meta name="description" content="Landing Page" />
      </Helmet>

      <BannerLanding />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Collaboration is Key</h2>
            </header>
            <p>
              Hear from some of my most satisfied clients, business partners, and
              customers.
          </p>
          </div>
        </section>
        <section id="two" className="spotlights">
          <section>
            <a href="#" className="image">
              <img src={PortKnight} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h2>Knight School Tutoring</h2>
                  <h4>Andy Torres, Founder</h4>
                </header>
                <p>
                  "Parker has been vital in helping me define my business model
                  and branding. I gave him some themes I wanted, and he spit back
                  a name, marketing play, and operations cycle right back to me. I
                  look forward to using what we have created to establish myself
                  as a professional educator."
              </p>
              </div>
            </div>
          </section>
          <section>
            <a href="https://www.vibehub.io/" className="image">
              <img src={PortKyleL} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h2>VIBEHub VR Marketplace</h2>
                  <h4>Kyle Lampkin, Collegiate Brand Manager</h4>
                </header>
                <p>
                  "When it comes to design, some people just get it. Parker's
                  designs were great and I didn't have to ask him for 10
                  iterations; he just gets the job done right the first time.
                  Looking forward to seeing what he creates in the future."
              </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  </Layout>
)

export default Visual
