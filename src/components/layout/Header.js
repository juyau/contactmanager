import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mr-2">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>

            <li className="nav-item mr-2">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-user-plus mr-1" />
                Add
              </Link>
            </li>

            <li className="nav-item mr-2">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question-circle mr-1" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string
};

export default Header;
