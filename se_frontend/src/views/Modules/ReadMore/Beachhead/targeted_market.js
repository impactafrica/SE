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
              <ReactPlayer  width={"60%"}
                      url="https://www.youtube.com/watch?v=EO7oMbQlI9U "
                    />
                  <Typography fontSize="12">
                  You will quickly realize that your beachhead market can be segmented further into smaller markets.
                    In order for your market to be optimally targeted, it should meet these three conditions. Subject 
                    your beachhead market to these three conditions until you can find a segment which meets all three conditions:

                    <ul>
                        <li>The customers within the market all buy similar products.</li>
                    </ul>
                    The customers within the market all buy similar products. 
                    The customers within the market have a similar sales cycle and expect products to provide value in similar ways. Your salespeople can shift from selling to one customer to selling to a different customer and still be very effective with little or no loss of productivity. 
                    There is “word of mouth” between customers in the market segment, meaning they can serve as 
                    compelling and high-value references for each other in making purchases. 


                  <ReactPlayer  width={"60%"}
                      url="https://www.youtube.com/watch?v=Gj2lyU10Y84"
                    />
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
