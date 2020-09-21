import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Chat from "@material-ui/icons/Chat";
import Radio from "@material-ui/core/Radio";


import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from "components/CustomButtons/Button.js";
import Carousel from "react-slick";
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
const dict = [
    {
  "mydiv"
  :
  <div>
        <Typography >
        <br></br>
        <p><b>1/7</b></p>
          <FormControl component="fieldset">
          <FormLabel style={{color:"black"}} component="legend">Is the customer well funded?</FormLabel>
          <RadioGroup aria-label="gender" name="gender1">
            <FormControlLabel style={{color:"black"}} value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel style={{color:"black"}} value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl>
        <br></br>
        <Button color="primary">
          Next
      </Button>
        </Typography>
    </div>
    },
    {
  "mydiv"
  :
  <div>
       
        <Typography >
        <br></br>
        <p><b>2/7</b></p>
          <FormControl component="fieldset">
          <FormLabel style={{color:"black"}} component="legend">is the end user readily accessible to you and your salesforce?</FormLabel>
          <RadioGroup aria-label="gender" name="gender1">
            <FormControlLabel style={{color:"black"}} value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel style={{color:"black"}} value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl>
        <br></br>
        <Button color="primary">
          Next
      </Button>
        </Typography>
  </div>
    },
    {
  "mydiv"
  :
  <div>
        <Typography >
        <br></br>
        <p><b>3/7</b></p>
        <p style={{color:"black",justify:"center"}}>What need does your product fulfill?</p>
        <textarea style={{height:80,width:270}}/>
        <br></br>
        <Button color="primary">
          Next
      </Button>
        </Typography>
  </div>
    },
    {
  "mydiv"
  :
  <div>
        <Typography >
        <br></br>
        <p><b>4/7</b></p>
          <FormControl component="fieldset">
          <FormLabel style={{color:"black"}} component="legend">Can you deliver a full product?</FormLabel>
          <RadioGroup aria-label="gender" name="gender1">
            <FormControlLabel style={{color:"black"}} value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel style={{color:"black"}} value="no" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl>
        <br></br>
        <Button color="primary">
          Next
      </Button>
        </Typography>
  </div>
    },
    {
  "mydiv"
  :
  <div>
        <Typography >
        <br></br>
        <p><b>5/7</b></p>
        <p style={{color:"black",justify:"center"}}>Where is the competition??</p>
        <textarea style={{height:80,width:270}}/>
        <br></br>
        <Button color="primary">
          Next
      </Button>
        </Typography>
  </div>
    },
    {
"mydiv"
:
<div>
    <Typography >
    <br></br>
    <p><b>6/7</b></p>
      <FormControl component="fieldset">
      <FormLabel style={{color:"black"}} component="legend">Can you leverage on success? </FormLabel>
      <RadioGroup aria-label="gender" name="gender1">
        <FormControlLabel style={{color:"black"}} value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel style={{color:"black"}} value="no" control={<Radio />} label="No" />
        </RadioGroup>
    </FormControl>
    <br></br>
    <Button color="primary">
      Next
  </Button>
    </Typography>
</div>
    },
{
  "mydiv"
:
<div>
    <Typography >
    <br></br>
    <p><b>7/7</b></p>
      <FormControl component="fieldset">
      <FormLabel style={{color:"black"}} component="legend">Does this market segment align itself to your brand? </FormLabel>
      <RadioGroup aria-label="gender" name="gender1">
        <FormControlLabel style={{color:"black"}} value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel style={{color:"black"}} value="no" control={<Radio />} label="No" />
        </RadioGroup>
    </FormControl>
    <br></br>
    <Button color="primary">
      Next
  </Button>
    </Typography>
</div>},
{
"You are done!!":"You are done!!You can now proceed to primary market research"}
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
          <Tab label="Your Exercise" style={{color:"white"}}icon={<Chat />} {...a11yProps(1)} />
          
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
