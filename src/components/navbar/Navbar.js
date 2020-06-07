import React from "react";
import { Link } from "react-router-dom";

import logo from '../../images/Rick_and_Morty_footer.png';

import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <Link className="Navbar__brand" to="/">
          <img className="Navbar__brand-logo" src={logo} alt="logo" />
          <span className="font-weight-light">Characters</span>
          <span className="font-weight-bold Navar__brand-name">Rick and Morty</span>
        </Link>
      </div>
    );
  }
}

export default Navbar;

/**
 *
 * <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
 */
