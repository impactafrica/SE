import React,{useEffect,useContext} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';

import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

//import user context

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import {userContext} from 'context/usercontext'

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

const Login = () => {

//setting authentication
  const {authenticated,setAuthenticated} = useContext(userContext);
  const {accessToken, setAccessToken} = useContext(userContext);
  const {refreshToken, setRefreshToken} = useContext(userContext);

//function to login user
  function login(email,password)
    {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const url = `${process.env.REACT_APP_API_URL}/auth/jwt/create/`;

        //convert input to string
        const body = JSON.stringify({ email, password });

        //axios method
        axios.post(url, body, config)
          //if successful
          .then(response => {
            console.table([response.data.access]);
            setAuthenticated(true)

            //store tokens in localstorage
            setAccessToken(response.data.access);
            
            setRefreshToken(response.data.refresh);
          })

          //catch errors
          .catch(errors => {
            console.error('There was an error!', errors);
          })
    }

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
  
  if (authenticated){
    console.log("you are authenticated");
    console.log(accessToken);
    return <Redirect to='/startup_register' />;
  }
      
  return (
    <div> 
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


export default Login;
