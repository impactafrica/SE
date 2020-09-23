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
import PrepareProcessAccordion from "./Accordions/Persona/prepare_process_accordion";
import PersonaProfileAccordion from "./Accordions/Persona/persona_profile_accordion";
import DistributePersonaAccordion from "./Accordions/Persona/distribute_persona_accordion";
import LinearProgress from "components/CustomLinearProgress/PersonaLinearProgressBar";
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
          <GridItem><h3 style={{color:"black"}}><b>c. Buyer Persona</b></h3></GridItem>

          <GridItem xs={12} sm={12} md={12}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardBody>
                    <h5>
                    A buyer persona is a detailed description of one potential, real end user. 
                    This step ensures that the whole team shares the same vision as to who the 
                    intended end user is set out to be and allows focus to be narrowed down to 
                    that one single persona. 
                    <Link
                      color="primary"
                      to={"/prepare-process"}
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
                    <PrepareProcessAccordion />
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
                    <PersonaProfileAccordion/>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardBody justify="center">
                    {/* <b><h2>Conclusion</h2></b> */}
                  </CardBody>
                  <CardBody>
                    <DistributePersonaAccordion/>
                </CardBody>
              </Card>
            </GridItem>
            <Link to="modules">
              <Button
                  justify="right"
                  color="primary"> 
                  You're done! Click here to go to modules
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
