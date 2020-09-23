import React,{useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import BeachHeadAccordion from "./Accordions/Beachhead/beachhead_accordion";
import ConclusionAccordion from "./Accordions/Beachhead/beachhead_conlusion_accordion";
import LinearProgress from "components/CustomLinearProgress/BeachheadLinearProgressBar";
import { Link } from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

const useStyles = makeStyles(styles);

export default function Module_Item(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const dashboardRoutes = [];
  
  useEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div>
      <Header
        color="primary"
        routes={dashboardRoutes}
        brand="Systematic Entrepreneurship"
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      {/* <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      > */}
        
        <div className={classes.container}>
          <GridContainer width="90%">
         
          <GridItem><h3 style={{color:"black"}}><b>Module 2: Market Research</b></h3></GridItem>
          <GridItem xs={12} sm={12} md={12} className={classes[cardAnimaton]}>
              <div className={classes.title}>
                <h5 style={{color:"black"}}><b>Your Progress</b></h5>
              </div>
              <div className={classes.root}>
                <LinearProgress />
              </div>
            </GridItem>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <GridItem><h3 style={{color:"black"}}><b>b. Beachhead Market</b></h3></GridItem>

          <GridItem xs={12} sm={12} md={12}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardBody>
                    <h5>
                    By definition, a beachhead market is  a market that fits certain characteristics that 
                    make it ideal for a product to thrive.               
                    In this step, we shall analyze the top 3-5 markets you selected and narrow them the ideal one.  
                    <Link
                      color="primary"
                      to={"/beachhead-def"}
                    >
                      {' '}<b><b>Read More...</b></b>
                    </Link>
                    </h5>
                    {/* <SegmentingAccordion/>         */}
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card color="primary" className={classes[cardAnimaton]}>
              <CardBody justify="center">
                  <h4 style={{color:"black"}}><b>Lets Get Started</b></h4>
                  </CardBody>
                  <CardBody>
                    <div>
                    <BeachHeadAccordion/>
                    </div>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardBody justify="center">
                    {/* <b><h2>Conclusion</h2></b> */}
                  </CardBody>
                  <CardBody>
                    <ConclusionAccordion/>
                </CardBody>
              </Card>
            </GridItem>
            <Link to="persona_item">
              <Button
                  justify="right"
                  color="primary"> 
                  Click Here to proceed to the next section
              </Button>
            </Link>
          </GridContainer>
          <GridContainer>
          
        </GridContainer>
        </div>
      </div>
    // </div>
  );
}
