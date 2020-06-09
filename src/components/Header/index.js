import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <Link to="/">
          <div className="logo">
            <h1>AB SALE</h1>
          </div>
        </Link>
        <div className="callToActions">
          <ul>
            <li>
              <Link to="/registration">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
