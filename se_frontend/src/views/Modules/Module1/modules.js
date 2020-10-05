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
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { faPlay} from "@fortawesome/free-solid-svg-icons";
import { faLock} from "@fortawesome/free-solid-svg-icons";

import CircularProgress from '@material-ui/core/CircularProgress';
import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import segment from "assets/img/segment.png";
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
  const history = useHistory();
  const to_modules = () => history.push('/market_types');
  const to_module = () => history.push('/module1');
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
      {/* <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      > */}
        <div className={classes.container}>
          <GridContainer justify="left" width="60%">
          <GridItem style={{paddingTop:"20px",alignItems:"center"}} xs={12} sm={12} md={12}>
              <Button 
                onClick={to_module}
                style = {{backgroundColor:"purple"}}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </Button>
            </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            <Card plain>
            <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
            <img src={segment}  width="100%" />
              </GridItem>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={12} md={12}>
            <Card plain>
            <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
            <h3><b>Welcome to Market Segmentation!</b></h3>
            <h4 className={classes.cardTitle}>
                  
                   Market segmentation is the process
                   of dividing  your target market into approachable groups. 
                  These subsets can be categorized according to primary factors 
                  such as demographics, priorities, 
                  needs, common interests and behaviour.
                <br/>
              </h4>
              <Link
                    color="primary"
                    to={"/segmenting"}
                  >
                    <b>Read More...</b>
                  </Link>
                  <br/><br/>
                  <h5><b>Let's get started</b></h5>
              </GridItem>
            </Card>
          </GridItem>
          
            <GridItem xs={6} sm={6} md={3} style={{display:"flex"}}>
              <Card onClick={to_modules} style={{position: "relative"}} color="primary" className={classes[cardAnimaton]}>
                <div style={{color:"#ff9933",textAlign:"right"}}>
                  <p><b>1/4{' '}</b></p>
                </div>
                <div style={{paddingLeft:"16px"}}>
                  <p><b>Market Types</b></p>
                </div>
                  <div style={{backgroundColor:"white",color:"#ff9933",width:"100%",position: "absolute",bottom: "0",paddingLeft:"20px",display:"flex"}} >
                    <div><b>3 Steps{'  '}</b><FontAwesomeIcon icon={faPlay}/></div>
                  </div>
              </Card>
              </GridItem>

              <GridItem xs={6} sm={6} md={3} style={{display:"flex"}}>
              <Card style={{backgroundColor:"white"}} color="primary" className={classes[cardAnimaton]}>
              <div style={{color:"gray",textAlign:"right"}}>
                  <p><b>2/4{' '}</b></p>
                </div>
                <div style={{paddingLeft:"16px",color:"gray"}}>
                  <p><b>Brainstorming</b></p>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </div>
                <div style={{backgroundColor:"white",color:"#ff9933",width:"100%",position: "absolute",bottom: "0",paddingLeft:"20px",display:"flex"}} >
                    <div><b>1 Step{'  '}</b><FontAwesomeIcon icon={faLock}/></div>
                </div>
              </Card>
              </GridItem>

              <GridItem xs={6} sm={6} md={3} style={{display:"flex"}}>
              <Card style={{backgroundColor:"white"}} color="primary" className={classes[cardAnimaton]}>
              <div style={{color:"gray",textAlign:"right"}}>
                  <p><b>3/4{' '}</b></p>
                </div>
                <div style={{paddingLeft:"16px",color:"gray"}}>
                  <p><b>Narrowing</b></p>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </div>
                <div style={{backgroundColor:"white",color:"#ff9933",width:"100%",position: "absolute",bottom: "0",paddingLeft:"20px",display:"flex"}} >
                    <div><b>3 Steps{'  '}</b><FontAwesomeIcon icon={faLock}/></div>
                </div>
              </Card>
              </GridItem>

              <GridItem xs={6} sm={6} md={3} style={{display:"flex"}}>
              <Card style={{backgroundColor:"white"}} color="primary" className={classes[cardAnimaton]}>
              <div style={{color:"gray",textAlign:"right"}}>
                  <p><b>4/4{' '}</b></p>
                </div>
                <div style={{paddingLeft:"16px",color:"gray"}}>
                  <p><b>Primary Market Research</b></p>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </div>
                <div style={{backgroundColor:"white",color:"#ff9933",width:"100%",position: "absolute",bottom: "0",paddingLeft:"20px",display:"flex"}} >
                    <div ><b>3 Steps{'  '}</b><FontAwesomeIcon icon={faLock}/></div>
                </div>
              </Card>
              </GridItem>

              
            
            {/* <GridItem xs={12} sm={12} md={3}>
              <Card style={{backgroundColor:"grey"}} color="primary" className={classes[cardAnimaton]}>
                <div style={{textAlign:"center"}}>
                  <h3><b>Narrowing</b></h3>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </div>
                <div style={{color:"#ff9933",textAlign:"center"}}>
                  <p><b>3 Questions</b> </p>
                  </div>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <Card style={{backgroundColor:"grey"}} color="primary" className={classes[cardAnimaton]}>
                <div style={{textAlign:"center"}}>
                  <h3><b>Primary Market Research</b></h3>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                 
                </div>
                <div style={{color:"#ff9933",textAlign:"center"}}>
                  <p><b>3 Questions</b> </p>
                  </div>
              </Card>
            </GridItem>
             */}
            
          </GridContainer>
        </div>
      </div>
  //  </div>
  );
}
