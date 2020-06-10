import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <Link className="Navbar__brand" to="/">
          <div className="Navbar__brand-logo" />
          <span className="font-weight-light">Characters</span>
          <span className="font-weight-bold Navar__brand-name">Rick and Morty</span>
        </Link>
      </div>
    );
  }
}

export default Navbar;