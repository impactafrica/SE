import React from "react";
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

import { Link } from "react-router-dom";

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
          <GridContainer width="100%">
          <GridItem
            
          ><h2 style={{color:"black"}}><b>Market Segmentation: Market Types</b></h2></GridItem>
          <GridItem xs={12} sm={12} md={11} className={classes[cardAnimaton]}>
              
              <div className={classes.root} style={{color:"black",fontSize:"10px"}}>
              
                  <Typography fontSize="12"> 
                      We shall begin by looking into and understanding different market types.
                      <br></br>
                      <br></br>
                   
                      <b>a.1. Market Types</b>                 
                    <br></br>
                      <br></br>
                   
                    To eventually understand who you are targeting with your product, we first need to 
                    distinguish between market types. Each market type will need a different strategy and 
                    approach, hence making it necessary to understand them.
                    
                    <br/>
                    <br/>
                    <b>B2C (Business to Customer):</b> These are businesses that sell directly to their end users 
                    <br/>
                    <br/>
                   <b>B2B (Business to Business):</b> These are businesses that sell to other businesses. 
                   <br/>
                    <br/>
                    <b>B2M (Business to Many):</b> Business to many is simply a collective term for businesses that 
                    operate on both b2b and b2c models. These businesses sell to both businesses and directly to consumers concurrently
                    <br></br>
                    <br></br>
                    
          
                    <br></br>
                   <b>B2B2C (Business to Business to Customer):</b> 
                   <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <ReactPlayer
                          url="https://www.youtube.com/watch?v=V1fALSzZXlI"
                        />
                        </div>
                        <br></br>
                   {' '}
                   <Link to="https://www.forbes.com/sites/forbescommunicationscouncil/2018/05/18/the-challenges-of-b2b2c-marketing-in-major-corporations/#16b4149a776a">
                  <b>B2B2C</b>
                  </Link>
                  {' '}
                   is close to a fusion of b2b and b2c. In b2b2c, businesses sell 
                    their product to other businesses to leverage on the access to customers that the second company has. Sticking to our
                     previous example, if the cereals and grains wholesaler is struggling to acquire customers, they could sell their product
                      to an established chain of supermarkets that will in turn sell the cereals and grains to the end user. 

                    While b2c faces the major challenge of entering and dominating competitive markets, b2b struggles with lead 
                    generation and more often than not, a very slow sales pipeline, b2b offers a middle ground to both challenges. 
                     Eventually, the net effect of partnering with an established distribution channel allows you to slowly build a
                      loyal customer base. 

                  </Typography>
                    

                    
              </div>
            </GridItem>
          </GridContainer>
          
        </div>
      </div>
    // </div>
  );
}
