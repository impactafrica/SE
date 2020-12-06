import React,{useContext,useEffect,useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import profile from "assets/img/avatar.jpg";
import Background from "assets/img/profile-bg.jpg";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faFlag} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from "react-router-dom";

//import contexts
import {userContext} from 'context/usercontext'
import {projectContext} from '../../context/projectcontext'

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  const [projects, setProjects] = useState({});
  const [users, setUsers] = useState({});
  const [hasError, setErrors] = useState(false);
  const {projectId, setprojectId} = useContext(projectContext);
  const {projectName, setprojectName} = useContext(projectContext);
  // const {userId, setuserId} = useContext(userContext);
  const user = useContext(userContext);

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

  //fetch our user
  async function fetchUsers() {
    const settings = {
      headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
      }
  };
    const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/users/me/`,settings);
    res
      .json()
      .then(res => setUsers(res))
      .catch(err => setErrors(err));
  }
  useEffect(() => {
    fetchUsers() ;
  },[])

  const history = useHistory();
  const to_edit = () => history.push('/profile-edit');
  const to_project = () => {
    console.log("this is my project",projectName);
    history.push('/project-page');
  } 

  return (
    <div>
      
      <div style={{paddingTop:"250px", backgroundImage: "url(" + Background + ")", filter:"blur(2px)"}} small filter />
      <div className={classNames(classes.main)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                    
                  </div>
                  <br/>
                  <div className={classes.name}>
                    <h3 style={{fontFamily:"Montserrat",fontWeight:"600"}}><b>Christine Gatwiri</b></h3>
                    
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <br/>
            
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <Card>
                  <CardHeader color="primary" style={{display:"flex"}} >
                    <h3 style={{fontFamily:"Montserrat", paddingRight:"40px"}}>My Account Details</h3>
                    <Button color="transparent" onClick={to_edit}>
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                  </CardHeader>
                  <CardBody >
                  <div style={{fontFamily:"Montserrat"}}>
                    <h3 style={{fontFamily:"Montserrat"}}><b style={{fontWeight:"600"}}>Name:</b> {users["name"]}</h3>
                    <h3 style={{fontFamily:"Montserrat"}}><b style={{fontWeight:"600"}}>Email:</b> {users["email"]}</h3>
                  </div>
                  </CardBody>
                </Card>
                <br/>
                <Card>
                  <CardHeader  style={{display:"flex",backgroundColor:"#FF931E",color:"black"}} className={classes.cardHeader}>
                    <h3 style={{fontFamily:"Montserrat",fontWeight:"600", paddingRight:"60px"}}><b>My Projects</b></h3>
                    <Button color="transparent" onClick={to_project}>
                    <FontAwesomeIcon icon={faEdit} />
                    </Button>
                  </CardHeader>
                  {/* fetch projects */}
                  {Object.values(projects).map((projectData) => {
                      console.log("the current user is: ",user.userId);
                      if(projectData.userid===user.userId)
                      {
                        return(
                          <CardBody>
                            <div>
                              <h3 style={{fontFamily:"Montserrat",fontWeight:"600"}}><b>{projectData.project_name}</b></h3>
                              <h3 style={{fontFamily:"Montserrat"}}>{projectData.description}</h3>
                              <h3 style={{fontFamily:"Montserrat"}}><b style={{fontWeight:"600"}}>Progress:</b> 20%</h3>
                            </div>
                            <hr style={{width:"100%",height:"5px"}}/>
                          </CardBody>
                    );}})}
                </Card>
              </GridItem>
              
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
