import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout>

        <div>
          <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
          </Helmet>

          <Banner />

          <div id="main">
            <section id="one" className="tiles">
              <article style={{ backgroundImage: `url(${pic01})` }}>
                <header className="major">
                  <h3>Visual Design</h3>
                  <p>Logos, UX/UI, branding, and videography.</p>
                </header>
                <Link to="/visual" className="link primary" />
              </article>
              <article style={{ backgroundImage: `url(${pic02})` }}>
                <header className="major">
                  <h3>Engineering</h3>
                  <p>3D printed tools and battle-ready robots.</p>
                </header>
                <Link to="/engineering" className="link primary" />
              </article>
              <article style={{ backgroundImage: `url(${pic03})` }}>
                <header className="major">
                  <h3>Web Development</h3>
                  <p>Progressive web apps and Linked Data.</p>
                </header>
                <Link to="/webdev" className="link primary" />
              </article>
              <article style={{ backgroundImage: `url(${pic04})` }}>
                <header className="major">
                  <h3>Blockchain</h3>
                  <p>Cryptoasset analysis tools and educational materials.</p>
                </header>
                <Link to="/blockchain" className="link primary" />
              </article>
              <article style={{ backgroundImage: `url(${pic05})` }}>
                <header className="major">
                  <h3>Enterprise</h3>
                  <p>Business insights and entrepreneurial experience.</p>
                </header>
                <Link to="/consulting" className="link primary" />
              </article>
              <article style={{ backgroundImage: `url(${pic06})` }}>
                <header className="major">
                  <h3>References</h3>
                  <p>Meet my partners, clients, and friends.</p>
                </header>
                <Link to="/references" className="link primary" />
              </article>
            </section>
            <section id="two">
              <div className="inner">
                <header className="major">
                  <h2>Why Work With Me?</h2>
                </header>
                <p>
                  As a seasoned entrepreneur with both a technical background and
                  artistic inclinations, I often find that I'm able to look at
                  difficult business problems from a variety of perspectives.
                  Guided by design instincts tempered with scientific discipline,
                  I've helped dozens of businesses with challenges ranging from
                  brand identity to daily workflow organization.
              </p>
                <ul className="actions">
                  <li>
                    <a href="#contact" className="button next">
                      Let's Build Together
                  </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </Layout>

    )

  }

}

export default HomeIndex

export const pageQuery = graphql`
  query PageQuery {
          site {
        siteMetadata {
          title
        description
        }
      }
    }
  `
