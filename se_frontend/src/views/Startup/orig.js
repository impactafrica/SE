import React,{useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
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
import MultipleValueTextInput from 'react-multivalue-text-input';

import { Link } from "react-router-dom";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import { useForm } from "react-hook-form";
import axios from 'axios';


import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);



export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  useEffect(() => {
    window.scrollTo(0, 0)
  });

  const { register, handleSubmit } = useForm();
  const config = {
    headers: {
        'Content-Type': 'application/json'
    }
  }
  const onSubmit = data => {
    axios.post(`${process.env.REACT_APP_API_URL}/modules/project/`, data, config)
        .then(response => console.log(response.data.id));
  }; 
  
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Systematic Entrepreneurship"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
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
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3 style={{fontFamily:"Montserrat"}}>Register Your Project</h3>
                    
                  </CardHeader>
                  <CardBody style={{fontFamily:"Montserrat"}}>
                  <div className='form-group'>
                    <input 
                        style={{fontSize:"11pt"}}
                        className='form-control'
                        type='text'
                        placeholder='Project Name'
                        name='project_name'
                        ref={register} 
                        required 
                    />
                </div>
                <div className='form-group'>
                    <input 
                        className='form-control'
                        style={{fontSize:"11pt"}}
                        type='text'
                        placeholder='Project description'
                        name='description'
                        ref={register} 
                        required 
                    />
                </div>
                <CardFooter style={{alignItems:"center"}} className={classes.cardFooter} >
                
                    <Button
                      color="primary"
                      size="xlg"
                      style={{fontFamily:"Montserrat"}}
                      type='submit'
                    >
                      Register
                    </Button>
                </CardFooter>
                  <br/>
                 
                  </CardBody>
                  
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
