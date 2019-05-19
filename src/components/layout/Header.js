import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Header = props => {
  const { branding } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-danger navbar-dark mb-5 p-3">
        <div className="container">
          <Link to="/" className="navbar-brand ">
            {branding}
          </Link>
          <ul className="nav">
            <li className="nav-item ">
              <Link to="/" className="nav-link text-light">
                <i className="fa fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/contact/add" className="nav-link text-light">
                <i className="fa fa-plus" /> Add Contact
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/about" className="nav-link text-light">
                <i className="fa fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
