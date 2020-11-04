import React, { useEffect } from 'react';
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
import LinearProgress from "components/CustomLinearProgress/LinearProgressBar";
import Research from "components/CustomLinearProgress/MarketResearchProgressBar";
import MVP from "components/CustomLinearProgress/MVPProgressBar";

import CircularProgress from '@material-ui/core/CircularProgress';
import styles from "assets/jss/material-kit-react/views/loginPage.js";


import { useHistory } from "react-router-dom";

import image from "assets/img/bg7.jpg";
import idea from "assets/img/brain.png";
import market from "assets/img/marketseg.png";
import mvp from "assets/img/stats.png";
import customer from "assets/img/customer.png";

const useStyles = makeStyles(styles);

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" {...props} />
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
  const history = useHistory();
  const to_modules = () => history.push('/module1');

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <Header
        absolute
        color="primary"
        href="/"
        brand="Systematic Entrepreneurship"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        // className={classes.pageHeader}
        // style={{
        //   backgroundImage: "url(" + image + ")",
        //   backgroundSize: "cover",
        //   backgroundPosition: "top center"
        // }}
      >
        <div className={classes.container}>
          <GridContainer justify="left">
            <GridItem style={{color:"black",textAlign:"center",fontFamily:"Montserrat"}} xs={12} sm={12} md={12}>
              <h3 style={{fontFamily:"Montserrat",fontWeight:"600"}}><b>My project: Done!</b></h3>
              <h4 style={{fontFamily:"Montserrat",fontWeight:"400"}}>Welcome to the modules! We will undergo one module at a time</h4>
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
              <Card style={{background:"white"}} className={classes[cardAnimaton]}>
                  <CardBody>
                    <div style={{display:"flex"}}>
                      <div 
                          style={{width: "70px",
                                  height: "70px",
                                  borderRadius: "50%",
                                  alignItems:"center",
                                  display:"table-cell",
                                  verticalAlign:"middle",
                                  marginRight:"3px",
                                  textAlign:"center",
                                  background: "purple"}}
                      >
                          <img src={idea} width="50%" style={{paddingTop:"15px"}} alt="ideation"/>
                      </div>
                      <h5 style={{fontFamily:"Montserrat",fontWeight:"600"}}><b>IDEATION AND FORMATION </b><br/><LinearProgress /></h5>
                    </div>
                    <br></br>
                    
                  </CardBody>                  
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
              <Card color="primary" onClick={to_modules} className={classes[cardAnimaton]}>
                  <CardBody>
                    <div style={{display:"flex"}}>
                    <div 
                          style={{width: "70px",
                                  height: "70px",
                                  borderRadius: "50%",
                                  alignItems:"center",
                                  display:"table-cell",
                                  verticalAlign:"middle",
                                  textAlign:"center",
                                  marginRight:"3px",
                                  background: "purple"}}
                      >
                          <img src={market} width="50%" style={{paddingTop:"15px"}} alt="ideation"/>
                      </div>
                      <div style={{fontFamily:"Montserrat",display:"flex"}} >
                        <h5 style={{fontFamily:"Montserrat",fontWeight:"600"}}><b>MARKET RESEARCH</b><br/>
                        <div style={{fontFamily:"Montserrat",display:"flex"}} >
                          <Research style={{marginRight:"150px"}}/>
                        <button onClick={to_modules} align="right" style={{backgroundColor:"white",color:"#FF931E",borderRadius:"10px",border:"1px solid gray"}}><b>Continue</b></button>
                        </div> 
                          <br/>
                        </h5>
                        
                      </div>
                     
                      
                    </div>
                    <br></br>
                   
                  </CardBody>                  
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
              <Card style={{background:"white"}} className={classes[cardAnimaton]}>
                  <CardBody>
                    <div style={{display:"flex"}}>
                    <div 
                          style={{width: "70px",
                                  height: "70px",
                                  borderRadius: "50%",
                                  alignItems:"center",
                                  display:"table-cell",
                                  verticalAlign:"middle",
                                  textAlign:"center",
                                  color:"light gray",
                                  background: "purple"}}
                      >
                          <img src={mvp} width="50%" style={{paddingTop:"15px"}} alt="ideation"/>
                      </div>
                      <h5 style={{color:"gray",fontFamily:"Montserrat",fontWeight:"600"}}><b>MVP DEVELOPMENT</b><br/><MVP /></h5>
                    </div>
                    <br></br>
                    
                  </CardBody>                  
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={4}>
              <Card style={{background:"white"}} className={classes[cardAnimaton]}>
                  <CardBody>
                    <div style={{display:"flex"}}>
                    <div 
                          style={{width: "70px",
                                  height: "70px",
                                  borderRadius: "50%",
                                  alignItems:"center",
                                  display:"table-cell",
                                  verticalAlign:"middle",
                                  textAlign:"center",
                                  background: "purple"}}
                      >
                          <img src={customer} width="50%" style={{paddingTop:"15px"}} alt="ideation"/>
                      </div>
                      <h5 style={{color:"gray",fontFamily:"Montserrat",fontWeight:"600"}}><b>CUSTOMER VALUE PROPOSITION</b><br/><MVP /></h5>
                    </div>
                    <br></br>
                    
                  </CardBody>                  
              </Card>
            </GridItem>

            
          </GridContainer>
        </div>
      </div>
   </div>
  );
}
