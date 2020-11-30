import React,{useEffect,useState,useContext} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/DashboardHeader";
import HeaderLinks from "components/Header/DashboardHeaderLinks";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import DOMPurify from 'dompurify';
import NavPills from "components/NavPills/NavPills.js";

import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
//import contexts here
import {subTopicContext} from '../../context/subtopiccontext'
import classNames from "classnames";


import Book from "@material-ui/icons/Book";
import Question from "@material-ui/icons/QuestionAnswer";
import { Fragment } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Favorite from "@material-ui/icons/Favorite";
import { Tabs, Tab } from 'react-bootstrap';

import TextField from '@material-ui/core/TextField';

import { Link } from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

const useStyles = makeStyles(styles);

const Content = (props) => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});
  const [questions, setQuestions] = useState({});
  const [index, setIndex] = useState(0);
  const {subtopicId, setsubTopicId} = useContext(subTopicContext)
  const [currentTab, setCurrentTab] = useState(0);

  function handleTabs(key){
    setCurrentTab(key);
  }

  async function fetchData() {
    const settings = {
      headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
      }
  };
    const res = await fetch(`${process.env.REACT_APP_API_URL}/modules/content/`,settings);
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }
  const { ...rest } = props;
  useEffect(() => {
    fetchData() ;
  },[])

  //fetch our questions
  async function fetchQueData() {
    const settings = {
      headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
      }
  };
    const res = await fetch(`${process.env.REACT_APP_API_URL}/modules/questions/`,settings);
    res
      .json()
      .then(res => setQuestions(res))
      .catch(err => setErrors(err));
  }
  useEffect(() => {
    fetchQueData() ;
  },[])

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const dashboardRoutes = [];
  const history = useHistory();
  const to_modules = () => history.push('/questions');
  const to_module = () => history.push('/subtopic_list');
  useEffect(() => {
    window.scrollTo(0, 0)
  });
  const [value, setValue] = React.useState('yes');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);


  return (
    <div>
        <div className={classes.container}>
          {/* <GridContainer width="90%"> */}
            
          <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} >
                <NavPills
                  
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      // tabButton: "Studio",
                      tabIcon: Book,
                      tabContent: (
                        <GridContainer justify="center">
                          {Object.values(planets).map((postData) => {

                          const sanitizer = DOMPurify.sanitize;
                          if(postData.subtopic===subtopicId){
                          return(
                          <GridItem xs={12} sm={12} md={12}>
                            <GridItem className={classes[cardAnimaton]}>
                              <h3 style={{color:"black",fontFamily:"Montserrat",fontWeight:"600"}}>
                                <b>{postData.title_text}</b>
                              </h3>
                            </GridItem>

                            <GridItem xs={12} sm={12} md={12}>
                              <Card color="primary" className={classes[cardAnimaton]}>
                                  <CardBody>
                                    <h5 style={{fontFamily:"Montserrat",fontWeight:"600"}}>
                                    {postData.title_intro}
                                    </h5>
                                </CardBody>
                              </Card>
                            </GridItem>

                          <GridItem xs={12} sm={12} md={12} >
                            <Card style={{backgroundColor:"black",borderRadius:"25px",color:"white",fontFamily:"Montserrat"}} className={classes[cardAnimaton]}>
                                <CardBody style={{}}>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center"
                                    }}
                                  >
                                    <ReactPlayer
                                      url={postData.media_section}
                                    />
                                  </div>
                                  <br></br>
                                </CardBody>
                            </Card>
                          </GridItem>
            
            
                            {/* #9A32CD  */}
                            <GridItem xs={12} sm={12} md={12}>
                              <Card style={{}} color="primary" className={classes[cardAnimaton]}>
                                  <CardBody>
                                    <h5 style={{fontFamily:"Montserrat",fontWeight:"600",color:"black"}}
                                      dangerouslySetInnerHTML={{__html: sanitizer(postData.content_section)}}
                                    >
                                    </h5>
                                  </CardBody>
                              </Card>
                            </GridItem>

                            <GridItem xs={12} sm={12} md={12} >
                              <div style={{  }}>
                                <Button style={{float: "right"}} onClick={to_modules} color="primary">
                                  Next
                                </Button>

                                <Button 
                                  onClick={to_module}
                                  color="primary"
                                  style={{float: "left"}}
                                  >
                                  Back
                                </Button>
                              </div>
                              </GridItem>
                          </GridItem>
                          );}})}
                        </GridContainer>
                      )
                    },
                    {
                      // tabButton: "Work",
                      tabIcon: Question,
                      tabContent: (
                        <GridContainer justify="center">
                          { Object.values(questions).map((queData) => {
                          const question = JSON.parse(queData.question)

                          if(queData.subtopic===subtopicId){
                          const open_ended = (

                            <Card color="primary" className={classes[cardAnimaton]}>
                              <TextField
                                id="outlined-multiline-static"
                                label="Separate your answers with a comma"
                                multiline
                                // value={answer_string}
                                rows={5}
                                variant="outlined"
                              />
                            </Card>
                          );

                          const multiple_choice = (
                            <GridItem xs={12} sm={12} md={12}>
                              <Card color="primary" className={classes[cardAnimaton]}>
                                <FormControl style={{paddingLeft:"5px"}} component="fieldset">
                                  <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                    <FormControlLabel value="yes" style={{color:"black"}} control={<Radio />} label={question.Option1} />
                                    <FormControlLabel value="no" style={{color:"black"}} control={<Radio />} label={question.Option2} />
                                  </RadioGroup>
                                </FormControl>
                              </Card>
                            </GridItem>
                          );

                         
                          return(
                          <GridItem xs={12} sm={12} md={12}>

                            <GridItem className={classes[cardAnimaton]} style={{fontFamily:"Montserrat"}}>
                              <h3 style={{color:"black",fontFamily:"Montserrat",fontWeight:"600"}}><b>{queData.content}</b></h3>
                              <h5 style={{color:"black",fontFamily:"Montserrat",fontWeight:"400"}}><b>{question.Question}</b></h5> 
                            </GridItem>

                          <GridItem xs={12} sm={12} md={12}>
                            <form>
                              {<Fragment>{ queData.question_type === 2? multiple_choice : open_ended }</Fragment> }
                              
                            
                            </form>
                          </GridItem>
                          </GridItem>

                        );}})}
                        </GridContainer>
                      )
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
            
      </div>
    </div>
  );
}

export default Content;
