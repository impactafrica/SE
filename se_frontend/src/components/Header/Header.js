import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "assets/jss/material-kit-react/components/headerStyle.js";
import { useHistory } from "react-router-dom";
import logo from "assets/img/se_logo.png";
import se_logo from "assets/img/Logo.png";
import { logout } from '../../actions/auth';

const navbar = ({ isAuthenticated, logout }) => {
  const authLinks = (
      <li className="nav-item">
          <a className='nav-link' onClick={logout} href='/login'>Logout</a>
      </li>
  );

  const guestLinks = (
      <Fragment>
          <li className="nav-item">
              <NavLink className="nav-link" exact to='/login'>Login</NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link" exact to='/signup'>Sign Up</NavLink>
          </li>
      </Fragment>
  );

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to='/'>Auth System</Link>
          <button 
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <NavLink className="nav-link" exact to='/'>Home</NavLink>
                  </li>
                  { <Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment> }
              </ul>
          </div>
      </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(navbar);