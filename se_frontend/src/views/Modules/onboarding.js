import React,{useEffect} from "react";
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
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import idea from "assets/img/idea.png";
import arrow from "assets/img/right.png";
import read from "assets/img/read.png";
import logo from "assets/img/se_logo.png";
import report from "assets/img/report.png";

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
  
  useEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div>
      
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
        <Card color="primary" className={classes[cardAnimaton]}>
          <div style={{textAlign:"center",fontFamily:"Montserrat",fontWeight:"600"}} >
          {/* <img src={logo} style={{marginRight:"auto",marginLeft:"auto",width:"50%",display:"block"}} justify="center" alt="ideation"/> */}
          <br></br>
          <h3 style={{fontFamily:"Montserrat",fontWeight:"600"}}><b>Welcome to SE! We will help you start, execute and launch your project</b></h3>
          <h4 style={{fontFamily:"Montserrat",fontWeight:"600"}}>Here are the steps will you will undertake:</h4>
          <br></br>
          <br></br>
          </div>
          
          <GridContainer style={{paddingLeft:"10px",paddingRight:"10px"}} justify="left">
          <GridItem xs={12} sm={12} md={4}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                  <img src={read} height="80px" justify="center" alt="ideation"/>
                  {'   '}
                  {/* <img src={arrow} height="50px" style={{float:"right"}} alt="ideation"/> */}
                  </CardHeader>
                  <CardBody>
                    <div style={{backgroundColor:"purple",width:"100%"}}>
                    </div>
                  <h3 style={{fontFamily:"Montserrat",fontWeight:"600"}}><b>1. Read the content </b></h3>
                  </CardBody>
                  <CardBody>
                   <p style={{fontFamily:"Montserrat",fontWeight:"400"}}>You will take a few minutes to read about a concept about entrepreneurship </p>
                  </CardBody>
                  </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <img src={idea} height="80px"  alt="ideation"/>
                  </CardHeader>
                  <CardBody justify="center">
                    <h3 style={{fontFamily:"Montserrat",fontWeight:"600"}}><b>2. Take the assessment </b></h3>
                  </CardBody>
                  <CardBody>
                    <p style={{fontFamily:"Montserrat",fontWeight:"400"}}>Spend a short time answering the given questions about your project </p>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                  </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                  <img src={report} height="80px" justify="center" alt="ideation"/>

                  </CardHeader>
                  <CardBody>
                    <h3  style={{fontFamily:"Montserrat",fontWeight:"600"}}><b>3. Get your report</b></h3>
                  </CardBody>
                  <CardBody>
                   <p style={{fontFamily:"Montserrat",fontWeight:"400"}}>You will receive a personalized report per module to see how you are doing so far</p>
                  </CardBody>
              </Card>
            </GridItem>
            <div style={{margin:"auto",display:"block",paddingBottom:"10px"}} >
              <Link to={"/startup_register"} className={classes.link}>
                <Button  style={{fontFamily:"Montserrat",fontWeight:"600"}} color="primary">Register your project</Button>
              </Link>
            </div>
          </GridContainer>
          </Card>
        </div>
      </div>
   </div>
  );
}
