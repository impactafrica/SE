import React,{useEffect,useState,useContext} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
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
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { Fragment } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { Link } from "react-router-dom";
import {topicContext} from '../../context/topiccontext'
import {projectContext} from '../../context/projectcontext'
import {questionContext} from '../../context/questioncontext'


import styles from "assets/jss/material-kit-react/views/loginPage.js";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const useStyles = makeStyles(styles);

const Question = (props) => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});
  const {topicId, setTopicId} = useContext(topicContext)
  const {projectId, setprojectId} = useContext(topicContext)
  const {questionId, setQuestionId} = useContext(questionContext)

  //index position for the content and que buttons
  const [index, setIndex] = useState(0);

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

  var csrftoken = readCookie('csrftoken');

  //fetch our questions
  async function fetchData() {
    const settings = {
      headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          "X-CSRFToken": csrftoken

      }
  };
    const res = await fetch(`${process.env.REACT_APP_API_URL}/modules/questions/`,settings);
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }
  const { ...rest } = props;
  useEffect(() => {
    fetchData() ;
  },[])


  //post the answers received
  const [requestSent, setRequestSent] = useState(false);
  
  const [formData, setFormData] = useState({
      answer_string: '',
      project: '',
      question: ''
      
  });

  const { answer_string, project,question } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
      e.preventDefault();

      create_project(answer_string,project,question);
      setRequestSent(true);
  };

  const create_project = (answer_string,question, project) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const body = JSON.stringify({ answer_string,question,project }); 

    try {
        const res = axios.post(`${process.env.REACT_APP_API_URL}/modules/answers/`, body, config);
        console.log("answer received",answer_string);
       
    } catch (err) {
        
    }
};

  const [value, setValue] = React.useState('yes');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const dashboardRoutes = [];
  const history = useHistory();

  const to_content = () => history.push('/content');
  const to_intro= () => history.push('/content_one');
  const to_topics= () => history.push('/topic_list');
  const to_home = () => history.push('/');
  const to_modules = () => history.push('/modules_list');
  const to_projects = () => history.push('/current-project');

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
        <div className={classes.container}>
          <GridContainer width="90%">
          <GridItem xs={12} sm={12} md={12}>
              <Breadcrumbs separator="›" aria-label="breadcrumb" 
                style={{fontSize:"15px",paddingLeft:"10px"}}>
                <Link onClick={to_home}
                  style={{color:"purple",fontFamily:"Montserrat"}} >
                  <b>Home</b>
                </Link>
                <Link onClick={to_projects}
                  style={{color:"purple",fontFamily:"Montserrat"}} >
                  <b>Projects</b>
                </Link>
                <Link
                  style={{color:"purple",fontFamily:"Montserrat"}}
                  onClick={to_modules}
                  className={classes.link}
                >
                  
                  <b>Modules</b>
                </Link>
                <Link
                  style={{color:"purple",fontFamily:"Montserrat"}}
                  onClick={to_topics}
                  className={classes.link}
                >
                  <b>Market Research</b>
                </Link>
                
                <Link
                  style={{color:"purple",fontFamily:"Montserrat"}}
                  onClick={to_intro}
                  className={classes.link}
                >
                  <b>Market Segmentation</b>
                </Link>
                
                <p
                    style={{color:"#3d3d3d",fontSize:"15px", paddingTop:"6px",fontFamily:"Montserrat"}}
                  >
                    <b>Market Types</b>
                  </p>
              </Breadcrumbs>
            </GridItem>
            <br/>
            <br/>
            <hr style={{width:"100%",height:"5px"}}/>
            <br/>

          {/* <GridItem xs={12} sm={12} md={12}>
              <Button color="white" onClick={to_intro}>
                <FontAwesomeIcon icon={faBookReader} />
              </Button>
              <Button color="white" onClick={to_content}>
                <FontAwesomeIcon icon={faBookReader} />
              </Button>
              <Button color="primary">
                <FontAwesomeIcon icon={faQuestion} />
              </Button>
            <Button index={3} color="white">
              <FontAwesomeIcon icon={faBookReader} />
            </Button>
            <Button index={4} color="white">
              <FontAwesomeIcon icon={faQuestion} />
            </Button>
            <Button index={5} color="white">
              <FontAwesomeIcon icon={faBookReader} />
            </Button>
            <Button index={6} color="white">
              <FontAwesomeIcon icon={faQuestion} />
            </Button>
            <Button index={7} color="white">
              <FontAwesomeIcon icon={faBookReader} />
            </Button>
            <Button index={8} color="white">
              <FontAwesomeIcon icon={faQuestion} />
            </Button>
          </GridItem> */}

          
            {Object.values(planets).map((postData) => {
              const question = JSON.parse(postData.question);
              setQuestionId(postData.question_id);

              const open_ended = (
                <Card color="primary" className={classes[cardAnimaton]}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Separate your answers with a comma"
                    multiline
                    name = "answer_string"
                    value={answer_string}
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
            
            if(postData.topic===topicId){
              if(postData.question_number===1){

              
              console.log("topic fetched",topicId);
            
            return(
              
              <GridItem xs={12} sm={12} md={12}>

                <GridItem className={classes[cardAnimaton]} style={{fontFamily:"Montserrat"}}>
                  <h3 style={{color:"black",fontFamily:"Montserrat",fontWeight:"600"}}><b>{postData.content}</b></h3>
                  <h5 style={{color:"black",fontFamily:"Montserrat",fontWeight:"400"}}><b>{question.Question}</b></h5> 
                </GridItem>

                <GridItem xs={12} sm={12} md={12}>
                <form onSubmit={e => onSubmit(e)}>
                  {<Fragment>{ postData.question_type === 2? multiple_choice : open_ended }</Fragment> }
                  <div style={{  }}>
                    <Button style={{float: "right"}} type='submit' 
                      onClick={create_project(answer_string,questionId,projectId)} color="primary">
                      Submit
                    </Button>
                    <Button 
                      color="primary"
                      style={{float: "left"}}
                      >
                      Back
                    </Button>
                </div>
                </form>
                </GridItem>

            </GridItem>
          
             );
            }}
            })}
              
            {/* <GridItem>
              <div style={{  }}>
                <Button style={{float: "right"}} onClick={to_modules} color="primary">
                  Next
                </Button>
                <Button 
                  onClick={to_content}
                  color="primary"
                  style={{float: "left"}}
                  >
                  Back
                </Button>
                
                </div>
              
            </GridItem> */}

          </GridContainer>
         
        </div>
      </div>
    // </div>
  );
}
export default Question;