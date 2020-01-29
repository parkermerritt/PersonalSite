import React from 'react'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import Layout from '../components/Layout'

import portBG from '../assets/images/portBG.jpg'
import portNerfbot from '../assets/images/PortNerfbot.jpg'
import PortRobots4U from '../assets/images/PortRobots4U.jpg'
import portHockey from '../assets/images/PortHockey1.png'
import portNebulizer from '../assets/images/PortNebulizer.jpg'

const Visual = props => (
  <Layout>
    <div>
      <Helmet>
        <title>Engineering</title>
        <meta name="description" content="Landing Page" />
      </Helmet>

      <BannerLanding />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Design Is How It Works</h2>
            </header>
            <p>
              As long as I can remember, I've enjoyed inventing new things. While
              at first I only selected my mechanical engineering major due to my
              academic knack for calculus and physics, I soon realized that a
              career in engineering gave me the tools to help design machines and
              processes with the potential to change the world.
          </p>
          </div>
        </section>
        <section id="two" className="spotlights">
          <section>
            <a href="https://www.instagram.com/brewgills" className="image">
              <img src={portBG} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>The BrewGills Flow Hook</h3>
                  <h5>Shotgun Bottled Beer</h5>
                </header>
                <p>
                  The moment a fraternity friend of mine demonstrated a method for
                  shotgunning bottled beer using a straw, I knew there was a
                  college market for a similar, more durable product. Drafting a
                  CAD model for the "Flow Hook" and unleashing the power of modern
                  3D printing, I built a talented team around the steady business
                  of manufacturing increasingly refined versions of this quirky
                  yet profitable product.
              </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://www.instagram.com/brewgills"
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
              href="https://www.youtube.com/watch?v=dG8oeV148RI&"
              className="image"
            >
              <img src={portHockey} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Autonomous Hockey Robot</h3>
                  <h5>Controls Lab Final Project</h5>
                </header>
                <p>
                  My final semester at UF included some of the most interesting
                  engineering projects I had encountered yet; Controls Lab, in
                  particular, offered the especially challenging final project of
                  designing and programming an autonomous air-hockey playing
                  robot. Implementing our understanding of robot kinematics and
                  obtaining puck coordiantes via computer vision, a classmate
                  &amp; I used LabVIEW and C++ to develop one of the most
                  effective defensive strategies in the entire class.
              </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=dG8oeV148RI&"
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
              href="https://drive.google.com/file/d/1j4uEjy61Sg-P2GI3S28V-RDr78KvJh0n/view?usp=sharing"
              className="image"
            >
              <img src={portNebulizer} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Off-Grid Nebulizer</h3>
                  <h5>Senior Design Project</h5>
                </header>
                <p>
                  Respiratory illnesses are one of humanity's top killers,
                  especially in the most underdeveloped regions of the planet. For
                  this reason, our final project in senior design at UF involved
                  developing a plan to prototype a nebulizer-- a pressurized
                  vessel for the purpose of delivering atomized liquid medication
                  into the lungs-- with the specific focus of operating without an
                  electric power grid. My team's creation, the "Nebuliz-Air," was
                  praised as one of the most durable and effective designs of the
                  semester.
              </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1j4uEjy61Sg-P2GI3S28V-RDr78KvJh0n/view?usp=sharing"
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
              href="https://www.youtube.com/watch?v=I0mYeGxdjEk&"
              className="image"
            >
              <img src={portNerfbot} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Nerf Gunner Robot</h3>
                  <h5>Design Lab Final Project</h5>
                </header>
                <p>
                  Design Lab is one of the most notorious and challenging courses
                  in the mechanical engineering curriculum at UF-- particularly
                  due to the complexity of the massive, semester-long project.
                  Tasked with designing a robot that could navigate an obstacle
                  course and accurately fire a nerf gun at water bottles from a
                  distance, my design team successfully bested many of our
                  classmates with an impressive timed trial.
              </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=I0mYeGxdjEk&"
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
              href="https://www.facebook.com/STEAMSCIENCEROBOTICS/?hc_ref=ARRQ8_JvU3choVGwikKeij-RjSx8Ar3ptZumuPoCKoNBAR3n0ulZvL_E5-0MO20-Kls"
              className="image"
            >
              <img src={PortRobots4U} alt="" />
            </a>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Robots-4-U Counselor</h3>
                  <h5>STEAM Summer Camp</h5>
                </header>
                <p>
                  Shortly after I graduated high school, I decided to apply for
                  one last worthwhile summer job before leaving to college.
                  Robots-4-U was the perfect fit; for several weeks, I spent my
                  afternoons teaching kids about robotics, remote controls, and
                  tons of other interesting and accessible technologies. The most
                  exciting portion of the program was undoubtedly the final arena
                  challenge, where our students put their creations to the test
                  and faced off in the ultimate robot rumble.
              </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://www.facebook.com/STEAMSCIENCEROBOTICS/?hc_ref=ARRQ8_JvU3choVGwikKeij-RjSx8Ar3ptZumuPoCKoNBAR3n0ulZvL_E5-0MO20-Kls"
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
