import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Typography from '@material-ui/core/Typography';
import Button from "components/CustomButtons/Button.js";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


import styles from "assets/jss/material-kit-react/views/loginPage.js";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";


const useStyles = makeStyles(styles);

export default function Module_Item(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
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

      <div className={classes.container}>
        <GridContainer width="70%">
          <GridItem><h2 style={{ color: "black" }}><b>Brainstorming</b></h2></GridItem>
          <GridItem xs={12} sm={12} md={11} className={classes[cardAnimaton]}>

            <div className={classes.root} style={{ color: "black", fontSize: "10px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=JyYoXu0cJwA"
                />
              </div>

              <br></br>
              <Typography fontSize="12">
                At this point, you are allowed to dream. Think about every possible customer type that
                may need your product. Nothing is off limits, however much of a longshot it may seem, be
                sure to note it down. Be open minded and creative and so not shy away from speaking about
                your idea to potential customers. This allows you to see your product from the customer's perspective.
                  <br></br>
                <br></br>


                <br></br>
                    Some activities you can undertake during this step are:

                    Brainstorm with your team about every possible market type (b2b, b2c, b2b2c, b2b & b2c) and segment
                    these customers based on the following parameters (and as many others as you deem necessary:  Geography,
                     Income, Industry and Gender, Profession.

                      <br></br>
                <br></br>
              </Typography>
            </div>
            <Link to="/module_item" className={classes.link}>
              <Button color="primary" size="lg">
                <ArrowBackIcon /> Back
                </Button>
            </Link>
          </GridItem>
        </GridContainer>

      </div>
    </div>
    // </div>
  );
}
