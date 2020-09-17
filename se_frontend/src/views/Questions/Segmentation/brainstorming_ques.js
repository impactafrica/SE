import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Chat from "@material-ui/icons/Chat";

import { useState } from 'react';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from "components/CustomButtons/Button.js";
import Carousel from "react-slick";
import styles from "assets/jss/material-kit-react/views/loginPage.js";


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
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    wrap:false,
    arrows: false,
    nextIcon: <Button color="primary">Next</Button>,
    prevIcon: <Button>Previous</Button>     
};
const dict = {
  "Brainstorm with your team about every possible market type and segment. Keep in mind that a market segment is a grouping of potential customers who share similar characteristics, needs and/or interests"
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
  </div>,
  "You are done!!":"You are done!! You can now proceeed to narrowing"
  };
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
          <Tab label="Recap" style={{color:"white",height: "32px"}} icon={<PersonPinIcon/>} {...a11yProps(0)} />
          <Tab label="Question" style={{color:"white"}} icon={<Chat />} {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      {
          <Carousel {...settings} >
              {
                Object.entries(dict)
                .map(([mykey,myvalue])=>
                        <div >
                            <TabPanel value={value} index={0}>
                                {mykey}      
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                {myvalue}      
                            </TabPanel>
                    </div>
                )
              }
            </Carousel>
          
      }
      
      <div>
          
      </div>
    </div>
  );
}
