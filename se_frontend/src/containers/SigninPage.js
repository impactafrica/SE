import React,{useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';


import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
      email: '',
      password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
      e.preventDefault();

      login(email, password);
  };
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0)
  });

  if (isAuthenticated)
      return <Redirect to='/onboarding' />;
  
  return (
    <div>
      {/* <Header
        absolute
        color="transparent"
        href="/"
        brand="Systematic Entrepreneurship"
        rightLinks={<HeaderLinks />}
      /> */}
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center" style={{fontFamily:"Montserrat"}}>
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={e => onSubmit(e)}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3 style={{fontFamily:"Montserrat"}}>Sign In</h3>
                  </CardHeader>
                  <CardBody>
                  <div className='form-group'>
                    <input 
                        className='form-control'
                        type='email'
                        style={{fontSize:"11pt"}}
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        style={{fontSize:"11pt"}}
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                  </CardBody>

                  <CardFooter style={{alignItems:"center"}} className={classes.cardFooter}>
                    <Button
                      color="primary"
                      size="xlg"
                      type='submit'
                      style={{fontFamily:"Montserrat"}}
                    >
                      Login
                    </Button>
                  </CardFooter>
                  <br></br>
                  <div style={{
                          paddingLeft:"20px",
                          justifyContent: "center",
                          alignItems: "center"
                        }} >

                  <p>
                      <b>Don't have an account? <Link to='/signup'>Sign Up</Link></b>
                    </p>
                    
                    <p>
                      <b>Forgot your Password? <Link to='/reset_password'>Reset Password</Link></b>
                    </p>
                  </div>
                    
                    
                </form>
                  
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
