import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import Chat from "@material-ui/icons/Chat";
import Radio from "@material-ui/core/Radio";

import TextField from '@material-ui/core/TextField';


import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from "components/CustomButtons/Button.js";
import Carousel from "react-slick";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


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


const dict = {

"By following these steps, you will be answering this question: “If I had only one end user to represent our end-user profile, who would it be?”"
:
<div>
Let's get started
<br></br>
<Button color="primary">
        Next
    </Button>
</div>

,
"If you have no sales yet you can look at your beachhead market and come up with persona projections by identifying the buyer(s) in that market."
:
<div>
      <Typography >
      <br></br>
      <p><b>1/8</b></p>
        <h4>Collect and analyze sales data, focusing on the most successful
         customers to date (maybe the 20% of customers generating 80% of the sales). Look at the primary market research you 
         have already done, focusing on customers who would pay (not are just interested) in your potential offering.</h4>
         
      </Typography>
</div>,
"Remember you're answering this question: “If I had only one end user to represent our end-user profile, who would it be?”"
:
<div>
      <Typography >
      <br></br>
      <p><b>2/8</b></p>
        <h4>Present a synthesis of all the research & findings to your team.</h4>
        <br></br>
        <h4>Present the end-user profile to your team.</h4>
        
      </Typography>
</div>,
"Remember you're answering the question: “If I had only one end user to represent our end-user profile, who would it be?”"
:
<div>
      <Typography >
      <br></br>
      <p><b>3/8</b></p>
        <h4>Discuss with your team which end-user would be the best fit for a persona</h4>
         
      </Typography>
</div>,

"Remember the question: “If I had only one end user to represent our end-user profile, who would it be?”"
:
<div>
      <Typography >
      <br></br>
      <p><b>4/8</b></p>
        <h4>Consider separate personas for each customer type (for two- or multi-sided markets) but start with the end-user
             because if they don't use it, there is no value created.</h4>
       
      </Typography>
</div>,

"You are done!!":"Let's now define our persona",

"Personal Details"
:
<div>
      <Typography >
      <br></br>
      <p><b>1/4</b></p>
      <h4><b>Personal Details</b></h4>

        <TextField id="standard-basic" label="First Name" />
        <br></br>
        <TextField id="standard-basic" label="Last Name" />
        <br></br>
        <br></br>
        <p>Personal info (sex, age, education, family, born, raised)</p>
        <TextField
          id="outlined-multiline-static"
          label="Personal Info"
          multiline
          rows={5}
          variant="outlined"
        />

<br></br>

         
      </Typography>
</div>,
"Career Context"
:
<div>
      <Typography >
      <br></br>
      <p><b>1/4</b></p>
      <h4><b>Career Context</b></h4> 
      <p>Job info (company, position, how many years in the job, training, salary, performance metrics if a B2B case etc.) </p>
      <TextField
          id="outlined-multiline-static"
          label="Job Info"
          multiline
          rows={5}
          variant="outlined"
        />   
        <p>Operating environment (This could be both the work and home environments. Consider factors such as managers, colleagues, workplace challenges, children ets)</p>
      <TextField
          id="outlined-multiline-static"
          label="Job Info"
          multiline
          rows={5}
          variant="outlined"
        /> 
<br></br>

        
      </Typography>
</div>,

    };

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
          <Tab label="Recap" style={{color:"white"}} icon={<PersonPinIcon/>} {...a11yProps(0)} />
          <Tab label="Question" style={{color:"white"}}icon={<Chat />} {...a11yProps(1)} />
          
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
