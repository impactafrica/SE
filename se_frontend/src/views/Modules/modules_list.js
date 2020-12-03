import React, { useState, useEffect,useContext } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';  

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
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

import image from "assets/img/bg7.jpg";
import idea from "assets/img/brain.png";
import market from "assets/img/marketseg.png";
import mvp from "assets/img/stats.png";
import customer from "assets/img/customer.png";

//We will import our contexts here
import {moduleContext} from '../../context/modulecontext'

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
  value: PropTypes.number.isRequired,
};

const Modules = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});
  const {moduleId, setModuleId} = useContext(moduleContext);
  const {moduleName, setModuleName} = useContext(moduleContext);
  const {moduleNumber, setModuleNumber} = useContext(moduleContext);
  const {moduleDescription, setmoduleDescription} = useContext(moduleContext);

  async function fetchData() {
    const settings = {
      headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
      }
  };
    const res = await fetch(`${process.env.REACT_APP_API_URL}/modules/modules/`,settings);
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }
  
  const to_home = () => history.push('/');
  const to_projects = () => history.push('/current-project');

  function to_modules(myModuleID,myModuleName,myModuleDescription) {
    console.log("module selected module page",myModuleDescription);
    setModuleId(myModuleID);
    setModuleName(myModuleName);
    setmoduleDescription(myModuleDescription);
    history.push('/topic_list');
  }

  useEffect(() => {
    fetchData() ;
  },[])

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const dashboardRoutes = [];
  const [progress1] = React.useState(100);
  const [progress2] = React.useState(10);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  
  return (
    <div> 
      <div>
        <div className={classes.container}>
          <GridContainer justify="left">
            <GridItem xs={12} sm={12} md={12}>
              <Breadcrumbs separator="›" aria-label="breadcrumb" 
                style={{fontSize:"15px",color:"purple"}}>
                
                <p
                    style={{color:"#3d3d3d",fontFamily:"Montserrat",paddingTop:"6px"}}
                  >
                    <b>Modules</b>
                  </p>
              </Breadcrumbs>
            </GridItem>
            <br/>
            <br/>
            <hr style={{width:"100%",height:"5px"}}/>
            <br/>
            
            <GridItem style={{color:"black",textAlign:"center",fontFamily:"Montserrat"}} xs={12} sm={12} md={12}>
              {/* <h3 style={{fontFamily:"Montserrat",fontWeight:"600"}}><b>SE Modules</b></h3> */}
              <h4 style={{fontFamily:"Montserrat",fontWeight:"400"}}>Welcome to the modules! We will undergo one module at a time</h4>
            </GridItem>

            {Object.values(planets).map((postData) => {

              return(
              <GridItem xs={12} sm={12} md={4} key={postData.module_id}>
                <Card style={{background:"white"}} 
                  onClick={() => to_modules(postData.module_id,postData.module_name,postData.module_description)}
                  key={postData.subtopic_id}
                  className={classes[cardAnimaton]}
                >
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
                          {/* <img src= {postData.image} width="50%" style={{paddingTop:"15px"}} alt="ideation"/> */}
                      </div>
                      <h5 style={{fontFamily:"Montserrat",fontWeight:"600"}}>
                        <b>{postData.module_name}</b>
                      <br/><LinearProgress /></h5>
                    </div>
                    <br></br>
                    
                  </CardBody>                  
                </Card>
            </GridItem>);
            })}
           
          </GridContainer>
        </div>
      </div>
   </div>
  );
}
export default Modules;
