import React,{useState,useContext,useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import profile from "assets/img/twixy.jpg";
import Background from "assets/img/profile-bg.jpg";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


import { useHistory } from "react-router-dom";

//import contexts
import {projectContext} from '../../context/projectcontext'
import {userContext} from '../../context/usercontext'


import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

const ProfilePage = () => {
  const [projects, setProjects] = useState({});
  const [hasError, setErrors] = useState(false);
  const {projectId, setprojectId} = useContext(projectContext);
  const {projectName, setprojectName} = useContext(projectContext);
  const {userId, setuserId} = useContext(userContext);

  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  
  //fetch our projects
  async function fetchData() {
    const settings = {
      headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
      }
  };
    const res = await fetch(`${process.env.REACT_APP_API_URL}/modules/project/`,settings);
    res
      .json()
      .then(res => setProjects(res))
      .catch(err => setErrors(err));
  }
  useEffect(() => {
    fetchData() ;
  },[])

  const history = useHistory();
  const to_profile = () => history.push('/profile-page');
  const to_home = () => history.push('/');


  function to_modules (myprojectId,myprojectName) {
    
    setprojectId(myprojectId);
    setprojectName(myprojectName);
    console.log("selected project is",myprojectName)
    history.push('/modules_list');
  } 

  return (
    <div>
          <div className={classes.container}>
            <GridContainer justify="left" style={{padding:"10px"}}>
              <GridItem xs={12} sm={12} md={12} style={{paddingTop:"120px"}}>
                <Breadcrumbs separator="›" aria-label="breadcrumb" 
                  style={{fontSize:"15px",color:"purple"}}>
                  <Link onClick={to_home}
                    style={{color:"purple",fontFamily:"Montserrat"}} >
                    <b>Home</b>
                  </Link>
                  <p
                      style={{color:"#3d3d3d",fontFamily:"Montserrat",paddingTop:"6px"}}
                    >
                      <b>Projects</b>
                    </p>
                </Breadcrumbs>
              </GridItem>
              <br/>
            <br/>
            <hr style={{width:"100%",height:"5px"}}/>
            <br/>

              <GridItem justify="center" style={{textAlign:"center"}}>
                <h3 style={{fontFamily:"Montserrat",fontWeight:"600"}}>
                  <b>Welcome back to SE! Select one of your projects to proceed</b></h3>
              </GridItem>
              <br/>
              <br/>
              <GridItem xs={12} sm={12} md={12}>
              
                <br/>
                {Object.values(projects).map((projectData) => {
                  console.log("the current user is: ",userId);

                  if(projectData.userid===userId)
                  {
                    return(
                      <GridItem xs={12} sm={12} md={8} justify="center">
                        <List component="nav"  aria-label="main mailbox folders">
                          <ListItem button>
                            
                            <ListItemText ><h3 style={{fontFamily:"Montserrat",fontWeight:"600",color:"black"}}>
                              <b>{projectData.project_name}</b></h3>
                            </ListItemText>
                            <Button
                              style={{width:"30%",backgroundColor:"#FF931E",color:"black",fontFamily:"Montserrat",fontWeight:"600"}}
                              onClick={() => to_modules(projectData.project_id,projectData.project_name)}>
                              Continue
                            </Button>
                          </ListItem>
                        </List>
                        <Divider/>
                    <br/>
                    <br/>
                    </GridItem>
                    
                  );
                  }
                }
                )}
                <br/>
                    <br/>
                
              </GridItem>
              
            </GridContainer>
            </div>
          </div>
         
  );
}

export default ProfilePage;
