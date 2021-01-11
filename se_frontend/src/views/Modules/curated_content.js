import React,{useEffect,useState,useContext} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
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

import 'bootstrap/dist/css/bootstrap.css';


import Book from "@material-ui/icons/Book";
import Question from "@material-ui/icons/QuestionAnswer";
import { Fragment } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Favorite from "@material-ui/icons/Favorite";
import { Tabs, Tab } from 'react-bootstrap';
import MyContent from '../Modules/content'
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
  const [key, setKey] = useState("home");

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

  //radiobutton
  const [value, setValue] = React.useState('yes');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
        <div className={classes.container}>            
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >

          <Tab eventKey="home" title="Home">
            <p>this is a home tab</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <p>this is profile tab</p>
          </Tab>
          <Tab eventKey="setting" title="Setting">
            <p>this is setting tab</p>
          </Tab>
       
              
            </Tabs>
            </GridItem>
          </GridContainer>
            
      </div>
    </div>
  );
}

export default Content;
