import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
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
      {/* <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      > */}

      <div className={classes.container}>
        <GridContainer style={{fontFamily:"Montserrat"}} width="100%">
          <br></br>
          <GridItem
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%"
            }}
          >
            <h3 style={{ color: "black",fontFamily:"Montserrat" }}><b>Market Segmentation</b></h3></GridItem>
          <GridItem xs={12} sm={12} md={11} className={classes[cardAnimaton]}>

            <div className={classes.root} style={{ color: "black", fontSize: "10px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%"
                }}
              >
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=Gj2lyU10Y84"
                />
              </div>
              <br></br>
              <Typography style={{fontFamily:"Montserrat"}} fontSize="12">
                Market segmentation is the process of dividing  your target market into
                approachable groups. These subsets can be categorized according to primary
                factors such as demographics, priorities, needs, common interests and behaviour.
                Market segmentation is the first and one of the most vital steps towards identifying
                the single most important and necessary condition for a business; paying customers.
                We shall begin by looking into and understanding different market types.
                      <br></br>
                <br></br>
                <a style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }} href="https://blog.alexa.com/types-of-market-segmentation/">
                  <b>Further Content</b>
                </a>
              </Typography>
            </div>
            <Link to="/module1_item" className={classes.link}>
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
