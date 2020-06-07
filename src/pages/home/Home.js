import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import Rick_and_Morty from "../../images/Rick_and_Morty.svg";

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <img className="Home_img" src={Rick_and_Morty} alt="banner" />
        <Link className="btn btn-primary m-4" to="/character">
          Enter
        </Link>
      </div>
    );
  }
}
