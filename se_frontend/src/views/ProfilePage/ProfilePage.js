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
import { faFlag} from "@fortawesome/free-solid-svg-icons";
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
  const to_edit = () => history.push('/profile-edit');
  const to_project = () => history.push('/project-page');

  return (
    <div>
      {/* <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      /> */}
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
                <Card>
                  <CardHeader color="primary" style={{display:"flex"}} >
                    <h3 style={{fontFamily:"Montserrat", paddingRight:"40px"}}>My Account Details</h3>
                    <Button color="transparent" onClick={to_edit}>
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                  </CardHeader>
                  <CardBody >
                  <div style={{fontFamily:"Montserrat"}}>
                    <h3 style={{fontFamily:"Montserrat"}}><b>Name:</b> Christine Gatwiri</h3>
                    <h3 style={{fontFamily:"Montserrat"}}><b>Phone Number:</b> 0734827352</h3>
                    <h3 style={{fontFamily:"Montserrat"}}><b>Email:</b> gatwiri@impactafrica.network</h3>
                  </div>
                  </CardBody>
                </Card>
                <br/>
                <Card>
                  <CardHeader  style={{display:"flex",backgroundColor:"#FF931E",color:"white"}} className={classes.cardHeader}>
                    <h3 style={{fontFamily:"Montserrat", paddingRight:"60px"}}><b>My Projects - 1</b></h3>
                    <Button color="transparent" onClick={to_project}>
                    <FontAwesomeIcon icon={faFlag} />
                    </Button>
                  </CardHeader>
                  <CardBody>
                  <div>
                    <h3 style={{fontFamily:"Montserrat"}}><b>Project:</b> Done!International</h3>
                    <h3 style={{fontFamily:"Montserrat"}}><b>Description:</b> Allow Kenyans in diaspora to manage their projects</h3>
                    <h3 style={{fontFamily:"Montserrat"}}><b>Progress:</b> 20%</h3>
                  </div>
                  </CardBody>
                </Card>
              </GridItem>
              
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
