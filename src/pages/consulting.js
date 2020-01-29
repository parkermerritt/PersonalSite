import React from 'react'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import Layout from '../components/Layout'

import PortConsult1 from '../assets/images/PortConsult1.jpg'
import PortCalixte from '../assets/images/PortCalixte.jpg'
import PortSIC from '../assets/images/PortSIC.jpg'
import PortScrum from '../assets/images/PortScrum.jpg'


const Visual = props => (
  <Layout>

    <div>
      <Helmet>
        <title>Enterprise Management</title>
        <meta name="description" content="Landing Page" />
      </Helmet>

      <BannerLanding />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Enterprise &amp; Startup Skills</h2>
            </header>
            <p>
              In my years as an entrepreneur, I've learned many lessons (or in
              other words, I've failed a lot). Along the way, I've encountered a
              number of diffcult situations, including:
          </p>
            <ul>
              <li>Forming a business &amp; dividing equity</li>
              <li>Managing complex software projects</li>
              <li>Applying for a patent</li>
              <li>Identifying target market &amp; networking with advertisers</li>
              <li>Improving SEO (Search Engine Optimization)</li>
            </ul>
            <p>
              Speaking from personal experience, tackling these challenges with
              the experience of a first-time entrepreneur felt like an impossible
              task. I had always heard that mentorship was the key to succeeding
              in business, but I never truly connected with the role models I
              encountered. For this reason, I find great enjoyment in advising my
              fellow startup founders, showing them the ropes in the more
              difficult domains of business, while also helping them discover
              their niche.
          </p>
          </div>
        </section>
        <section id="two" className="spotlights">
          <section>
            <a href="https://www.scrum.org/user/443422" className="image">
              <img src={PortScrum} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Certified Scrum Master</h3>
                  <h5>Complex Project Management</h5>
                </header>
                <p>
                  During my experience as a leader in technology startups, I
                  became increasingly aware of the difficulties associated with
                  effectively managing complex projects. After doing some
                  research, I found that Agile &amp; Scrum were among the most
                  popular project management frameworks in the industry. I
                  subsequently sought out certification in Scrum, and obtained the
                status of PSM-I from{' '}
                  <a href="https://www.scrum.org/">Scrum.org.</a>
                </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://www.scrum.org/user/443422"
                      className="button"
                    >
                      Learn more
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a
              href="https://docs.google.com/document/d/19bfI9bHEVp7q4Qk-lYFASYVDjggePsSQBWnq9wW5UHk/edit?usp=sharing"
              className="image"
            >
              <img src={PortConsult1} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Sample Strategy Report</h3>
                  <h5>Small Business Consultation</h5>
                </header>
                <p>
                  I provided In-and-Out Moving, an Orlando-based moving labor
                  service, with an in-depth business consultation detailing how
                  they specifically might best deploy marketing and organizational
                  methods. By including an industry summary, as well as a call to
                  action, I successfully addressed both the broad and the more
                  specific aspects of their startup.
              </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://docs.google.com/document/d/19bfI9bHEVp7q4Qk-lYFASYVDjggePsSQBWnq9wW5UHk/edit?usp=sharing"
                      className="button"
                    >
                      Learn more
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a
              href="https://docs.google.com/document/d/1OoueY-EbpNk7CneYyQjQmE8xnaZMSxhb0_mMWDraXY4/edit?usp=sharing"
              className="image"
            >
              <img src={PortCalixte} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Brand Consultation </h3>
                  <h5>Identity Analysis Report</h5>
                </header>
                <p>
                  Kervens Calixte, an Orlando-based brand manager, approached me
                  seeking assistance is analyzing his own personal brand's
                  strengths, seeking to distill his identity into the perfect
                  business name. Unifying aspects of central Florida culture,
                  symbolic elements, and Calixte's own persona, I constructed a
                  report detailing 3 unique brand name suggestions.
              </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://docs.google.com/document/d/1OoueY-EbpNk7CneYyQjQmE8xnaZMSxhb0_mMWDraXY4/edit?usp=sharing"
                      className="button"
                    >
                      Learn more
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a href="https://www.ufstudentinvestmentclub.org/" className="image">
              <img src={PortSIC} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>UF Student Investment Club</h3>
                  <h5>Vice President of Finance</h5>
                </header>
                <p>
                  As the elected VP of Finance for SIC during 2015, I piloted the
                  club's first Sponsorship committee, vetting student candidates
                  and designing strategies for community outreach and partnership
                  acquisition. I also sat on the executive board when the club
                  first applied for and obtained 501(c)(3) nonprofit status,
                  allowing us to work with a much wider range of sponsors with
                  fewer limitations on funding.
              </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://www.ufstudentinvestmentclub.org/"
                      className="button"
                    >
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
