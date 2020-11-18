import React,{useEffect,useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

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
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

const useStyles = makeStyles(styles);

const Question = (props) => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  async function fetchData() {
    const settings = {
      headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
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

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const dashboardRoutes = [];
  const history = useHistory();
  const to_modules = () => history.push('/content');
  const to_module = () => history.push('/module1_item');
  
  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
        <div className={classes.container}>
          <GridContainer width="90%">

          <GridItem xs={12} sm={12} md={12}>
            <Button onClick={to_modules} color="white">
              <FontAwesomeIcon icon={faBookReader} />
            </Button>
            <Button color="primary">
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
         
          { Object.values(planets).map((postData) => {
              console.log(postData);
            return(
              <GridItem xs={12} sm={12} md={12}>

          <GridItem className={classes[cardAnimaton]} style={{fontFamily:"Montserrat"}}>
          <h3 style={{color:"black",fontFamily:"Montserrat",fontWeight:"600"}}><b>{postData.content}</b></h3>
          <h5 style={{color:"black",fontFamily:"Montserrat",fontWeight:"400"}}><b>{postData.question}</b></h5>
            
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Separate your answers with a comma"
                    multiline
                    rows={5}
                    variant="outlined"
                  />
              </Card>
              <div style={{ display: "flex" }}>
              <Button style={{ marginLeft: "auto" }} onClick={to_modules} color="primary">
                Next
              </Button>
              </div>
              <Button 
              onClick={to_module}
              style = {{backgroundColor:"purple"}}>
              Back
            </Button>
            </GridItem>
            </GridItem>
             );
            })}
          
          </GridContainer>
         
        </div>
      </div>
    // </div>
  );
}
export default Question;