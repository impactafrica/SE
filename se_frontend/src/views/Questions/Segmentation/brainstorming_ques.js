import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Chat from "@material-ui/icons/Chat";

import Card from "components/Card/Card.js";
import { useState } from 'react';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from "components/CustomButtons/Button.js";
import Slider from "react-slick";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import ArrowLeft from "assets/img/arrow_left.png"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(styles);

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [buttonText, setButtonText] = useState("Submit");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        <img src={ArrowLeft} alt="arrow_left"/>
      </div>
    );
  }

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    wrap:false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />   
};

const dict = [
  {
  "mydiv"
  :
  <div >
      <p style={{color:"black",justify:"center"}}>
      List 8 possible market segments. 
      Keep in mind that a market segment is 
      a grouping of potential customers who share similar characteristics, needs and/or interests. 
      </p>
      <textarea style={{height:80,width:270}}/>
      <br></br>
      <Button onClick={() => setButtonText("Submitted!")}
      color="primary">
          {buttonText}
      </Button>
  </div>
  }
]
  return (
      
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"purple"}} color="purple">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Engage" style={{color:"white"}} icon={<Chat />} {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      {
          <Slider {...settings} >
            {
              dict.map(function(d,idx)
              {
                return(
                  <TabPanel key={idx}>{d.mydiv}</TabPanel>
                )
              })
            }
          </Slider>
          
      } 
      
      <div>
          
      </div>
    </div>
  );
}
