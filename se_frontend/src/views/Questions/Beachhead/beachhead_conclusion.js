import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Chat from "@material-ui/icons/Chat";

import {useState} from 'react'
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
const [buttonText, setButtonText] = useState("Submit");

const dict = [
  {"mydiv"
  :
  <div>
        <Typography >
        <br></br>
        <p style={{color:"black",justify:"center"}}>Describe your selected beachhead market explaining how it meets the 
        criteria in the target market section and why you think it is the right beachhead market. 
          </p>
        <textarea style={{height:80,width:270}}/>
        <br></br>
        <Button onClick={() => setButtonText("Submitted!")}
        color="primary">
          {buttonText}
      </Button>
        </Typography>
  </div>},
  {"mydiv":"You are done!!"}
]

  return (
      
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"purple"}} color="purple">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="white"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Engage" style={{color:"white"}}icon={<Chat />} {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      {
          <div>
            <Carousel {...settings}>
            {
              dict.map(function(d, idx)
              {
                return(
                  <TabPanel key={idx}>{d.mydiv}</TabPanel>
                )
              })
            }
            </Carousel>
          </div>     
      }
      
      <div>
          
      </div>
    </div>
  );
}
