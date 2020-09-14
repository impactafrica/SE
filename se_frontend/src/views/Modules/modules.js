import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
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
import CustomInput from "components/CustomInput/CustomInput.js";
import { Link } from "react-router-dom";


import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import idea from "assets/img/idea.png";
import market from "assets/img/market.png";
import mvp from "assets/img/mvp.png";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const dashboardRoutes = [];

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
                   <p>We will first identify your reasons for starting this venture. </p>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
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
                    <h3>3. MVP Development</h3>
                  </CardHeader>
                  <CardBody>
                  <img src={mvp} height="50px" justify="center" alt="ideation"/>
                  </CardBody>
                  <CardBody>
                   <p>We will first identify your reasons for starting this venture. </p>
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
                   <p>We will first identify your reasons for starting this venture. </p>
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
        <Footer whiteFont />
      </div>
    // </div>
  );
}