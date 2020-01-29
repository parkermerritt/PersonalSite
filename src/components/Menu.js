import React from 'react'
import Link from 'gatsby-link'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/visual">
            Visual Design
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/engineering">
            Engineering
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/webdev">
            Web Development
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/blockchain">
            Blockchain
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/consulting">
            Enterprise
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/references">
            References
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <a
            onClick={props.onToggleMenu}
            href="#contact"
            className="button special fit"
          >
            Let's Build Together
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)



export default Menu
