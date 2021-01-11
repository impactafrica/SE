/*eslint-disable*/
import React,{useEffect,useContext,useState} from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import axios from 'axios';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import Header from "components/Header/Header.js";

// core components
import Button from "components/CustomButtons/Button.js";
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom';

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

import { Fragment } from 'react';
import {userContext} from 'context/usercontext'

const navbar = () => {

  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0)
  });

  //check whether user is authenticated
  const {authenticated,setAuthenticated} = useContext(userContext); 
  const [currentUser, setCurrentUser] = useState({});

  //function to logout user
  function logout()
  {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setAuthenticated(false);
    return <Redirect to='/login' />;
  }

  const history = useHistory();
  const to_modules = () => history.push('/modules_list');
  const to_profile = () => history.push('/profile-page');
  const to_project = () => history.push('/project-page');
  const home = () => history.push('/');
  const login = () => history.push('/login');
  const signup = () => history.push('/signup');

  if (!authenticated){
    console.log("authenticated?",authenticated)
    console.log("you are not authenticated");
  }
    
  //if authenticated show the following on the navbar
  const authLinks = (
      <Fragment>
         <ListItem className={classes.listItem}>
              <Button
                style={{fontFamily:"Montserrat"}}
                onClick={to_modules}
                target="_blank"
                color="transparent"
                className={classes.navLink}
              >
                <b>Modules</b>
              </Button>
          </ListItem>

            <ListItem className={classes.listItem}>
                <Button
                style={{fontFamily:"Montserrat"}}
                onClick={to_profile}
                target="_blank"
                color="transparent"
                className={classes.navLink}
              >
                <b>Profile</b>
              </Button>
            
            </ListItem>

            <ListItem className={classes.listItem}>
                <Button
                style={{fontFamily:"Montserrat"}}
                onClick={to_project}
                target="_blank"
                color="transparent"
                className={classes.navLink}
              >
                <b>MyProject</b>
              </Button>
            
            </ListItem>

          <ListItem className={classes.listItem}>
            <Link
                to="/login">
              <Button
                  onClick={logout}
                  style={{fontFamily:"Montserrat",color:"white"}}
                  target="_blank"
                  color="primary"
                  className={classes.navLink}
                >
                  <b>Logout</b>
                </Button>
              </Link>
            </ListItem>        
      </Fragment>
    );

    //if not authenticated show the following on the navbar
    const guestLinks = (
        <Fragment>
            <ListItem className={classes.listItem}>
                <Button
                  onClick={login}
                  style={{fontFamily:"Montserrat",color:"white"}}
                  target="_blank"
                  color="primary"
                  className={classes.navLink}
                >
                  <b>Login</b>
                </Button>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Button
                  onClick={signup}
                  style={{fontFamily:"Montserrat",color:"white"}}
                  target="_blank"
                  color="primary"
                  className={classes.navLink}
                >
                  <b>Sign Up</b>
                </Button>
            </ListItem>            
        </Fragment>
    );

  return (
      <List className={classes.list} style={{fontFamily:"Montserrat"}}>

        <ListItem className={classes.listItem}>
          <Button
            onClick={home}
            style={{fontFamily:"Montserrat"}}
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <b>Home</b>
          </Button>
        </ListItem>

        <ListItem className={classes.listItem}>
          <Button
          onClick={home}
          style={{fontFamily:"Montserrat"}}
          to="/modules"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
          <b>Blog</b>
        </Button>
        </ListItem>
        
        {/* check whether user is authenticated */}
        { <Fragment>{ authenticated ? authLinks : guestLinks }</Fragment> }
      </List>
    
  );
}


export default navbar;