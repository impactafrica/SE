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
import arrow from "assets/img/content.png";
import read from "assets/img/framework.png";
import logo from "assets/img/people.png";
import report from "assets/img/mentor.png";

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
          </h5>
          
          <br></br>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <Card color="primary" className={classes[cardAnimaton]}>
              <CardHeader color="primary" className={classes.cardHeader}>
              <img src={read} height="80px" justify="center" alt="ideation"/>
              {'   '}
              </CardHeader>
              <CardBody>
                <div style={{backgroundColor:"purple",width:"100%"}}>
                </div>
              <h3><b>Framework </b></h3>
              </CardBody>
              <CardBody>
                <p>Systematic approach to your entrepreneurial journey</p>
              </CardBody>
              </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card color="primary" className={classes[cardAnimaton]}>
              <CardHeader color="primary" className={classes.cardHeader}>
                <img src={arrow} height="80px"  alt="ideation"/>
              </CardHeader>
              <CardBody justify="center">
                <h3><b>Curated Content </b></h3>
              </CardBody>
              <CardBody>
                <p>Content organized for easy obtaining and easy linkage with the stepwise process of SE</p>
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
                <h3><b>Community</b></h3>
              </CardBody>
              <CardBody>
                <p>A support system from one colleague to the other throughout the entrepreneurial journey</p>
              </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card color="primary" className={classes[cardAnimaton]}>
              <CardHeader color="primary" className={classes.cardHeader}>
              <img src={report} height="80px" justify="center" alt="ideation"/>

              </CardHeader>
              <CardBody>
                <h3><b>Mentorship</b></h3>
              </CardBody>
              <CardBody>
                <p>A holding hand for both accountability and knowledge sharing</p>
              </CardBody>
          </Card>
        </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
