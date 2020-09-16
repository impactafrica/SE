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
import SegmentingAccordion from "../../views/Modules/Accordions/Segmentation/main_seg";
import BrainstormingAccordion from "../../views/Modules/Accordions/Segmentation/mkttypes_brainstroming_accordion";
import NarrowingAccordion from "../../views/Modules/Accordions/Segmentation/narrowing_accordion";
import ResearchAccordion from "../../views/Modules/Accordions/Segmentation/mktresearch_accordion";
import ConclusionAccordion from "../../views/Modules/Accordions/Segmentation/conclusion_accordion";
import LinearProgress from "components/CustomLinearProgress/LinearProgressBar";
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
        <div className={classes.container}>
          <GridContainer width="90%">

          <GridItem className={classes[cardAnimaton]}><h3 style={{color:"black"}}><b>Module 2: Market Research</b></h3></GridItem>
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
          <GridItem className={classes[cardAnimaton]}><h3 style={{color:"black"}}><b>a. Market Segmentation</b></h3></GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardBody>
                    <h5>
                    Market segmentation is the process of dividing  your target market into approachable groups. 
                    These subsets can be categorized according to primary factors such as demographics, priorities, 
                    needs, common interests and behaviour. 
                    <Link
                      color="primary"
                      to={"/segmenting"}
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
                    <BrainstormingAccordion/>        
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardBody justify="center">
                  </CardBody>
                  <CardBody>
                    <NarrowingAccordion/>        
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardBody justify="center">
                  </CardBody>
                  <CardBody>
                    <ResearchAccordion/>        
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardBody justify="center">
                  </CardBody>
                  <CardBody>
                    <ConclusionAccordion/>        
                </CardBody>
              </Card>
            </GridItem>
            <Link to="beachhead_item">
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
        <Footer whiteFont />
      </div>
    // </div>
  );
}
