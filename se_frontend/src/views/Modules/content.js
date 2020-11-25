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

import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";

//import contexts here
import {subTopicContext} from '../../context/subtopiccontext'

import styles from "assets/jss/material-kit-react/views/loginPage.js";

const useStyles = makeStyles(styles);

const Content = (props) => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});
  const {subtopicId, setsubTopicId} = useContext(subTopicContext)

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

  return (
    <div>
        <div className={classes.container}>
          <GridContainer width="90%">
            <GridItem xs={12} sm={12} md={12}>
              <Button color="primary">
                <FontAwesomeIcon icon={faBookReader} />
              </Button>
              <Button onClick={to_modules} color="white">
                <FontAwesomeIcon icon={faQuestion} />
              </Button>
              <Button color="white">
              <FontAwesomeIcon icon={faBookReader} />
            </Button>
            <Button color="white">
              <FontAwesomeIcon icon={faQuestion} />
            </Button>
            <Button color="white">
              <FontAwesomeIcon icon={faBookReader} />
            </Button>
            <Button color="white">
              <FontAwesomeIcon icon={faQuestion} />
            </Button>
            <Button color="white">
              <FontAwesomeIcon icon={faBookReader} />
            </Button>
            <Button color="white">
              <FontAwesomeIcon icon={faQuestion} />
            </Button>
            </GridItem>
         
          {Object.values(planets).map((postData) => {
            const sanitizer = DOMPurify.sanitize;
            console.log("fetched the current subtopic id,content page",subtopicId);

            if(postData.subtopic===subtopicId){
            console.log("this is my subtopic",postData.subtopic)

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


        );
         }
        })}

        
        </GridContainer>
      </div>
    </div>
  );
}

export default Content;
