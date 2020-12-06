import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/avatar.jpg";
import Background from "assets/img/profile-bg.jpg";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const history = useHistory();
  const to_profile = () => history.push('/project-page');
  return (
    <div>
      
      <div style={{paddingTop:"250px", backgroundImage: "url(" + Background + ")", filter:"blur(2px)"}} small filter />
      <div className={classNames(classes.main)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <br/>
                  
                </div>
              </GridItem>
            </GridContainer>
            
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <Card>
                  <CardHeader style={{display:"flex",backgroundColor:"#FF931E",color:"black"}}>
                    <h3 style={{fontFamily:"Montserrat", paddingRight:"40px"}}>My Project Details</h3>
                  </CardHeader>

                  <CardBody style={{fontFamily:"Montserrat"}}>
                  
                <div className='form-group'>
                    <input 
                        className='form-control'
                        style={{fontSize:"11pt"}}
                        type='text'
                        placeholder='Project Name'
                        
                        name='description'
                        required 
                    />
                </div>
                <div className='form-group'>
                    <input 
                        style={{fontSize:"11pt"}}
                        className='form-control'
                        type='text'
                        placeholder='Description'
                        name='project_name'
                        
                        required 
                    />
                </div>
                
                <CardFooter style={{alignItems:"center"}} className={classes.cardFooter} >
                
                    <Button
                      size="xlg"
                      onClick={to_profile}
                      style={{fontFamily:"Montserrat",backgroundColor:"#FF931E",color:"black"}}
                      type='submit'
                    >
                      Update
                    </Button>
                    
                </CardFooter>
                  <br/>
                 
                  </CardBody>
                </Card>
                <br/>
                
              </GridItem>
              
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
