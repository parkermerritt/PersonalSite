import React from 'react'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import Layout from '../components/layout'

import PortBrainwallet from '../assets/images/PortBrainwallet.jpg'
import PortGBTC from '../assets/images/PortGBTC.jpg'

const Visual = props => (
  <Layout>
    <div>
      <Helmet>
        <title>Blockchain Tech</title>
        <meta name="description" content="Landing Page" />
      </Helmet>

      <BannerLanding />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Blockchain for Everyone</h2>
            </header>
            <p>
              Above all other technologies, public blockchains and cryptoassets
              are the digital developments I find the most fascinating. The
              ability to trustlessly tokenize any manner of value has the
              potential to upend the financial industry, and I've dedicated much
              of my time building businesses and tools to help people worldwide
              participate in this monetary revolution.
          </p>
          </div>
        </section>
        <section id="two" className="spotlights">
          <section>
            <a href="https://brainwallet.club/" className="image">
              <img src={PortBrainwallet} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Brainwallet Book Club</h3>
                  <h5>Blockchain Reading Service</h5>
                </header>
                <p>
                  As interesting as blockchain technologies are, there is a
                  steeping learning curve in approaching this subject--
                  substantial understanding of game theory, cryptography, and
                  financial markets is needed to truly grasp the implications of
                  this technology. To help improve the educational process, I
                  created a monthly subscription box service providing patrons
                  with the best books on blockchain, as well as in-depth reviews
                  of each title.
              </p>
                <ul className="actions">
                  <li>
                    <a href="https://brainwallet.club/" className="button">
                      Learn more
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a href="http://gainesvillebtc.com/" className="image">
              <img src={PortGBTC} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Gainesville Bitcoin Community Site</h3>
                  <h5>Local Business Directory</h5>
                </header>
                <p>
                  As an active member in Gainesville's local cryptocurrency scene,
                  I wanted to create a resource that would foster innovation and
                  Bitcoin adoption in my own community. Contacting business
                  leaders via the local Facebook forums, I constructed a directory
                  for Gainesville businesses promoting the acceptance of
                  cryptocurrency payments.
              </p>
                <ul className="actions">
                  <li>
                    <a href="http://gainesvillebtc.com/" className="button">
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
