import React, { useEffect,useState,useContext } from 'react';
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

//import contexts here
import {topicContext} from '../../context/topiccontext'
import {subTopicContext} from '../../context/subtopiccontext'

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

const SubTopics = () => {
    const [hasError, setErrors] = useState(false);
    const [planets, setPlanets] = useState({});
    const {topicId, setTopicId} = useContext(topicContext)
    const {subtopicId, setsubTopicId} = useContext(subTopicContext)
  
    async function fetchData() {
      const settings = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
        }
    };
      const res = await fetch(`${process.env.REACT_APP_API_URL}/modules/subtopics/`,settings);
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
  const dashboardRoutes = [];
  const [progress1] = React.useState(100);
  const [progress2] = React.useState(10);

  // const [subtopicID, setsubtopicID] = useState();

  const history = useHistory();
  
  function to_modules(subtopicID) {
    console.log(subtopicID);
    setTopicId(subtopicID);
    history.push('/content');
  }

  const to_module = () => history.push('/topic_list');
  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
        <div className={classes.container}>
          <GridContainer justify="left" width="60%">
        
          <GridItem xs={12} sm={12} md={12} style={{fontFamily:"Montserrat"}}>
            <Card plain>
            <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
            <h3 style={{fontFamily:"Montserrat",fontWeight:"600"}}><b>Welcome to Market Segmentation!</b></h3>
            <h4 style={{fontFamily:"Montserrat",fontWeight: "600"}}>
                  
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
                    style={{fontFamily:"Montserrat",fontWeight:"600"}}
                  >
                    <b>Read More...</b>
                  </Link>
                  <br/><br/>
              </GridItem>
            </Card>
          </GridItem>
          
            <GridItem xs={12} sm={12} md={12} style={{display:"flex"}}>

            {Object.values(planets).map((postData) => {
            if(postData.topic===topicId){
              return(
                <Card xs={4} sm={4} md={4} onClick={() => to_modules(postData.subtopic_id)}
                  key={postData.subtopic_id}
                  style={{position: "relative",marginRight:"3px", 
                  border: "2px solid purple",fontFamily: 'Montserrat',fontWeight:"600"}}
                  color="primary" className={classes[cardAnimaton]}
                >

                  <div style={{color:"#ff9933",textAlign:"right"}}>
                    <p><b>{postData.subtopic_number}{' '}</b></p>
                  </div>

                  <div style={{paddingLeft:"16px"}}>
                    <p><b>{postData.subtopic_name}</b></p>
                  </div>

                  <br/><br/>
                    <div style={{backgroundColor:"white",color:"#ff9933",width:"100%",position: "absolute",borderRadius: "25px",bottom: "0",paddingLeft:"20px",display:"flex"}} >
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
  //  </div>
  );
}
export default SubTopics;
