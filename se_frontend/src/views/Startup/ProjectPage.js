import React,{useState,useEffect,useContext} from "react";
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

import profile_pic from 'assets/img/avatar.jpg'
import Background from "assets/img/profile-bg.jpg";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from "react-router-dom";
import {userContext} from 'context/usercontext'

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
  const [hasError, setErrors] = useState(false);
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

  const history = useHistory();
  const to_profile = () => history.push('/profile-page');
  const to_project = () => history.push('/project-edit');
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
                    <img src={profile_pic} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 style={{fontFamily:"Montserrat",fontWeight:"600"}}><b>My Projects</b></h3>
                    
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            
            <br/>
            
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                
                <br/>
                {/* fetch projects */}
                {Object.values(projects).map((projectData) => {
                      console.log("the current user is: ",user.userId);
                      if(projectData.userid===user.userId)
                      {
                        return(
                          <GridItem>
                          <Card>
                            <CardHeader style={{display:"flex",backgroundColor:"#FF931E",color:"black"}} className={classes.cardHeader}>
                              <h3 style={{fontFamily:"Montserrat",fontWeight:"600", paddingRight:"60px"}}>{projectData.project_name}</h3>
                            </CardHeader>
                            <CardBody>
                            <div>
                              {/* <h3 style={{fontFamily:"Montserrat"}}><b>Project:</b> Done!International</h3> */}
                              <h3 style={{fontFamily:"Montserrat"}}><b style={{fontWeight:"600"}}>Description:</b> {projectData.description}</h3>
                              <h3 style={{fontFamily:"Montserrat"}}><b style={{fontWeight:"600"}}>Progress:</b> 20%</h3>
                              <h3 style={{fontFamily:"Montserrat"}}><b style={{fontWeight:"600"}}>Current Module:</b> Market Research</h3>                              
                            </div>

                            </CardBody>
                            <CardFooter style={{alignItems:"center"}} className={classes.cardFooter} >
                            
                              
                              <Button
                                  size="xlg"
                                  onClick={to_project}
                                  style={{fontFamily:"Montserrat",fontWeight:"600",backgroundColor:"#FF931E",color:"black"}}
                                  type='submit'
                                >
                                  Edit Project
                                </Button>
                              
                          </CardFooter>
                          </Card>
                          <br/>
                          <br/>
                          </GridItem>
                      );}})}
                      <Button
                        size="xlg"
                        onClick={to_profile}
                        style={{fontFamily:"Montserrat",fontWeight:"600",backgroundColor:"#FF931E",color:"black"}}
                        type='submit'
                      >
                        My profile
                      </Button>
              </GridItem>
              
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
