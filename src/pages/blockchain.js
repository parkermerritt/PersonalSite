import React from 'react'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import Layout from '../components/Layout'

import PortBrainwallet from '../assets/images/PortBrainwallet.jpg'
import PortGBTC from '../assets/images/PortGBTC.jpg'
import PortBoB from '../assets/images/PortBoB.jpg'
import PortRB from '../assets/images/PortRB.jpg'


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
                            Public blockchains and cryptoassets
                            are among some of the digital developments I find the most fascinating. The
                            ability to trustlessly tokenize nearly any form of economic value has the
                            potential to disrupt the financial industry, and I've dedicated much
                            of my time building businesses and tools to help people worldwide
                            participate in this monetary revolution.
          </p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <a href="https://www.youtube.com/watch?v=wpUHwlpUK1w" className="image">
                            <img src={PortBoB} alt="" />
                        </a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Birth of Blockchain</h3>
                                    <h5>IBM Summit Speaker Series Presentation</h5>
                                </header>
                                <p>
                                    When infused with a compelling narrative, any technical presentation
                                    becomes immensely more memorable. For this reason, when asked to speak
                                    to a local high school on the subject of blockchain, I leveraged storytelling
                                    to help pique their own curiosity on the subject, making Bitcoin’s legendary
                                    origin story the primary focus of my discussion— the anonymous creator, his
                                    rebellious intentions, and the unprecedented levels of financial freedom blockchain
                                    has enabled around the world.
                                </p>
                                <ul className="actions">
                                    <li>
                                        <a href="https://www.youtube.com/watch?v=wpUHwlpUK1w" className="button">
                                            Learn more
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <a href="https://www.researchblocks.com/" className="image">
                            <img src={PortRB} alt="" />
                        </a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Research Blocks</h3>
                                    <h5>Hyperledger Supply Chain Platform</h5>
                                </header>
                                <p>
                                    Recognizing blockchain technology's potential to transform traditional supply chain operations,
                                    I co-founded a company in 2018 to help bring greater trust and efficiency to the pharmaceutical industry. As CTO,
                                    I developed an serverless React + AWS web application, while also managing a team of freelance developers to
                                    anchor this platform to Hyperledger, an enterprise-focused blockchain protocol.
                                </p>
                                <ul className="actions">
                                    <li>
                                        <a href="https://www.researchblocks.com/" className="button">
                                            Learn more
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>


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
