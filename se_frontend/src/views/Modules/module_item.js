import React from "react";
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
import Accordion from "../../views/Modules/Accordions/segmentation_accordion";
import BeachHeadAccordion from "../../views/Modules/Accordions/beachhead_accordion";
import PersonaAccordion from "../../views/Modules/Accordions/persona_accordion";
import LinearProgress from "components/CustomLinearProgress/LinearProgressBar";

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
  const [anchorElLeft, setAnchorElLeft] = React.useState(null);
  const [anchorElTop, setAnchorElTop] = React.useState(null);
  const [anchorElBottom, setAnchorElBottom] = React.useState(null);
  const [anchorElRight, setAnchorElRight] = React.useState(null);
  const [classicModal, setClassicModal] = React.useState(false);
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);

  const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        nextIcon: <Button color="primary">Next</Button>,
        prevIcon: <Button>Previous</Button>     
    };
    const handleToggle = value => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
      };    

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
          <GridItem><h1 style={{color:"black"}}>Market Research</h1></GridItem>
          <GridItem xs={12} sm={12} md={11} className={classes[cardAnimaton]}>
              <div className={classes.title}>
                <h3 style={{color:"black"}}>Your Progress</h3>
              </div>
              <div className={classes.root}>
                <LinearProgress />
              </div>
            </GridItem>
            
            <GridItem xs={12} sm={12} md={12}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardBody justify="center">
                    <b><h2>Market Segmentation</h2></b>
                  </CardBody>
                  <CardBody>
                    <div>
                      
                    </div>
                    <Accordion/>        
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardBody justify="center">
                    <b><h2>Beachhead Market</h2></b>
                  </CardBody>
                  <CardBody>
                    <BeachHeadAccordion/>        
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardBody justify="center">
                    <b><h2>Buyer Persona</h2></b>
                  </CardBody>
                  <CardBody>
                    <PersonaAccordion/>        
                </CardBody>
              </Card>
            </GridItem>

          </GridContainer>
          <GridContainer>
          
        </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    // </div>
  );
}
