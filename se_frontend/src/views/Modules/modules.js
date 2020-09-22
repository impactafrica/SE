import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
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
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';


import CircularProgress from '@material-ui/core/CircularProgress';
import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import idea from "assets/img/idea.png";
import market from "assets/img/market.png";
import mvp from "assets/img/mvp.png";

const useStyles = makeStyles(styles);

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const dashboardRoutes = [];
  const [progress1] = React.useState(100);
  const [progress2] = React.useState(10);
  

  return (
    <div>
      <Header
        color="primary"
        routes={dashboardRoutes}
        brand="Systematic Entrepreneurship"
        rightLinks={<HeaderLinks />}
        fixed
        // changeColorOnScroll={{
        //   height: 400,
        //   color: "primary"
        // }}
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
          <GridContainer justify="left">
            <GridItem xs={12} sm={12} md={4}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3>1. Ideation and Formation</h3>
                  </CardHeader>
                  <CardBody justify="center">
                    <img src={idea} height="50px"  alt="ideation"/>
                    
                  </CardBody>
                  <CardBody>
                    <p>In this hunt for specificity we will first identify your reasons for starting this venture. </p>
                  </CardBody>
                  
                  <CardFooter className={classes.cardFooter}>
                  <CircularProgressWithLabel value={progress1} />
                  
                  <Link to={"/module_item"} className={classes.link}>
                    <Button simple color="primary" size="lg">
                      Get started
                    </Button>
                </Link>
                  </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3>2. Market Research</h3>
                  </CardHeader>
                  <CardBody>
                  <img src={market} height="50px" justify="center" alt="ideation"/>
                  </CardBody>
                  <CardBody>
                   <p>Get to engage and find out your target customer.</p>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                  <CircularProgressWithLabel value={progress2} />
                  <Link to={"/module_item"} className={classes.link}>
                    <Button simple color="primary" size="lg">
                      Continue
                    </Button>
                </Link>
                  </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3>3. MVP Development</h3>
                  </CardHeader>
                  <CardBody>
                  <img src={mvp} height="50px" justify="center" alt="ideation"/>
                  </CardBody>
                  <CardBody>
                   <p>Here we show you how to build and design a minimum product for user testing and feedback</p>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                  <Link to={"/modules"} className={classes.link}>
                    <Button simple color="primary" size="lg">
                      Get started
                    </Button>
                </Link>
                  </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3>4. Customer Value Prop</h3>
                  </CardHeader>
                  <CardBody>
                  <img src={mvp} height="50px" justify="center" alt="ideation"/>
                  </CardBody>
                  <CardBody>
                   <p>Notarize and understand what you can do for your customer.</p>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                  <Link to={"/modules"} className={classes.link}>
                    <Button simple color="primary" size="lg">
                      Get started
                    </Button>
                </Link>
                  </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
   </div>
  );
}
