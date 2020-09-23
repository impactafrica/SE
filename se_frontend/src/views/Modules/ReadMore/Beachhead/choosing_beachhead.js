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
          <GridItem><h2 style={{color:"black"}}><b>Choosing your beachhead market</b></h2></GridItem>
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
                      url="https://www.youtube.com/watch?v=EO7oMbQlI9U "
                    />
                        </div>
              
                    <br></br>
                  <Typography fontSize="12">
                  We started out by brainstorming and laying out all of the potential markets where your 
                  product would thrive. Then we narrowed down all of the options you had to about 3-5 markets. 
                  In this step we will narrow down focus further to enable us to determine what your beachhead market is. 

                    By definition, a beachhead market is  a market that fits certain characteristics that make it 
                    ideal for a product to thrive.               
                    In this step, we shall analyze the top 3-5 markets you selected and narrow them the ideal one.
                     After that, we shall further segment that one market to determine your beachhead market. Initially,
                      especially with first time entrepreneurs, there’s a notion that more markets will mean their odds of
                       success are higher. However, the contrary is true. You should aim to identify one market that fits 
                       the demand for your product then leverage off that success. 

                    In this step, we shall subject the 3-5 markets that we picked earlier to the same criteria
                     in Step a.2 till we can identify your beachhead markets. NOTE: In the eventuality that 2 or
                      more markets stand out as your beachhead market, it is important that you select one and move with it. 
                    <br></br>
                    <br></br>
                  <ReactPlayer  width={"60%"}
                      url="https://www.youtube.com/watch?v=Gj2lyU10Y84"
                    />
                    <br></br>
                    Some activities you can undertake during this step are: 

                    Brainstorm with your team about every possible market type (b2b, b2c, b2b2c, b2b & b2c) and segment 
                    these customers based on the following parameters (and as many others as you deem necessary:  Geography,
                     Income, Industry and Gender, Profession. 

                      <br></br>
                      <br></br>
                  </Typography>
              </div>
            </GridItem>
          </GridContainer>
          
        </div>
      </div>
    // </div>
  );
}
