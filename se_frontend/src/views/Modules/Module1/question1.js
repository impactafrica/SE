import React,{useEffect} from "react";
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

export default function Module_Item(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const dashboardRoutes = [];
  const history = useHistory();
  const to_modules = () => history.push('/market_types');
  const to_module = () => history.push('/module1_item');
  
  useEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div>
      <Header
        color="primary"
        routes={dashboardRoutes}
        brand="Systematic Entrepreneurship"
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
        <div className={classes.container}>
          <GridContainer width="90%">

          {/* <GridItem className={classes[cardAnimaton]}>
            <h3 style={{color:"black"}}><b>Your project Kuzah</b></h3>
          </GridItem> */}
          <GridItem xs={12} sm={12} md={12}>
            <Button 
              onClick={to_module}
              style = {{backgroundColor:"purple"}}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </GridItem>

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
          </GridItem>
         
          <GridItem className={classes[cardAnimaton]}>
          <h3 style={{color:"black"}}><b>Market Types</b></h3>
          <h5 style={{color:"black"}}><b>List 8 possible market segments</b></h5>
            
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card color="primary" className={classes[cardAnimaton]}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Press ENTER after each segment"
                    multiline
                    rows={5}
                    variant="outlined"
                  />
              </Card>
            </GridItem>
          
          </GridContainer>
          <GridContainer>
          
        </GridContainer>
        </div>
      </div>
    // </div>
  );
}
