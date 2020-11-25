import React, { useState, useEffect, useContext } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { faPlay} from "@fortawesome/free-solid-svg-icons";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import team1 from "assets/img/twixy.jpg";
import team2 from "assets/img/marketseg.png";
import team3 from "assets/img/customer.png";
import team4 from "assets/img/value.png";

import idea from "assets/img/idea.png";
import market from "assets/img/market.png";
import research from "assets/img/pic.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";

//import contexts here
import {moduleContext} from '../../context/modulecontext'
import {topicContext} from '../../context/topiccontext'

import { useHistory } from "react-router-dom";

const useStyles = makeStyles(styles);

const Topics = () => {
    const [hasError, setErrors] = useState(false);
    const [planets, setPlanets] = useState({});
    const {moduleId, setModuleId} = useContext(moduleContext)
    const {topicId, setTopicId} = useContext(topicContext)

    async function fetchData() {
      const settings = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
        }
    };
      const res = await fetch(`${process.env.REACT_APP_API_URL}/modules/topics/`,settings);
      res
        .json()
        .then(res => setPlanets(res))
        .catch(err => setErrors(err));
    }
  
    useEffect(() => {
      fetchData() ;
    },[])

    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const history = useHistory();

  function to_modules(myTopicID) {
    console.log("topic selected topic page",myTopicID);
    setTopicId(myTopicID);
    history.push('/subtopic_list');
  }

  const to_module = () => history.push('/modules_list');
  
   return (
    <div> 
     <div>
       <div className={classes.container}>
         <GridContainer justify="left">
            <GridItem style={{color:"black",textAlign:"center",fontFamily:"Montserrat"}} xs={12} sm={12} md={12}>
                <br/>
              <h4 style={{fontFamily:"Montserrat",fontWeight:"600"}}><b>
                 Welcome to Market Research. Get to engage and find out your target customer.
                 You will go through the following three sections
              </b></h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} style={{display:"flex"}}>
            
            {Object.values(planets).map((postData) => {
              if(postData.module===moduleId){
                
                return(
                    <Card xs={4} sm={4} md={3} onClick={() => to_modules(postData.topic_id)}
                        key={postData.topic_id}
                        style = {{position: "relative",marginRight:"3px",
                                border: "2px solid purple",
                                fontFamily: 'Montserrat',
                                fontWeight:"600"}} 
                        color="primary" className={classes[cardAnimaton]}
                    >
                        <div style={{color:"#ff9933",textAlign:"right"}}>
                        <p><b>{postData.topic_number}{' '}</b></p>
                        </div>
                        <div style={{paddingLeft:"10px"}}>
                            <p><b>{postData.topic_name}</b></p>
                        </div>
                        <br/><br/>
                        <div 
                          style={{backgroundColor:"white",color:"#ff9933",
                                 width:"100%",position: "absolute",
                                 borderRadius: "25px",bottom: "0",
                                 paddingLeft:"20px",display:"flex"
                                }} 
                        >
                            <div><b>3 Steps{'  '}</b><FontAwesomeIcon icon={faPlay}/></div>
                        </div>
                    </Card> 
              );
              }
            })}
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
 </div>
  );
}
export default Topics;
