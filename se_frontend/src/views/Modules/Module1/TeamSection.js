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
          <GridItem style={{paddingTop:"20px"}}xs={12} sm={12} md={12}>
              <Button 
                onClick={to_module}
                style = {{backgroundColor:"purple"}}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </Button>
            </GridItem>

          {/* <GridItem xs={12} sm={12} md={12}>
            <Card plain>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <br/>
                <img src={research} style={{width:"100%"}}/>
              </GridItem>
            </Card>
          </GridItem> */}

        <GridItem xs={12} sm={12} md={12}>
            <Card plain>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <br/>
            <h4 style={{fontFamily:"Montserrat"}} className={classes.cardTitle}>
                Welcome to Market Research. Get to engage and find out your target customer.
                 You will go through the following three sections
                <br/>
              </h4>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card onClick={to_modules} color="primary" plain>
            <GridItem xs={12} sm={12} md={6}  className={classes.itemGrid}>
            <Button color="primary" style={{borderRadius:"50%",width:"160px",height:"160px",fontFamily:"Montserrat"}}>
              Market Segmentation
            </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card color="primary" plain>
            <GridItem xs={12} sm={12} md={6}  className={classes.itemGrid}>
            <Button color="gray" style={{borderRadius:"50%",width:"150px",height:"150px",fontFamily:"Montserrat"}}>
              Beachhead Market
            </Button>
              </GridItem>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card color="primary" plain>
            <GridItem xs={12} sm={12} md={6}  className={classes.itemGrid}>
            <Button color="gray" style={{borderRadius:"50%",width:"150px",height:"150px",fontFamily:"Montserrat"}}>
              Persona
            </Button>
              </GridItem>
            </Card>
          </GridItem>

          {/* <GridItem xs={12} sm={12} md={4}>
            <Card onClick={to_modules} color="primary" plain>
            <GridItem xs={12} sm={12} md={6}  className={classes.itemGrid}>
            <Button color="white" style={{borderRadius:"60%"}}>
              <img src={team3} alt="..." style={{height:"50px"}} />
            </Button>
                <h4>Persona</h4>
              </GridItem>
            </Card>
          </GridItem> */}
          
          {/* <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={4} className={classes.itemGrid}>
                <img src={team4} style={{backgroundColor:"purple"}} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Beachhead Market
                <br />
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={4} className={classes.itemGrid}>
                <img src={team3} style={{backgroundColor:"purple"}} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Persona
                <br />
              </h4>
              
            </Card>
          </GridItem> */}
          
          
        </GridContainer>
      </div>
    </div>
  );
}
