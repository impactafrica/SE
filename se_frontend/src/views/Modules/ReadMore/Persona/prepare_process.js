import React,{useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Typography from '@material-ui/core/Typography';


import styles from "assets/jss/material-kit-react/views/loginPage.js";
import ReactPlayer from "react-player"


const useStyles = makeStyles(styles);

export default function Module_Item(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const dashboardRoutes = [];
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
          <GridContainer width="70%">
          <GridItem style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}><h2 style={{color:"black"}}><b>Persona</b></h2></GridItem>
          <GridItem xs={12} sm={12} md={11} className={classes[cardAnimaton]}>
              
              <div className={classes.root} style={{color:"black",fontSize:"10px"}}>
              <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <ReactPlayer  
                      url="https://www.youtube.com/watch?v=hdYneP3mavo"
                    />
                        </div>
              <br></br>
                  <Typography fontSize="12">
                  In this step you will describe a persona. A buyer persona is a detailed description of one
                   potential, real end user. This step ensures that the whole team shares the same vision as
                    to who the intended end user is set out to be and allows focus to be narrowed down to that 
                    one single persona. Remember, as earlier mentioned, narrowing down focus to a very specific
                     audience has higher chances of success. Further narrowing down to a specific persona goes on 
                     to very much boost those odds. 
                    A paying—or monetizable—customer is the most important element for any business.
              
                  </Typography>
              </div>
            </GridItem>
          </GridContainer>
          
        </div>
      </div>
    // </div>
  );
}
