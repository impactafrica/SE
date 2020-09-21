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
import image from "assets/img/bg7.jpg";
import idea from "assets/img/idea.png";
import arrow from "assets/img/right.png";
import read from "assets/img/read.png";
import logo from "assets/img/se_logo.png";
import report from "assets/img/report.png";

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
          <h2 className={classes.title}>Let{"'"}s talk Projects</h2>
          <h5 className={classes.description}>
          Welcome to SE! We will help you start, execute and launch your project.
          <br></br>
          Here are the steps will you will undertake:
          </h5>
          
          <br></br>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                  <img src={read} height="80px" justify="center" alt="ideation"/>
                  {'   '}
                  {/* <img src={arrow} height="50px" style={{float:"right"}} alt="ideation"/> */}
                  </CardHeader>
                  <CardBody>
                    <div style={{backgroundColor:"purple",width:"100%"}}>
                    </div>
                  <h3><b>1. Read the content </b></h3>
                  </CardBody>
                  <CardBody>
                   <p>You will take a few minutes to read about a concept about entrepreneurship </p>
                  </CardBody>
                  </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <img src={idea} height="80px"  alt="ideation"/>
                  </CardHeader>
                  <CardBody justify="center">
                    <h3><b>2. Take the assessment </b></h3>
                  </CardBody>
                  <CardBody>
                    <p>Spend a short time answering the given questions about your project </p>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                  </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                  <img src={report} height="80px" justify="center" alt="ideation"/>

                  </CardHeader>
                  <CardBody>
                    <h3><b>3. Get your report</b></h3>
                  </CardBody>
                  <CardBody>
                   <p>You will receive a personalized report per module to see how you are doing so far</p>
                  </CardBody>
              </Card>
            </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
