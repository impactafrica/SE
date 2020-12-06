import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { faPlay} from "@fortawesome/free-solid-svg-icons";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/twixy.jpg";
import team2 from "assets/img/marketseg.png";
import team3 from "assets/img/customer.png";
import team4 from "assets/img/value.png";

import idea from "assets/img/idea.png";
import market from "assets/img/market.png";
import research from "assets/img/pic.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";


import { useHistory } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const history = useHistory();
  const to_modules = () => history.push('/module1_item');
  const to_module = () => history.push('/modules_list');
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      
      <div>
        <GridContainer >
                 

        <GridItem xs={12} sm={12} md={12}>
            <Card plain>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <br/>
            
              <h4 style={{fontFamily:"Montserrat",fontWeight:"600"}}><b>
                 Welcome to Market Research. Get to engage and find out your target customer.
                 You will go through the following three sections
              </b></h4>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={12} style={{display:"flex"}}>
              <Card xs={4} sm={4} md={3} onClick={to_modules} style={{position: "relative",marginRight:"3px", border: "2px solid purple",fontFamily: 'Montserrat',fontWeight:"600"}} color="primary" className={classes[cardAnimaton]}>
                <div style={{color:"#ff9933",textAlign:"right"}}>
                  <p><b>1/3{' '}</b></p>
                </div>
                <div style={{paddingLeft:"10px"}}>
                  <p><b>Market Segmentation</b></p>
                </div>
                  <div style={{backgroundColor:"white",color:"#ff9933",width:"100%",position: "absolute",borderRadius: "25px",bottom: "0",paddingLeft:"20px",display:"flex"}} >
                    <div><b>3 Steps{'  '}</b><FontAwesomeIcon icon={faPlay}/></div>
                  </div>
              </Card>
              <Card xs={4} sm={4} md={3} style={{position: "relative",marginRight:"3px",fontFamily:"Montserrat",fontWeight:"600"}} color="primary" className={classes[cardAnimaton]}>
                <div style={{color:"#ff9933",textAlign:"right"}}>
                  <p><b>2/3{' '}</b></p>
                </div>
                
                <div style={{paddingLeft:"10px",color:"gray"}}>
                  <p><b>Beachhead Market</b></p>
                </div>
                <br/>
                  <br/><br/>
                  <div style={{backgroundColor:"white",color:"#ff9933",width:"100%",position: "absolute",borderRadius: "25px",bottom: "0",paddingLeft:"20px",display:"flex"}} >
                    <div><b>3 Steps{'  '}</b><FontAwesomeIcon icon={faPlay}/></div>
                  </div>
              </Card>
              <Card xs={3} sm={3} md={3} style={{position: "relative",marginRight:"3px",fontFamily:"Montserrat",fontWeight:"600"}} color="primary" className={classes[cardAnimaton]}>
                <div style={{color:"#ff9933",textAlign:"right"}}>
                  <p><b>3/3{' '}</b></p>
                </div>
               
                <div style={{paddingLeft:"10px",color:"gray"}}>
                  <p><b>Persona</b></p>
                </div>
                <br/>
                  <br/>
                  <div style={{backgroundColor:"white",color:"#ff9933",width:"100%",position: "absolute",borderRadius: "25px",bottom: "0",paddingLeft:"20px",display:"flex"}} >
                    <div><b>3 Steps{'  '}</b><FontAwesomeIcon icon={faPlay}/></div>
                  </div>
              </Card>
              

              </GridItem>
              <GridItem style={{paddingTop:"20px",alignItems:"center"}} xs={12} sm={12} md={12}>
              <Button 
                onClick={to_module}
                style = {{backgroundColor:"purple",borderRadius: "25px",fontFamily:"Montserrat"}}>
                Back 
              </Button>
            </GridItem>

          
          
        </GridContainer>
      </div>
    </div>
  );
}
