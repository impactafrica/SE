import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
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
      {/* <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      > */}
        
        <div className={classes.container}>
          <GridContainer width="70%">
          <GridItem style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}><h2 style={{color:"black"}}><b>Primary Market Research</b></h2></GridItem>
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
                            url="https://www.youtube.com/watch?v=_-N5u7i_Vgk"
                    />
                    </div>
                    <br></br>
                  <Typography fontSize="12">
                  After narrowing down your viable market opportunities,  an in depth analysis and 
                  research of your primary market is now due. Gather the vast majority of your information 
                  by directly talking to real potential customers. Understand their needs, situations, pains
                   and opportunities. It is imperative to interact with your potential end users. There are no
                    shortcuts to this step.  Stay objective and keep an open mind. 

                      <br></br>
                      <br></br>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                    <ReactPlayer
                            url="https://www.youtube.com/watch?v=qhAAnfSj7m8"
                    />
                    </div>
                     
                  </Typography>    
              </div>
            </GridItem>
          </GridContainer>
          
        </div>
      </div>
    // </div>
  );
}
