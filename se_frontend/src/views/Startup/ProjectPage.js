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

import profile from "assets/img/twixy.jpg";
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
  const to_profile = () => history.push('/profile-page');
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
                  <div className={classes.name}>
                    <h3 style={{fontFamily:"Montserrat",fontWeight:"600"}}><b>Christine Gatwiri</b></h3>
                    
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            
            <br/>
            
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                
                <br/>
                <Card>
                  <CardHeader style={{display:"flex",backgroundColor:"#FF931E",color:"white"}} className={classes.cardHeader}>
                    <h3 style={{fontFamily:"Montserrat", paddingRight:"60px"}}>My Projects</h3>
                    <Button color="transparent">
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                  </CardHeader>
                  <CardBody>
                  <div>
                    <h3 style={{fontFamily:"Montserrat"}}><b>Project:</b> Done!International</h3>
                    <h3 style={{fontFamily:"Montserrat"}}><b>Description:</b> Allow Kenyans in diaspora to manage their projects</h3>
                    <h3 style={{fontFamily:"Montserrat"}}><b>Progress:</b> 20%</h3>
                    <h3 style={{fontFamily:"Montserrat"}}><b>Current Module:</b> Market Research</h3>
                    <h3 style={{fontFamily:"Montserrat"}}><b>Number of Reports:</b> 3</h3>
                    
                  </div>

                  </CardBody>
                  <CardFooter style={{alignItems:"center"}} className={classes.cardFooter} >
                   
                    <Button
                      color="primary"
                      size="xlg"
                      onClick={to_profile}
                      style={{fontFamily:"Montserrat"}}
                      type='submit'
                    >
                      My profile
                    </Button>
                    <Button
                        color="primary"
                        size="xlg"
                        onClick={to_profile}
                        style={{fontFamily:"Montserrat"}}
                        type='submit'
                      >
                        View Reports
                      </Button>
                    
                </CardFooter>
                </Card>
              </GridItem>
              
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
