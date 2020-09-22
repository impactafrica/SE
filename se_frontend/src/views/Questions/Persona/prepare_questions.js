import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Chat from "@material-ui/icons/Chat";
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


const dict = [
{"mydiv"
:
<div>
      <Typography >
      <br></br>
      <p><b>1/4</b></p>
        <p>Collect and analyze sales data, focusing on the most successful
         customers to date (maybe the 20% of customers generating 80% of the sales). Look at the primary market research you 
         have already done, focusing on customers who would pay (not are just interested) in your potential offering.</p>
        
      </Typography>
</div>},
{"mydiv"
:
<div>
      <Typography >
      <br></br>
      <p><b>2/4</b></p>
        <p>Present a synthesis of all the research & findings to your team.</p>
        <p>Present the end-user profile to your team.</p>
        
      </Typography>
</div>},
{"mydiv"
:
<div>
      <Typography >
      <br></br>
      <p><b>3/4</b></p>
        <p>Discuss with your team which end-user would be the best fit for a persona</p>
         
      </Typography>
</div>},

{"mydiv"
:
<div>
      <Typography >
      <br></br>
      <p><b>4/4</b></p>
        <p>Consider separate personas for each customer type (for two- or multi-sided markets) but start with the end-user
             because if they don't use it, there is no value created.</p>
       
      </Typography>
</div>},

{"mydiv":"Let's now define our persona"}
]

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
