import React,{useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";


// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  useEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Systematic Entrepreneurship"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "primary"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h3 style={{fontFamily:"Montserrat"}} className={classes.title}>Start, Execute and Launch Your Project!</h3>
              
              <br />
              <br/>
              <br />
              <br/>
              <Link to={"/login-page"} className={classes.link}>
              <Button
                color="primary"
                size="lg"
                rel="noopener noreferrer"
              >
                Sign Up
              </Button>
          </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} style={{width:"100%"}}>
          <ProductSection/>
          <WorkSection/>
        </div>
      </div>
    </div>
  );
}
