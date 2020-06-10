import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { auth } from "./../../firebase/utils";

const Header = (props) => {
  const { currentUser } = props;

  return (
    <header className="header">
      <div className="wrap">
        <Link to="/">
          <div className="logo">
            <h1>AB SALE</h1>
          </div>
        </Link>
        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <span onClick={() => auth.signOut()}>Logout</span>
              </li>
            </ul>
          )}

          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
