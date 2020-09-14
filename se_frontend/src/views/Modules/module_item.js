import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import Radio from "@material-ui/core/Radio";
import ProgressBar from 'react-bootstrap/ProgressBar'

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

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
import Accordion from "components/Accordion/Module1_Accordion.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import LinearProgress from "components/CustomLinearProgress/LinearProgressBar";
import Quetabs from "components/CustomTabs/questiontabs";
import Que1 from "../Questionaire/que1";
import { Link } from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import Carousel from "react-slick";
// @material-ui/core components
import Check from "@material-ui/icons/Check";

// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components

import image from "assets/img/bg7.jpg";
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import { purple } from "@material-ui/core/colors";

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
    const now = 60;

    // create dictionary of questions and their recaps
    const brain = "Brainstorm with your team about every possible market type and segment. Keep in mind that a market segment is a grouping of potential customers who share similar characteristics, needs and/or interests"
    

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
                    <b><h2>Market Research</h2></b>
                  </CardBody>
                  <CardBody>
                    <Accordion/>        
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
            <Card carousel className={classes[cardAnimaton]}>
            <GridItem xs={12} sm={12} md={12}>
            <CardBody justify="center">
              <b><h2>Your exercise</h2></b>
            </CardBody>
              <br></br>

              <Quetabs/>
                        
              {/* <CustomTabs
                headerColor="primary"
                style={{backgroundColor:"black"}}
                tabs={[
                  {
                    tabName: "Recap",
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
                        Brainstorm with your team about every possible market type and segment. 
                        Keep in mind that a market segment is a grouping of potential customers 
                        who share similar characteristics, needs and/or interests
                      </p>
                    )
                  },
                  {
                    tabName: "Questions",
                    tabIcon: Chat,
                    tabContent: (
                    <Carousel {...settings} >
                        <div >
                            <h3><b>1/8</b></h3>
                            <p style={{color:"black",justify:"center"}}>
                            List 8 possible market segments. 
                            Keep in mind that a market segment is 
                            a grouping of potential customers who share similar characteristics, needs and/or interests. 
                            </p>
                            <textarea style={{height:80,width:270}}/>
                            <br></br>
                            <Button color="primary">
                                Next
                            </Button>
                        </div>
                        <div >
                        <h3><b>2/8</b></h3>
                            <p style={{color:"black",justify:"center"}}>
                            Purchasing power of the target group: Is the customer well funded? If not,
                             then the market is not as attractive. 
                            </p>
                            <GridItem xs={12} sm={6} md={4} lg={3}>
                            <div
                              className={
                                classes.checkboxAndRadio +
                                " " +
                                classes.checkboxAndRadioHorizontal
                              }
                            >
                            <FormControlLabel
                              control={
                                <Radio
                                  checked={selectedEnabled === "a"}
                                  onChange={() => setSelectedEnabled("a")}
                                  value="a"
                                  name="radio button enabled"
                                  aria-label="A"
                                  icon={
                                    <FiberManualRecord className={classes.radioUnchecked} />
                                  }
                                  checkedIcon={
                                    <FiberManualRecord className={classes.radioChecked} />
                                  }
                                  classes={{
                                    checked: classes.radio,
                                    root: classes.radioRoot
                                  }}
                                />
                              }
                              classes={{
                                label: classes.label,
                                root: classes.labelRoot
                              }}
                              label="Yes"
                            />
                              </div>
                              <div
                                className={
                                  classes.checkboxAndRadio +
                                  " " +
                                  classes.checkboxAndRadioHorizontal
                                }
                              >
                                <FormControlLabel
                                  control={
                                    <Radio
                                      checked={selectedEnabled === "b"}
                                      onChange={() => setSelectedEnabled("b")}
                                      value="b"
                                      name="radio button enabled"
                                      aria-label="B"
                                      icon={
                                        <FiberManualRecord className={classes.radioUnchecked} />
                                      }
                                      checkedIcon={
                                        <FiberManualRecord className={classes.radioChecked} />
                                      }
                                      classes={{
                                        checked: classes.radio,
                                        root: classes.radioRoot
                                      }}
                                    />
                                  }
                                  classes={{
                                    label: classes.label,
                                    root: classes.labelRoot
                                  }}
                                  label="No"
                                />
                              </div>
                            </GridItem>
                            
                            <br></br>
                            <Button color="primary">
                                Next
                            </Button>
                        </div>
                        <div>
                            <div className="slick-caption">
                            <h4>
                                Yellowstone National Park, United States
                            </h4>
                            </div>
                        </div>
                        
                        </Carousel>
                        
                    )
                  }
                ]}
              /> */}
            </GridItem>
              
            </Card>
          </GridItem>
        </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    // </div>
  );
}
