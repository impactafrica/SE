import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import image from "assets/img/bg7.jpg";
import idea from "assets/img/idea.png";
import arrow from "assets/img/content.png";
import read from "assets/img/framework.png";
import logo from "assets/img/people.png";
import report from "assets/img/mentor.png";
import { Link } from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 style={{fontFamily:"Montserrat",fontWeight: "600"}} className={classes.title}>
            <b>Let{"'"}s talk Projects</b>
          </h2>
          <h5 style={{fontFamily:"Montserrat",fontWeight: "600",color:"#595959"}}>
          <b>Welcome to SE! We will help you start, execute and launch your project.</b>
          <br></br>
          </h5>
          
          <br></br>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer >
        <GridItem xs={12} sm={12} md={3}>
          <Card color="primary" className={classes[cardAnimaton]}>
              <CardHeader color="primary" className={classes.cardHeader}>
              <img src={read} height="80px" justify="center" alt="ideation"/>
              {'   '}
              </CardHeader>
              <CardBody>
                <div style={{backgroundColor:"purple",width:"100%"}}>
                </div>
              <h3 style={{fontFamily:"Montserrat",fontWeight: "600"}}><b>Framework </b></h3>
              </CardBody>
              <CardBody>
                <p style={{fontFamily:"Montserrat"}}><b>Systematic approach to your entrepreneurial journey</b></p>
              </CardBody>
              </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card color="primary" className={classes[cardAnimaton]}>
              <CardHeader color="primary" className={classes.cardHeader}>
                <img src={arrow} height="80px"  alt="ideation"/>
              </CardHeader>
              <CardBody justify="center">
                <h3 style={{fontFamily:"Montserrat",fontWeight: "600"}}><b>Curated Content </b></h3>
              </CardBody>
              <CardBody>
                <p style={{fontFamily:"Montserrat"}}>Content organized for easy obtaining and easy linkage with the stepwise process of SE</p>
              </CardBody>
              <CardFooter className={classes.cardFooter}>
              </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card color="primary" className={classes[cardAnimaton]}>
              <CardHeader color="primary" className={classes.cardHeader}>
              <img src={logo} height="80px" justify="center" alt="ideation"/>

              </CardHeader>
              <CardBody>
                <h3 style={{fontFamily:"Montserrat",fontWeight: "600"}}><b>Community</b></h3>
              </CardBody>
              <CardBody>
                <p style={{fontFamily:"Montserrat"}}>A support system from one colleague to the other throughout the entrepreneurial journey</p>
              </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card color="primary" className={classes[cardAnimaton]}>
              <CardHeader color="primary" className={classes.cardHeader}>
              <img src={report} height="80px" justify="center" alt="ideation"/>

              </CardHeader>
              <CardBody>
                <h3 style={{fontFamily:"Montserrat",fontWeight: "600"}}><b>Mentorship</b></h3>
              </CardBody>
              <CardBody>
                <p style={{fontFamily:"Montserrat"}}>A holding hand for both accountability and knowledge sharing</p>
              </CardBody>
          </Card>
        </GridItem>
        <GridItem>
        <Link to={"/login-page"} className={classes.link}>
              <Button
                style={{fontFamily:"Montserrat"}}
                color="primary"
                size="lg"
                rel="noopener noreferrer"
              >
                Get Started
              </Button>
              </Link>
        </GridItem>
          
        </GridContainer>
      </div>
    </div>
  );
}
