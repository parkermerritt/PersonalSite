import React from 'react'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import MyGallery from '../components/MyGallery'
import Layout from '../components/Layout'

import MahiRecord from '../assets/images/MahiRecord.jpg'
import PortZona from '../assets/images/PortZona1.jpg'
import PortFORE from '../assets/images/PortFORE.jpg'
import PortSummit from '../assets/images/PortSummit.jpg'

const Visual = props => (
  <Layout>
    <div>
      <Helmet>
        <title>Visual Design</title>
        <meta name="description" content="Landing Page" />
      </Helmet>

      <BannerLanding />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>An Unlikely Editor</h2>
            </header>
            <p>
              Becoming a graphic designer was never part of my plan— in high
              school, I inadvertently signed up for yearbook class under the guise
            of a "Research" block. Four years later, I was the editor-in-chief,{' '}
              armed with design skills honed during many meticulous hours of
              Adobe-fueled creativity. These skills were useful in shaping the
              brands of my own business ventures, as well as the many businesses I
              partnered with in doing freelance graphics and video work.
          </p>
          </div>
        </section>
        <div>
          <MyGallery />
        </div>
        <section id="two" className="spotlights">
          <section>
            <a
              href="https://www.youtube.com/watch?v=3EmxVi9zRAQ"
              className="image"
            >
              <img src={PortSummit} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>IBM Summit Promotional</h3>
                  <h5>Hiring Event Interview Video</h5>
                </header>
                <p>
                  As an experienced videographer with a knack for storytelling, in 2019 I was tapped
                  by IBM management to create a promotional video for the presitigious Summit training
                  program. As the project's chief director, editor, and interviewer, I spoke to a number of
                  fellow IBMers about their early career experiences, weaving their remarks together into a single, cohesive narrative.
              </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=3EmxVi9zRAQ"
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
              href="https://www.facebook.com/events/282955775851547/"
              className="image"
            >
              <img src={PortFORE} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Future of Reality Expo</h3>
                  <h5>Virtual Reality &amp; Gaming Event</h5>
                </header>
                <p>
                  In September of 2018 I partnered with blockchain-based Virtual
                  Reality platform VIBEHub to organize and promote an event at the
                  University of Florida's Reitz Union. In addition to assisting in
                  social media outreach and speaker acquisition, I also created
                  posters and graphics to advertise the event.
              </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://www.facebook.com/events/282955775851547/"
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
            <a href="https://www.instagram.com/mahimedia/" className="image">
              <img src={MahiRecord} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Mahi Media</h3>
                  <h5>Digital Media Marketing Firm</h5>
                </header>
                <p>
                  In 2017 I partnered with photographer Sammy Mercado (
                <a href="https://www.instagram.com/flawdakid/">@flawdakid</a>)
                                                to form a media marketing firm, Mahi Media. Working with
                                                Gainesville bands and small businesses, I worked on film and
                                                graphic design while Sammy focused on photography and digital
                                                media. Together, we created groundbreaking visual content,
                                                discovered great music, and made memories that would last us a
                lifetime.{' '}
                </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://www.instagram.com/mahimedia/"
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
              href="https://www.youtube.com/watch?v=yL8QMsR1zbI"
              className="image"
            >
              <img src={PortZona} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Enter The Zona</h3>
                  <h5>Reggae Band Webseries</h5>
                </header>
                <p>
                  Gainesville reggae band OZona boasts a unique blend of hip-hop
                  and island fusion, making waves in Florida after opening for Bob
                  Marley's legendary band, The Wailers. In this exclusive web
                  series-- directed, filmed, and edited by yours truly-- I sought
                  to capture a more candid look into the musicians' fun &amp;
                fascinating lives.{' '}
                </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=yL8QMsR1zbI"
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
