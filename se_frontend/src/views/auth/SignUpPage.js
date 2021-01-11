import React,{useEffect,useContext} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// Importing toastify module 
import {toast} from 'react-toastify';  
  
// Import toastify css file 
import 'react-toastify/dist/ReactToastify.css';  

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

import { Link } from "react-router-dom";

import axios from 'axios';
import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {userContext} from 'context/usercontext'


const useStyles = makeStyles(styles);

const Signup = () => {
    const {authenticate,setAuthenticated} = useContext(userContext);

    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }
  
    var csrftoken = readCookie('csrftoken');
    
    //function to create a new user
    function signup(name, email, password, re_password)
    {
      const config = {
        headers: {
            'Content-Type': 'application/json',
            "X-CSRFToken": csrftoken
        }
      }

      const url = `${process.env.REACT_APP_API_URL}/auth/users/`;

      const body = JSON.stringify({ name, email, password, re_password }); 
      
      axios.post(url, body, config)
        .then(response =>
          console.log("user created succesfully",response))
        .catch(errors =>
          console.log("error was found!",errors))
    }

    //declare and set form variable states to null
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        re_password: ''
    });

    const [accountCreated, setAccountCreated] = useState(false);

    const { name, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    //pass form values to function
    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup( name, email, password, re_password );
            setAccountCreated(true);
        }
    };

    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
      setCardAnimation("");
    }, 700);

    const classes = useStyles();
    useEffect(() => {
      window.scrollTo(0, 0)
    });

    if (authenticate)
        return <Redirect to='/' />;
    if(accountCreated){
        return (
        <Redirect to='login' />);
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
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={5}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={e => onSubmit(e)}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3 style={{fontFamily:"Montserrat"}}>Sign Up</h3>
                    
                  </CardHeader>
                  <CardBody style={{fontFamily:"Montserrat"}}>
                  <div className='form-group'>
                    <input 
                        style={{fontSize:"11pt"}}
                        className='form-control'
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={e => onChange(e)}
                        required 
                    />
                </div>
                <div className='form-group'>
                    <input 
                        className='form-control'
                        style={{fontSize:"11pt"}}
                        type='email'
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
                        style={{fontSize:"11pt"}}
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        style={{fontSize:"11pt"}}
                        type='password'
                        placeholder='Confirm Password'
                        name='re_password'
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <CardFooter style={{alignItems:"center"}} className={classes.cardFooter} >
                  <Button color="primary"
                      size="xlg"
                      type='submit'
                      style={{fontFamily:"Montserrat"}}>Register
                  </Button>
                </CardFooter>
                  <br/>
                  <p  style={{fontFamily:"Montserrat"}}>
                    <b>Already have an account?<Link to={"/login"} className={classes.link}> Sign In</Link></b>
                  </p>
                  </CardBody>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
    </div>
    </div>
  );
};

export default Signup;
